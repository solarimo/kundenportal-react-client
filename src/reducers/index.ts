import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { UserRegistrationState, userRegistrationReducer } from './registerReducer';
import { authReducer, AuthReducerState } from './authReducer';

export interface StoreState {
  auth: AuthReducerState;
  register: {
    userRegistration: UserRegistrationState
  };
  form: any;
}


export const reducers = combineReducers<StoreState>({
  auth: authReducer,
  register: combineReducers({
    userRegistration: userRegistrationReducer
  }),
  form: formReducer
})