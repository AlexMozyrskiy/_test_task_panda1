import { API } from "../../DAL/api";
import {
    setCommentsIntoStateActionCreator
} from "./actionCreators";
import { PropActionRedecerTSType } from "./typeScriprtTypes";
import { ThunkAction } from 'redux-thunk';
import { RootStateTSType } from '../redux/redux';
import { setIsAppLoadedIntoStateActionCreator } from '../AppLoaded/actionCreators';


export const commentsThunkCreator = (): ThunkAction<Promise<void>, RootStateTSType, unknown, PropActionRedecerTSType> => async (dispatch, getState) => {
    const comments = await API.comments();
    dispatch(setCommentsIntoStateActionCreator(comments));
    dispatch(setIsAppLoadedIntoStateActionCreator(true));
}