import {
    GetCommentsSelectorTSType,
    GetCurrentPageSelectorTSType
} from "./typeScriprtTypes";


export const getCommentsSelector: GetCommentsSelectorTSType =  (state) => {
    return state.commentsTable.comments;
}

export const getCurrentPageSelector: GetCurrentPageSelectorTSType =  (state) => {
    return state.commentsTable.currentPage;
}