import {
    GetCommentsSelectorTSType
} from "./typeScriprtTypes";


export const getCommentsSelector: GetCommentsSelectorTSType =  (state) => {
    return state.commentsTable.comments;
}