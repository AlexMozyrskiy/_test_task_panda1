import React, { useEffect, useState } from "react";
import Table from "./Table";
import {
    MapStateToPropsTSType, PropsTSType,
    MapDispatchToPropsTSType, OwnPropsTSType,
} from "./TableContainerTypeScriptTypes";
import { RootStateTSType } from "../../BLL/redux/redux";
import { commentsThunkCreator } from "../../BLL/CommentsTable/thunkCreators";
import { connect } from "react-redux";
import { getCommentsSelector, getCurrentPageSelector, getItemsPerPageSelector } from "../../BLL/CommentsTable/selectors";
import { getIsAppLoadedSelector } from "../../BLL/AppLoaded/selectors";
import AppPreloader from "../Preloader/Preloader";
import getCurrentPageComments from "../../helpers/getCurrentPageComments";
import getPaginationSquaresArrayNumbers from "../../helpers/getPaginationSquaresArrayNumbers";


const TableContainer: React.FC<PropsTSType> = (props) => {
    useEffect(() => {
        props.commentsThunkCreator();
    }, [props.currentPage]);

    let [firstPaginationSquareNumber, setFirstPaginationSquareNumber] = useState(1);
    let [lastPaginationSquareNumber, setLastPaginationSquareNumber] = useState(3);

    const currentPageComments = getCurrentPageComments(props.comments, props.currentPage, props.itemsPerPage)   // фильтруем все комменты и получаем комменты согласно текущей страницы

    const paginationSquareNumbers = getPaginationSquaresArrayNumbers(props.comments.length, props.itemsPerPage, 3, props.currentPage, firstPaginationSquareNumber, lastPaginationSquareNumber);

    if (props.isAppLoaded) {                             // если ответ от сервера еще не получен покажем прелоадер
        return <Table
            comments={currentPageComments}
            paginationSquareNumbers={paginationSquareNumbers}
            currentPage={props.currentPage}
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
    commentsThunkCreator
}

export default connect<MapStateToPropsTSType, MapDispatchToPropsTSType, OwnPropsTSType, RootStateTSType>(mapStateToProps, mapDispatchToProps)(TableContainer);;