export interface Address {
  strasse: string;
  hausnummer: string;
  postleitzahl: number | null;
  stadt: string;
}

export enum ActionTypes {
  SET_ADDRESS,
}

export interface SetAddressAction {
  type: ActionTypes.SET_ADDRESS
  payload: {
    address: Address
    valid: boolean
  }
}

export const setAddress = (address: Address): SetAddressAction => {
  return {
    type: ActionTypes.SET_ADDRESS,
    payload: {
      address: address,
      valid: true
    }
  }
}
