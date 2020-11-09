import { Address } from "../domain/Address"
import { ActionTypes } from "./types"



export interface SetAddressAction {
  type: ActionTypes.SET_ADDRESS;
  payload: Address;
}

export const setAddress = (address: Address): SetAddressAction => {
  return { 
    type: ActionTypes.SET_ADDRESS,
    payload: address
   }
}

