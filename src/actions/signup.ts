import { Dispatch } from "redux"
import backend from "../api/backend"
import { Address } from "../domain/Address"
import { Vertragsdaten } from "../domain/Vertragsdaten"
import { SetLoginStateAction } from "./auth"
import { ActionTypes } from "./types"

export interface DomainUserData {
  vertragsdaten: Vertragsdaten;
  address: Address;
  monatlAbschlag: number;
  stromverbrauch: number;
}

export interface ClearRegisterStateAction {
  type: ActionTypes.CLEAR_REGISTER_STATE;
}

interface TokenResponse {
  accessToken: string;
  refreshToken: string;
}

export const registerUser = (userData: DomainUserData) => {
  return async (dispatch: Dispatch) => {

    const reqData: RequestBody = mapUserData(userData);
    const { data } = await backend.post<TokenResponse>('/register/signup', reqData);
    
    // save tokens to local storage
    localStorage.setItem('accessToken', data.accessToken);
    localStorage.setItem('refreshToken', data.refreshToken);
    
    dispatch<ClearRegisterStateAction>({
      type: ActionTypes.CLEAR_REGISTER_STATE
    });

    dispatch<SetLoginStateAction>({
      type: ActionTypes.SET_IS_LOGGED_IN,
      payload: true
    })
  }
}

function mapUserData(userData: DomainUserData): RequestBody {

  const proxy = new Proxy(userData, {
    get: (o, property) => {
      if (property == 'iban') {
        // trim whitespace
        return o.vertragsdaten.iban.replace(/\s/g, '');
      }
      // @ts-ignore
      return o.vertragsdaten[property] || o.address[property] || o[property]
    }
  });

   return mapObjects(proxy, new RequestBody());

  
}


function mapObjects(from: any, to: any): any {
  for (let key in to) {        
    if ( typeof to[key] === 'object') {
      mapObjects(from ,to[key])
    } else {
      to[key] = from[key]
    }
  }

  return to;
}

class RequestBody {
  addressId?: string = undefined;
  anrede?: string = undefined;
  titel?: string = undefined;
  vorname?: string = undefined;
  nachname?: string = undefined;
  geburtsdatum?: string = undefined;
  telefonnummer?: string = undefined;
  email?: string = undefined;
  password?: string = undefined;
  iban?: string = undefined;
  kontoinhaber?: string = undefined;
  rabattCode?: string = undefined;
  empfehlung?: string = undefined;
  zaehlerdaten = new class ZaehlerDaten {
    type?: 'NEUEINZUG' | 'ANBIETERWECHSEL' = undefined;
    zaehlernummer?: string= undefined;
    bisherigerAnbieter?: string = undefined;
    bereitsGekuendigt?: boolean = undefined;
    vertragslaufzeitBis?: Date = undefined;
    einzugsDatum?: Date = undefined;
  }
}
