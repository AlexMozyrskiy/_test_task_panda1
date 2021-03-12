// import { ThunkAction } from 'redux-thunk';
// import { PropActionRedecerTSType } from '../../BLL/CommentsTable/typeScriprtTypes';
// import { RootStateTSType } from '../../BLL/redux/redux';
import { CommentTSType } from "../../BLL/commonTSTypes";
import { IsAppLoadedTSType, CurrentPageTSType, ItemsPerPageTSType } from "../../BLL/commonTSTypes"
import { uniqueItemsInArrTSType } from "../../helpers/uniqueItemsInArr";

export type MapStateToPropsTSType = {      // пропсы с данными из контекста
    comments: Array<CommentTSType>
    isAppLoaded: IsAppLoadedTSType
    currentPage: CurrentPageTSType
    itemsPerPage: ItemsPerPageTSType
}

// ----------------------------------------------- Props Types --------------------------------------
export type MapDispatchToPropsTSType = {   // пропсы с функциями из контекста
    commentsThunkCreator: () => void
    setCurrentPageIntoStateActionCreator: (currentPage: CurrentPageTSType) => void
}

export type OwnPropsTSType = {             // все остальные пропсы в том числе переданные серез родительский компонент и написанные в этом компоненте

}

export type PropsTSType = MapStateToPropsTSType & MapDispatchToPropsTSType & OwnPropsTSType
// ----------------------------------------------- / Props Types ------------------------------------

// ----------------------------- Функция при клике по пагинационному квадратику -----------------------------
export type OnPaginationSquareClickTSType = (pageNumber: CurrentPageTSType) => void
// ----------------------------- / Функция при клике по пагинационному квадратику ---------------------------

// -------------------------- Функция при клике на заголовок поля таблицы, произведем сортировку ---------------------------
export type OnTableHeaderFieldСlickTSType = (fieldName: string) => void
// -------------------------- / Функция при клике на заголовок поля таблицы, произведем сортировку -------------------------

// ---------------- Функция определяет по состоянию сортировки какую стрелку возвращать вниз или вверх ---------------------
export type SortingArrowViewTSType = (sortAscending: sortByEnum) => JSX.Element | null | undefined
// ---------------- / Функция определяет по состоянию сортировки какую стрелку возвращать вниз или вверх -------------------

// ----------------------------- Функция при изменении в поле ввода поиска -----------------------------
export type onSearchFieldChangeTSType = (value: number | string) => void
// ----------------------------- / Функция при изменении в поле ввода поиска ---------------------------


// ---------------------------- Enum для сортировки массива -------------------------------------------------
export enum sortByEnum {
    notSorted = 0,              // не отсортирован
    ascending = 1,              // по возрастанию
    descending = 2              // по убыванию
}
// ---------------------------- / Enum для сортировки массива -----------------------------------------------