import { CommentTSType, CurrentPageTSType, ItemsPerPageTSType } from "../BLL/commonTSTypes";

// --------------------- Функция считает и фильтрует комменты для отображения на странице ----------------------
export type GetCurrentPageCommentsTSType = (comments: Array<CommentTSType>, currentPage: CurrentPageTSType, itemsPerPage: ItemsPerPageTSType) => Array<CommentTSType>
// --------------------- / Функция считает и фильтрует комменты для отображения на странице --------------------

const getCurrentPageComments: GetCurrentPageCommentsTSType = (comments, currentPage, itemsPerPage) => {
    let firstCommentIndex: number = currentPage === 1 ? 0 : (currentPage - 1) * 50;                                     // если текущая страница 1 то индекс первого элемента === 0, в противном случае вычислим его по формуле.
    let lastCommentNumber: number = currentPage * itemsPerPage - 1;                                                     //  -1 така как вычисляем индекс массива
    let currentPageComments: Array<CommentTSType> = comments.filter( (item, index) => index >= firstCommentIndex && index <= lastCommentNumber);
    return currentPageComments;
}


export default getCurrentPageComments;