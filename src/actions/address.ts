
export interface Address {
  strasse: string;
  hausnummer: string;
  postleitzahl: string;
  stadt: string;
  addressId: string;
}


export enum ActionTypes {
  SET_ADDRESS,
}

export interface SetAddressAction {
  type: ActionTypes.SET_ADDRESS
  payload: Address;
}

export const setAddress = (address: Address): SetAddressAction => {
  return { 
    type: ActionTypes.SET_ADDRESS,
    payload: address
   }
}

