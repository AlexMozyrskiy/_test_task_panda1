import {
    IS_APP_LOADDED
} from "./actionTypes";
import {
    InitialStateTSType, PropActionRedecerTSType
} from "./typeScriprtTypes";

const initialState: InitialStateTSType = {
    isAppLoaded: false
};

const isAppLoadedReducer = (state: InitialStateTSType = initialState, action: PropActionRedecerTSType): InitialStateTSType => {
    switch (action.type) {
        case IS_APP_LOADDED: {
            const superState: InitialStateTSType = {
                ...state,
                isAppLoaded: action.isAppLoaded
            };
            return superState;
        }

        default: return state;
    }
};

export default isAppLoadedReducer;