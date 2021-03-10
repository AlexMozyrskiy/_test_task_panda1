import {
    SET_COMMENTS_INTO_STATE, SET_CURRENT_PAGE_INTO_STATE
} from "./actionTypes";

import { RootStateTSType } from "../redux/redux";
import {
    CommentTSType, currentPageTSType
} from "../commonTSTypes";


// ---------------------- action creators types -------------------------------------------------------
export type SetCommentsIntoStateActionCreatorTSType = {
    type: typeof SET_COMMENTS_INTO_STATE
    comments: Array<CommentTSType>
};

export type SetCurrentPageIntoStateActionCreatorTSType = {
    type: typeof SET_CURRENT_PAGE_INTO_STATE
    currentPage: currentPageTSType
};
// ---------------------- / action creators types -----------------------------------------------------


// -------------------------------------- reducer type -------------------------------------
export type InitialStateTSType = {
    comments: Array<CommentTSType>
    currentPage: currentPageTSType
    itemsPerPage: number
};

export type PropActionRedecerTSType = SetCommentsIntoStateActionCreatorTSType | SetCurrentPageIntoStateActionCreatorTSType  // тут, при увеличении количесвта экшион креаторов знаком | будем их добавлять чтобы типищировать дальше в редюсере входящий action
// -------------------------------------- / reducer type -----------------------------------


// ------------------------------------ Selectors Types -------------------------------------
export type GetCommentsSelectorTSType = (state: RootStateTSType) => Array<CommentTSType>
export type GetCurrentPageSelectorTSType = (state: RootStateTSType) => currentPageTSType
// ------------------------------------ / Selectors Types -----------------------------------


// ---------------------------------- ThunkCreators -----------------------------------------
// export type GetStateTSType = () => RootStateTSType
// ---------------------------------- / ThunkCreators ---------------------------------------