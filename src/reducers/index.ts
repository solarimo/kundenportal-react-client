import { Address } from '../actions/index';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { ActionTypes, SetAddressAction } from '../actions';


export interface StoreState {
  address: AddressReducerState
  form: any
}

interface AddressReducerState {
  address: Address;
  valid: boolean
}

let initialState: AddressReducerState = {
  address: {
    strasse: '',
    hausnummer: '',
    postleitzahl: null,
    stadt: ''
  },
  valid: false
}

const addressReducer = (state: AddressReducerState = initialState, action: SetAddressAction) => {
  switch (action.type) {
    case ActionTypes.SET_ADDRESS:
      return action.payload;
  
    default:
      return state;
  }
}



export const reducers = combineReducers<StoreState>({
  form: formReducer,
  address: addressReducer
});