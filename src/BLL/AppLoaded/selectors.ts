import {
    GetIsAppLoadedSelectorTSType
} from "./typeScriprtTypes";


export const getIsAppLoadedSelector: GetIsAppLoadedSelectorTSType =  (state) => {
    return state.isAppLoaded.isAppLoaded;
}