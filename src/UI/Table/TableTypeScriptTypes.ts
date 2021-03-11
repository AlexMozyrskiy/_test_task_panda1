import { CommentTSType, CurrentPageTSType } from "../../BLL/commonTSTypes";
import { OnPaginationSquareClickTSType } from "./TableContainerTypeScriptTypes"

export type MapStateToPropsTSType = {      // пропсы с данными из контекста

}

export type MapDispatchToPropsTSType = {   // пропсы с функциями из контекста

}

export type OwnPropsTSType = {             // все остальные пропсы в том числе переданные серез родительский компонент и написанные в этом компоненте
    comments: Array<CommentTSType>
    currentPageComments: Array<CommentTSType>
    paginationSquareNumbers: Array<number>
    currentPage: CurrentPageTSType
    totalCountPaginationSquares: number
    onPaginationSquareClick: OnPaginationSquareClickTSType
}

export type PropsTSType = MapStateToPropsTSType & MapDispatchToPropsTSType & OwnPropsTSType