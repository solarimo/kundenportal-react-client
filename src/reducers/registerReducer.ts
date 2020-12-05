import { ActionTypes, Calculation, ClearRegisterStateAction, SetAddressAction, SetCalculationAction } from "../actions";
import { Address } from "../domain/Address";

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
  
  type RegisterAction = SetAddressAction | SetCalculationAction | ClearRegisterStateAction;
  
  export const userRegistrationReducer = (state: UserRegistrationState = initialState, action: RegisterAction ): UserRegistrationState => {
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
      case ActionTypes.CLEAR_REGISTER_STATE:
        return initialState;
  
      default:
        return state;
    }
  }
  