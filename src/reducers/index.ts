import { Address } from '../actions/index';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { ActionTypes, SetAddressAction } from '../actions';


export interface StoreState {
  userRegistration: UserRegistrationState
  form: any
}

export interface UserRegistrationState {
  address: Address;
}

const initialState: UserRegistrationState = {
  address: {
    strasse: '',
    hausnummer: '',
    postleitzahl: '',
    stadt: '',
    addressId: ''
  }
}

const userRegistrationReducer = (state: UserRegistrationState = initialState, action: SetAddressAction): UserRegistrationState => {
  switch (action.type) {
    case ActionTypes.SET_ADDRESS:
      return {
        ...state,
        address: action.payload
      };
  
    default:
      return state;
  }
}



export const reducers = combineReducers<StoreState>({
  form: formReducer,
  userRegistration: userRegistrationReducer
});