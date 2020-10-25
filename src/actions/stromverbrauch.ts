import { ActionTypes } from "./types";

export interface Calculation {
  stromverbrauch: number;
  monatlAbschlag: number;
  grundpreis: number;
  arbeitspreis: number;
  ersparnisPerYear: number;
  ersparnisC02Kg: number;
}

export interface SetCalculationAction {
  type: ActionTypes.SET_CALCULATION;
  payload: Calculation;
}

export const setCalculation = (calc: Calculation): SetCalculationAction => {
  return {
    type: ActionTypes.SET_CALCULATION,
    payload: calc
  }
}
