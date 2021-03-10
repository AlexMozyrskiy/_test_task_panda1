import {
    IS_APP_LOADDED
} from "./actionTypes";
import {
    SetIsAppLoadedActionCreatorTSType
} from "./typeScriprtTypes";
import { IsAppLoadedTSType } from "../commonTSTypes";

export const setIsAppLoadedIntoStateActionCreator = (isAppLoaded: IsAppLoadedTSType): SetIsAppLoadedActionCreatorTSType => {
    return {
        type: IS_APP_LOADDED,
        isAppLoaded
    }
};