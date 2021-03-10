import {
    SET_COMMENTS_INTO_STATE, SET_CURRENT_PAGE_INTO_STATE
} from "./actionTypes";
import {
    SetCommentsIntoStateActionCreatorTSType,
    SetCurrentPageIntoStateActionCreatorTSType
} from "./typeScriprtTypes";
import { CommentTSType, CurrentPageTSType } from "../commonTSTypes";

export const setCommentsIntoStateActionCreator = (comments: Array<CommentTSType>): SetCommentsIntoStateActionCreatorTSType => {
    return {
        type: SET_COMMENTS_INTO_STATE,
        comments: comments
    }
};

export const setCurrentPageIntoStateActionCreator = (currentPage: CurrentPageTSType): SetCurrentPageIntoStateActionCreatorTSType => {
    return {
        type: SET_CURRENT_PAGE_INTO_STATE,
        currentPage: currentPage
    }
};