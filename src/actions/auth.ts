
import { ActionTypes } from "./types"

export interface SetLoginStateAction {
    type: ActionTypes.SET_IS_LOGGED_IN;
    payload: boolean;
}