import { CommentTSType } from "../../BLL/commonTSTypes"

export type MapStateToPropsTSType = {      // пропсы с данными из контекста

}

export type MapDispatchToPropsTSType = {   // пропсы с функциями из контекста

}

export type OwnPropsTSType = {             // все остальные пропсы в том числе переданные серез родительский компонент и написанные в этом компоненте
    comments: Array<CommentTSType>
}

export type PropsTSType = MapStateToPropsTSType & MapDispatchToPropsTSType & OwnPropsTSType