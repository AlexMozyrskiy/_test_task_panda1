import {
    SET_COMMENTS_INTO_STATE, SET_CURRENT_PAGE_INTO_STATE
} from "./actionTypes";
import {
    InitialStateTSType, PropActionRedecerTSType
} from "./typeScriprtTypes";

const initialState: InitialStateTSType = {
    comments: [
        {
            body: null,
            email: null,
            id: null,
            name: null,
            postId: null
        }
    ],
    
    currentPage: 1,
    itemsPerPage: 50
};

const commentsTableReducer = (state: InitialStateTSType = initialState, action: PropActionRedecerTSType): InitialStateTSType => {
    switch (action.type) {
        case SET_COMMENTS_INTO_STATE: {
            const superState: InitialStateTSType = {
                ...state,
                comments: action.comments
            };
            return superState;
        }

        case SET_CURRENT_PAGE_INTO_STATE: {
            const superState: InitialStateTSType = {
                ...state,
                currentPage: action.currentPage
            };
            return superState;
        }

        default: return state;
    }
};

export default commentsTableReducer;