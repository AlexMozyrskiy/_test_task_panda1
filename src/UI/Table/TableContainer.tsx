import React, { useEffect, useState } from "react";
import Table from "./Table";
import {
    MapStateToPropsTSType, PropsTSType,
    MapDispatchToPropsTSType, OwnPropsTSType, OnPaginationSquareClickTSType
} from "./TableContainerTypeScriptTypes";
import { RootStateTSType } from "../../BLL/redux/redux";
import { commentsThunkCreator } from "../../BLL/CommentsTable/thunkCreators";
import { connect } from "react-redux";
import { getCommentsSelector, getCurrentPageSelector, getItemsPerPageSelector } from "../../BLL/CommentsTable/selectors";
import { getIsAppLoadedSelector } from "../../BLL/AppLoaded/selectors";
import AppPreloader from "../Preloader/Preloader";
import getCurrentPageComments from "../../helpers/getCurrentPageComments";
import getPaginationSquaresArrayNumbers from "../../helpers/getPaginationSquaresArrayNumbers";
import { setCurrentPageIntoStateActionCreator } from "../../BLL/CommentsTable/actionCreators";


const TableContainer: React.FC<PropsTSType> = (props) => {
    useEffect(() => {
        props.commentsThunkCreator();
    }, [props.currentPage]);

    let [firstPaginationSquareNumber, setFirstPaginationSquareNumber] = useState(1);
    let [lastPaginationSquareNumber, setLastPaginationSquareNumber] = useState(5);

    const totalCountPaginationSquares: number = Math.ceil(props.comments.length / props.itemsPerPage);          // общее количество возможных отображаемых квадратиков

    const currentPageComments = getCurrentPageComments(props.comments, props.currentPage, props.itemsPerPage)   // фильтруем все комменты и получаем комменты согласно текущей страницы

    const paginationSquareNumbers = getPaginationSquaresArrayNumbers(                                           // Получим массив из цифр для его мапа в квадратиках пагинации
        props.comments.length,
        props.itemsPerPage,
        5,
        props.currentPage,
        firstPaginationSquareNumber,
        lastPaginationSquareNumber);


    const onPaginationSquareClick: OnPaginationSquareClickTSType = (clickedPage) => {                           // функция при клике на пагинациооный квадратик
        props.setCurrentPageIntoStateActionCreator(clickedPage);
        setFirstPaginationSquareNumber(paginationSquareNumbers[0]);
        setLastPaginationSquareNumber(paginationSquareNumbers[(paginationSquareNumbers.length - 1)]);
    }

    if (props.isAppLoaded) {                             // если ответ от сервера еще не получен покажем прелоадер
        return <Table
            comments={props.comments}
            currentPageComments={currentPageComments}
            paginationSquareNumbers={paginationSquareNumbers}
            currentPage={props.currentPage}
            totalCountPaginationSquares={totalCountPaginationSquares}
            onPaginationSquareClick={onPaginationSquareClick}
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