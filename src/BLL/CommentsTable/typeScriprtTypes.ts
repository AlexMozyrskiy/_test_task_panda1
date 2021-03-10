import {
    SET_COMMENTS_INTO_STATE
} from "./actionTypes";

import { RootStateTSType } from "../redux/redux";
import {
    CommentTSType
} from "../commonTSTypes";


// ---------------------- action creators types -------------------------------------------------------
export type SetCommentsIntoStateActionCreatorTSType = {
    type: typeof SET_COMMENTS_INTO_STATE
    comments: Array<CommentTSType>
};
// ---------------------- / action creators types -----------------------------------------------------


// -------------------------------------- reducer type -------------------------------------
export type InitialStateTSType = {
    comments: Array<CommentTSType>
};

export type PropActionRedecerTSType = SetCommentsIntoStateActionCreatorTSType  // тут, при увеличении количесвта экшион креаторов знаком | будем их добавлять чтобы типищировать дальше в редюсере входящий action
// -------------------------------------- / reducer type -----------------------------------


// ------------------------------------ Selectors Types -------------------------------------
export type GetCommentsSelectorTSType = (state: RootStateTSType) => Array<CommentTSType>
// ------------------------------------ / Selectors Types -----------------------------------


// ---------------------------------- ThunkCreators -----------------------------------------
// export type GetStateTSType = () => RootStateTSType
// ---------------------------------- / ThunkCreators ---------------------------------------