import React, { useEffect, useState } from "react";
import Table from "./Table";
import {
    MapStateToPropsTSType, PropsTSType,
    MapDispatchToPropsTSType, OwnPropsTSType,
    OnPaginationSquareClickTSType, sortByEnum,
    OnTableHeaderFieldСlickTSType, SortingArrowViewTSType,
    onSearchFieldChangeTSType
} from "./TableContainerTypeScriptTypes";
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
import { setCurrentPageIntoStateActionCreator } from "../../BLL/CommentsTable/actionCreators";


const TableContainer: React.FC<PropsTSType> = (props) => {
    useEffect(() => {
        props.commentsThunkCreator();
    }, [props.currentPage]);

    let [firstPaginationSquareNumber, setFirstPaginationSquareNumber] = useState(1);                            // цифра в первом квадратике пагинации
    let [lastPaginationSquareNumber, setLastPaginationSquareNumber] = useState(5);                              // цифра в последнем квадратике пагинации
    let [commentsSorted, setCommentsSorted] = useState(sortByEnum.notSorted);                                   // если 0 - не отсортирован, 1 - сортирован по возрастанию, 2 - по убыванию
    let [sortByField, setSortByField] = useState<string>("");                                                   // название поля по которому бужем сортировать
    let [searchFieldValue, SetsearchFieldValue] = useState<number | string>("");                                  // значение вводимое в поле поиска для фильтрации
    let [arraySearchedIndexes, setArraySearchedIndexes] = useState<Array<number>>([]);                                  // значение вводимое в поле поиска для фильтрации




    const totalCountPaginationSquares: number = Math.ceil(props.comments.length / props.itemsPerPage);          // общее количество возможных отображаемых квадратиков

    let currentPageComments = getCurrentPageComments(props.comments, props.currentPage, props.itemsPerPage)     // фильтруем все комменты и получаем комменты согласно текущей страницы и количеству комментов на странице

    // ---------------------------- Проверим нужно ли сортировать комментарии -------------------------------------------------
    currentPageComments = 
                            commentsSorted === sortByEnum.notSorted             // если сортировка не требуется
                                                ? currentPageComments           // будет равна сама себе, то есть не отсортированному массиву элементов
                                                : commentsSorted === sortByEnum.ascending   // в противном случае
                                                    ? sortArrayOfObjectByFieldName(currentPageComments, sortByField, true)  // если требуется сортировка по возрастанию
                                                    : sortArrayOfObjectByFieldName(currentPageComments, sortByField, false) // если требуется сортировка по убыванию
    // ---------------------------- / Проверим нужно ли сортировать комментарии -----------------------------------------------


    // ------------------------------ Проверим ищет ли пользователь что-ир и если ищет изменим массив для мапа в FC ----------------
    if(arraySearchedIndexes.length != 0) {
        currentPageComments = currentPageComments.filter((item, index) => {
            return arraySearchedIndexes.includes(index);
        });
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
        if(commentsSorted === sortByEnum.notSorted) {           // если до клика таблица не была отсортирована
            setCommentsSorted(sortByEnum.ascending);            // отсортируем по возрастанию
        } else if(commentsSorted === sortByEnum.ascending) {    // если до клика таблица была отсортирована по возрастанию
            setCommentsSorted(sortByEnum.descending);           // отсортируем по убыванию
        } else if(commentsSorted === sortByEnum.descending) {   // если до клика таблица была отсортирована по убыванию
            setCommentsSorted(sortByEnum.ascending);            // отсортируем по возрастанию
        }

        setSortByField(fieldName);                              // сортируем по переданному в параметре названию поля
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
        SetsearchFieldValue(value);                                     // запишем новое значение из поля ввода поиска для его отображения в поле ввода (флакс)

        let arraySearchedIndexesInF: Array<number> = [];                // в этот массив будем пушить индексы массива в сврйствах которых нашли совпадающие с напечатанным в поле воода
        currentPageComments.forEach( (item, i) => {
            let splitedName = item.name?.split(" ");                    // сплитаем строки с раздеителем пробел для поиска по словам
            let splitedEmail = item.email?.split(" ");
            let splitedBody = item.body?.split(" ");

            splitedName?.forEach( el => {                               // для каждого сплитнутого элемента если === сравниваемое значение пушим индекс в массиве в массив индексов совпавших элементов
                if(value === el) arraySearchedIndexesInF.push(i);
            } );
            splitedEmail?.forEach( el => {
                if(value === el) arraySearchedIndexesInF.push(i);
            } );
            splitedBody?.forEach( el => {
                if(value === el) arraySearchedIndexesInF.push(i);
            } );
            if(item.id === +value) arraySearchedIndexesInF.push(i);      // номер не сплитнешь сравниваем целмком
            if(item.postId === +value) arraySearchedIndexesInF.push(i);  // номер не сплитнешь сравниваем целмком
        } );

        arraySearchedIndexesInF = uniqueItemsInArr(arraySearchedIndexesInF);   // уникальные значения в массиве, чтобы нее было повторений. Для правильного мапа, чтобы строчки не повторялись, т.к. может найти слово 2 раза в олной и той же строчке

        setArraySearchedIndexes(arraySearchedIndexesInF);
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