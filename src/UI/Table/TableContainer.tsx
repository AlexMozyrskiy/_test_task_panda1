import React, { useEffect, useState } from "react";
import Table from "./Table";
import {
    MapStateToPropsTSType, PropsTSType,
    MapDispatchToPropsTSType, OwnPropsTSType,
    OnPaginationSquareClickTSType, sortByEnum,
    OnTableHeaderFieldСlickTSType, SortingArrowViewTSType,
    onSearchFieldChangeTSType
} from "./TableContainerTypeScriptTypes";
import { CommentTSType } from "../../BLL/commonTSTypes";
import { RootStateTSType } from "../../BLL/redux/redux";
import { commentsThunkCreator } from "../../BLL/CommentsTable/thunkCreators";
import { connect } from "react-redux";
import { getCommentsSelector, getCurrentPageSelector, getItemsPerPageSelector } from "../../BLL/CommentsTable/selectors";
import { getIsAppLoadedSelector } from "../../BLL/AppLoaded/selectors";
import AppPreloader from "../Preloader/Preloader";
import getCurrentPageComments from "../../helpers/getCurrentPageComments";
import getPaginationSquaresArrayNumbers from "../../helpers/getPaginationSquaresArrayNumbers";
import sortArrayOfObjectByFieldName from "../../helpers/sortArrayOfObjectByFieldName";
import uniqueItemsInArr from "../../helpers/uniqueItemsInArr";
import findASubstringInString from "../../helpers/findASubstringInString";
import { setCurrentPageIntoStateActionCreator } from "../../BLL/CommentsTable/actionCreators";


