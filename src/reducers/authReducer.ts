import { ActionTypes } from "../actions";
import { SetLoginStateAction } from "../actions/auth"

type AuthActions = SetLoginStateAction;

export interface AuthReducerState {
    isLoggedIn: boolean;
}

const initialState: AuthReducerState = {
    isLoggedIn: false
}

export const authReducer = (state: AuthReducerState = initialState, action: AuthActions): AuthReducerState => {
    switch(action.type) {
        case ActionTypes.SET_IS_LOGGED_IN:
            return {
                ...state,
                isLoggedIn: action.payload
            }
        default:
            return state;
    }
}