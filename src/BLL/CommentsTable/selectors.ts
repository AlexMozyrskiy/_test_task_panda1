import {
    GetCommentsSelectorTSType,
    GetCurrentPageSelectorTSType,
    GetItemsPerPageSelectorTSType
} from "./typeScriprtTypes";


export const getCommentsSelector: GetCommentsSelectorTSType =  (state) => {
    return state.commentsTable.comments;
}

export const getCurrentPageSelector: GetCurrentPageSelectorTSType =  (state) => {
    return state.commentsTable.currentPage;
}

export const getItemsPerPageSelector: GetItemsPerPageSelectorTSType =  (state) => {
    return state.commentsTable.itemsPerPage;
}