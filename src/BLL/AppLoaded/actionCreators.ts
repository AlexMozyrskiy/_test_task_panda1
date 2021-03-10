import {
    IS_APP_LOADDED
} from "./actionTypes";
import {
    SetIsAppLoadedActionCreatorTSType
} from "./typeScriprtTypes";
import { isAppLoadedTSType } from "../commonTSTypes";

export const setIsAppLoadedIntoStateActionCreator = (isAppLoaded: isAppLoadedTSType): SetIsAppLoadedActionCreatorTSType => {
    return {
        type: IS_APP_LOADDED,
        isAppLoaded
    }
};