// import { ThunkAction } from 'redux-thunk';
// import { PropActionRedecerTSType } from '../../BLL/CommentsTable/typeScriprtTypes';
// import { RootStateTSType } from '../../BLL/redux/redux';
import { CommentTSType } from "../../BLL/commonTSTypes";
import { IsAppLoadedTSType, CurrentPageTSType, ItemsPerPageTSType } from "../../BLL/commonTSTypes"

export type MapStateToPropsTSType = {      // пропсы с данными из контекста
    comments: Array<CommentTSType>
    isAppLoaded: IsAppLoadedTSType
    currentPage: CurrentPageTSType
    itemsPerPage: ItemsPerPageTSType
}

// ----------------------------------------------- Props Types --------------------------------------
export type MapDispatchToPropsTSType = {   // пропсы с функциями из контекста
    commentsThunkCreator: () => void
}

export type OwnPropsTSType = {             // все остальные пропсы в том числе переданные серез родительский компонент и написанные в этом компоненте
    
}

export type PropsTSType = MapStateToPropsTSType & MapDispatchToPropsTSType & OwnPropsTSType
// ----------------------------------------------- / Props Types ------------------------------------