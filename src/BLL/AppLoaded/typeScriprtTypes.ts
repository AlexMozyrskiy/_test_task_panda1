import {
    IS_APP_LOADDED
} from "./actionTypes";

import { RootStateTSType } from "../redux/redux";
import {
    IsAppLoadedTSType
} from "../commonTSTypes";


// ---------------------- action creators types -------------------------------------------------------
export type SetIsAppLoadedActionCreatorTSType = {
    type: typeof IS_APP_LOADDED
    isAppLoaded: IsAppLoadedTSType
};
// ---------------------- / action creators types -----------------------------------------------------


// -------------------------------------- reducer type -------------------------------------
export type InitialStateTSType = {
    isAppLoaded: IsAppLoadedTSType
};

export type PropActionRedecerTSType = SetIsAppLoadedActionCreatorTSType  // тут, при увеличении количесвта экшион креаторов знаком | будем их добавлять чтобы типищировать дальше в редюсере входящий action
// -------------------------------------- / reducer type -----------------------------------


// ------------------------------------ Selectors Types -------------------------------------
export type GetIsAppLoadedSelectorTSType = (state: RootStateTSType) => IsAppLoadedTSType
// ------------------------------------ / Selectors Types -----------------------------------


// ---------------------------------- ThunkCreators -----------------------------------------
// export type GetStateTSType = () => RootStateTSType
// ---------------------------------- / ThunkCreators ---------------------------------------