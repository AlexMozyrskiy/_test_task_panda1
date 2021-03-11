import React, { useEffect, useState } from "react";
import Table from "./Table";
import {
    MapStateToPropsTSType, PropsTSType,
    MapDispatchToPropsTSType, OwnPropsTSType,
    OnPaginationSquareClickTSType, sortByEnum,
    OnTableHeaderFieldСlickTSType, SortingArrowViewTSType
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
import { setCurrentPageIntoStateActionCreator } from "../../BLL/CommentsTable/actionCreators";


const TableContainer: React.FC<PropsTSType> = (props) => {
    useEffect(() => {
        props.commentsThunkCreator();
    }, [props.currentPage]);

    let [firstPaginationSquareNumber, setFirstPaginationSquareNumber] = useState(1);                            // цифра в первом квадратике пагинации
    let [lastPaginationSquareNumber, setLastPaginationSquareNumber] = useState(5);                              // цифра в последнем квадратике пагинации
    let [commentsSorted, setCommentsSorted] = useState(sortByEnum.notSorted);                                   // если 0 - не отсортирован, 1 - сортирован по возрастанию, 2 - по убыванию
    let [sortByField, setSortByField] = useState<string>("");                                                     // название поля по которому бужем сортировать



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
    setCurrentPageIntoStateActionCreator
}

export default connect<MapStateToPropsTSType, MapDispatchToPropsTSType, OwnPropsTSType, RootStateTSType>(mapStateToProps, mapDispatchToProps)(TableContainer);;