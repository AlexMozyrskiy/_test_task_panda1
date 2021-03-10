import {
    SET_COMMENTS_INTO_STATE
} from "./actionTypes";
import {
    SetCommentsIntoStateActionCreatorTSType
} from "./typeScriprtTypes";
import { CommentTSType } from "../commonTSTypes";

export const setCommentsIntoStateActionCreator = (comments: Array<CommentTSType>): SetCommentsIntoStateActionCreatorTSType => {
    return {
        type: SET_COMMENTS_INTO_STATE,
        comments: comments
    }
};