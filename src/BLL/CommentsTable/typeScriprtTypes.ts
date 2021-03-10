import {
    SET_COMMENTS_INTO_STATE, SET_CURRENT_PAGE_INTO_STATE
} from "./actionTypes";

import { RootStateTSType } from "../redux/redux";
import {
    CommentTSType, CurrentPageTSType, ItemsPerPageTSType
} from "../commonTSTypes";
import { SetIsAppLoadedActionCreatorTSType } from "../AppLoaded/typeScriprtTypes"


// ---------------------- action creators types -------------------------------------------------------
export type SetCommentsIntoStateActionCreatorTSType = {
    type: typeof SET_COMMENTS_INTO_STATE
    comments: Array<CommentTSType>
};

export type SetCurrentPageIntoStateActionCreatorTSType = {
    type: typeof SET_CURRENT_PAGE_INTO_STATE
    currentPage: CurrentPageTSType
};
// ---------------------- / action creators types -----------------------------------------------------


// -------------------------------------- reducer type -------------------------------------
export type InitialStateTSType = {
    comments: Array<CommentTSType>
    currentPage: CurrentPageTSType
    itemsPerPage: ItemsPerPageTSType
};

export type PropActionRedecerTSType = SetCommentsIntoStateActionCreatorTSType | SetCurrentPageIntoStateActionCreatorTSType | SetIsAppLoadedActionCreatorTSType  // тут, при увеличении количесвта экшион креаторов знаком | будем их добавлять чтобы типищировать дальше в редюсере входящий action
// -------------------------------------- / reducer type -----------------------------------


// ------------------------------------ Selectors Types -------------------------------------
export type GetCommentsSelectorTSType = (state: RootStateTSType) => Array<CommentTSType>
export type GetCurrentPageSelectorTSType = (state: RootStateTSType) => CurrentPageTSType
export type GetItemsPerPageSelectorTSType = (state: RootStateTSType) => ItemsPerPageTSType
// ------------------------------------ / Selectors Types -----------------------------------


// ---------------------------------- ThunkCreators -----------------------------------------
// export type GetStateTSType = () => RootStateTSType
// ---------------------------------- / ThunkCreators ---------------------------------------