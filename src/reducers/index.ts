import {  Calculation, SetCalculationAction } from '../actions/index';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { ActionTypes, SetAddressAction } from '../actions';
import { Address } from '../domain/Address';


export interface StoreState {
  userRegistration: UserRegistrationState
  form: any
}

export interface UserRegistrationState {
  address: Address;
  calculation: Calculation;
}

const initialState: UserRegistrationState = {
  address: {
    strasse: '',
    hausnummer: '',
    postleitzahl: '',
    stadt: '',
    addressId: ''
  },
  calculation: {
    stromverbrauch: 0,
    monatlAbschlag: 0,
    ersparnisC02Kg: 0,
    ersparnisPerYear: 0,
    grundpreis: 0,
    arbeitspreis: 0
  }
}

const userRegistrationReducer = (state: UserRegistrationState = initialState, action: SetAddressAction | SetCalculationAction): UserRegistrationState => {
  switch (action.type) {
    case ActionTypes.SET_ADDRESS:
      return {
        ...state,
        address: action.payload
      };
    case ActionTypes.SET_CALCULATION:
      return {
        ...state,
        calculation: action.payload
      }
    default:
      return state;
  }
}



export const reducers = combineReducers<StoreState>({
  form: formReducer,
  userRegistration: userRegistrationReducer
});