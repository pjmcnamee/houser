import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";

const initialState = {
  name: "",
  address: "",
  city: "",
  state: "",
  zipcode: "",
  imgUrl: "",
  mortgage: 0,
  rent: 0,
  houses: []
};

export const UPDATE_STEP1 = "UPDATE_STEP1";
export const UPDATE_STEP2 = "UPDATE_STEP2";
export const ADD_HOUSES = "ADD HOUSES";
export const RESET_VALUES = "RESET_VALUES";

function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_STEP1:
      return {
        ...state,
        name: payload.name,
        address: payload.address,
        city: payload.city,
        state: payload.state,
        zipcode: payload.zipcode
      };
    case UPDATE_STEP2:
      return {
        ...state,
        imgUrl: payload
      };
    case ADD_HOUSES:
      return {
        ...state,
        houses: payload
      };
    case RESET_VALUES:
      return {
        ...state,
        name: "",
        address: "",
        city: "",
        state: "",
        zipcode: "",
        imgUrl: "",
        mortgage: 0,
        rent: 0
      };
    default:
      return state;
  }
}

export default createStore(reducer, devToolsEnhancer());