const TableContainer: React.FC<PropsTSType> = (props) => {
    useEffect(() => {
        props.commentsThunkCreator();
    }, [props.isAppLoaded]);

    let [firstPaginationSquareNumber, setFirstPaginationSquareNumber] = useState(1);                            // цифра в первом квадратике пагинации
    let [lastPaginationSquareNumber, setLastPaginationSquareNumber] = useState(5);                              // цифра в последнем квадратике пагинации
    let [commentsSorted, setCommentsSorted] = useState(sortByEnum.notSorted);                                   // если 0 - не отсортирован, 1 - сортирован по возрастанию, 2 - по убыванию
    let [sortByField, setSortByField] = useState<string>("");                                                   // название поля по которому будем сортировать
    let [sortedComments, setSortedComments] = useState<Array<CommentTSType>>([{                                 // отсортированный массив объектов комментариев
        body: null,
        email: null,
        id: null,
        name: null,
        postId: null
    }]);
    let [searchFieldValue, setSearchFieldValue] = useState<string>("");                                         // значение вводимое в поле поиска для фильтрации
    let [arraySearchedIndexes, setArraySearchedIndexes] = useState<Array<number>>([]);                          // массив индексов строк таблицы комментариев, где нашли подстроку введенную в поле ввода




    const totalCountPaginationSquares: number = Math.ceil(props.comments.length / props.itemsPerPage);                  // общее количество возможных отображаемых квадратиков

    let currentPageCommentsOriginal = getCurrentPageComments(props.comments, props.currentPage, props.itemsPerPage)     // фильтруем все комменты и получаем комменты согласно текущей страницы и количеству комментов на странице

    // ---------------------------- Проверим нужно ли сортировать комментарии -------------------------------------------------
    let currentPageComments = commentsSorted === sortByEnum.notSorted ? [...currentPageCommentsOriginal] : [...sortedComments];       // если комментарии не остортированы массив комментариев для мапа на странице будет оригинал, в противном случае отсортированный
    // ---------------------------- / Проверим нужно ли сортировать комментарии -----------------------------------------------


    // ------------------------------ Проверим ищет ли пользователь что-ир и если ищет изменим массив для мапа в FC ----------------
    if (arraySearchedIndexes.length != 0) {
        currentPageComments = currentPageComments.filter((item, index) => {
            return arraySearchedIndexes.includes(index);
        });
    }
    if (arraySearchedIndexes.length === 0 && searchFieldValue.length != 0) {    // если ничего не найдено, но значение в поле поиска есть, то есть протльзователь набирает текст но ничего не найдено
        currentPageComments = [{
            body: "Ничего не найдено",
            email: null,
            id: null,
            name: null,
            postId: null
        }]
    }
    // ------------------------------ / Проверим ищет ли пользователь что-ир и если ищет изменим массив для мапа в FC --------------



    // ------------------------ Получим массив из цифр для его мапа в квадратиках пагинации -----------------------------------
    const paginationSquareNumbers = getPaginationSquaresArrayNumbers(
        props.comments.length,
        props.itemsPerPage,
        5,
        props.currentPage,
        firstPaginationSquareNumber,
        lastPaginationSquareNumber);
    // ------------------------ / Получим массив из цифр для его мапа в квадратиках пагинации ---------------------------------


    // ----------------------------------- Функция при клике на пагинациооный квадратик ----------------------------------------
    const onPaginationSquareClick: OnPaginationSquareClickTSType = (clickedPage) => {
        props.setCurrentPageIntoStateActionCreator(clickedPage);
        setFirstPaginationSquareNumber(paginationSquareNumbers[0]);
        setLastPaginationSquareNumber(paginationSquareNumbers[(paginationSquareNumbers.length - 1)]);
    }
    // ----------------------------------- / Функция при клике на пагинациооный квадратик --------------------------------------


    // -------------------------- Функция при клике на заголовок поля таблицы, произведем сортировку ---------------------------
    const onTableHeaderFieldСlick: OnTableHeaderFieldСlickTSType = (fieldName) => {
        setSortByField(fieldName);                              // сортируем по переданному в параметре названию поля

        if (commentsSorted === sortByEnum.notSorted) {           // если до клика таблица не была отсортирована
            setCommentsSorted(sortByEnum.ascending);            // отсортируем по возрастанию
            const sortedComments = sortArrayOfObjectByFieldName(currentPageComments, fieldName, true)  // если требуется сортировка по возрастанию
            setSortedComments(sortedComments);
        } else if (commentsSorted === sortByEnum.ascending) {    // если до клика таблица была отсортирована по возрастанию
            setCommentsSorted(sortByEnum.descending);           // отсортируем по убыванию
            const sortedComments = sortArrayOfObjectByFieldName(currentPageComments, fieldName, false) // если требуется сортировка по убыванию
            setSortedComments(sortedComments);
        } else if (commentsSorted === sortByEnum.descending) {   // если до клика таблица была отсортирована по убыванию
            setCommentsSorted(sortByEnum.ascending);            // отсортируем по возрастанию
            const sortedComments = sortArrayOfObjectByFieldName(currentPageComments, fieldName, true)  // если требуется сортировка по возрастанию
            setSortedComments(sortedComments);
        }
    }
    // -------------------------- / Функция при клике на заголовок поля таблицы, произведем сортировку -------------------------


    // ---------------- Функция определяет по состоянию сортировки какую стрелку возвращать вниз или вверх ---------------------
    const getSortingArrowView: SortingArrowViewTSType = (sortAscending) => {
        if (sortAscending === sortByEnum.notSorted) return null;
        if (sortAscending === sortByEnum.ascending) return <span>&#9660;</span>;      // если по возрастанию вернем стрелку вниз
        if (sortAscending === sortByEnum.descending) return <span>&#9650;</span>;     // если по убыванию вернем стрелку вверх
    }
    // ---------------- / Функция определяет по состоянию сортировки какую стрелку возвращать вниз или вверх -------------------


    // ----------------------------- Функция при изменении в поле ввода поиска -----------------------------
    const onSearchFieldChange: onSearchFieldChangeTSType = (value) => {
        setSearchFieldValue(value);                                     // запишем новое значение из поля ввода поиска для его отображения в поле ввода (флакс)
        let commentsForSearch = commentsSorted === sortByEnum.notSorted ? [...currentPageCommentsOriginal] : [...sortedComments];

        let indexesArray: Array<number> = [];                                       // массив индексов строк удовлетворивших посику
        commentsForSearch.forEach((item, i) => {
            if (item.body != null) {                                                // null не подойдет для этой функции, его нельзя сплитать, должна быть только строка
                let returnedFoundObj = findASubstringInString(item.body, value);
                if (returnedFoundObj.isSearchValueFinded) {                         // если нашли подстроку в строке
                    indexesArray.push(i)                                            // запушем индекс строки в массив
                }
            }
            if (item.email != null) {                                               // null не подойдет для этой функции, его нельзя сплитать, должна быть только строка
                let returnedFoundObj = findASubstringInString(item.email, value);
                if (returnedFoundObj.isSearchValueFinded) {                         // если нашли подстроку в строке
                    indexesArray.push(i)                                            // запушем индекс строки в массив
                }
            }
            if (item.name != null) {                                                // null не подойдет для этой функции, его нельзя сплитать, должна быть только строка
                let returnedFoundObj = findASubstringInString(item.name, value);
                if (returnedFoundObj.isSearchValueFinded) {                         // если нашли подстроку в строке
                    indexesArray.push(i)                                            // запушем индекс строки в массив
                }
            }
            if (item.id != null) {                                                  // null не подойдет для этой функции, его нельзя сплитать, должна быть только строка
                let returnedFoundObj = findASubstringInString(item.id.toString(), value);
                if (returnedFoundObj.isSearchValueFinded) {                         // если нашли подстроку в строке
                    indexesArray.push(i)                                            // запушем индекс строки в массив
                }
            }
            if (item.postId != null) {                                              // null не подойдет для этой функции, его нельзя сплитать, должна быть только строка
                let returnedFoundObj = findASubstringInString(item.postId.toString(), value);
                if (returnedFoundObj.isSearchValueFinded) {                         // если нашли подстроку в строке
                    indexesArray.push(i)                                            // запушем индекс строки в массив
                }
            }
        });

        setArraySearchedIndexes(uniqueItemsInArr(indexesArray));                // запишем в локальный стейт массив уникальных(без повторений) индексов строк оригинального массива
    }
    // ----------------------------- / Функция при изменении в поле ввода поиска ---------------------------



    if (props.isAppLoaded) {                             // если ответ от сервера еще не получен покажем прелоадер
        return <Table
            comments={props.comments}
            currentPageComments={currentPageComments}
            paginationSquareNumbers={paginationSquareNumbers}
            currentPage={props.currentPage}
            totalCountPaginationSquares={totalCountPaginationSquares}
            onPaginationSquareClick={onPaginationSquareClick}
            onTableHeaderFieldСlick={onTableHeaderFieldСlick}
            getSortingArrowView={getSortingArrowView}
            sortByField={sortByField}
            commentsSorted={commentsSorted}
            searchFieldValue={searchFieldValue}
            onSearchFieldChange={onSearchFieldChange}
        />
    } else {
        return <AppPreloader />
    }
}


const mapStateToProps = (state: RootStateTSType) => {
    return {
        comments: getCommentsSelector(state),           // все комментарии
        isAppLoaded: getIsAppLoadedSelector(state),
        currentPage: getCurrentPageSelector(state),
        itemsPerPage: getItemsPerPageSelector(state)
    }
}

const mapDispatchToProps = {
    commentsThunkCreator,
    setCurrentPageIntoStateActionCreator,
}

export default connect<MapStateToPropsTSType, MapDispatchToPropsTSType, OwnPropsTSType, RootStateTSType>(mapStateToProps, mapDispatchToProps)(TableContainer);;