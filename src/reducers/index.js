import * as types from "../types";
import { combineReducers } from "redux";

const intialQuizState = {
  questionNumber: 0,
};

const quiz = (state = intialQuizState, action) => {
  switch (action.type) {
    case types.SET_QUESTION_NUMBER:
      return {
        ...state,
        questionNumber: action.payload,
      };
      break;
    default:
      return state;
  }
};

const intialTakerState = {
  takerName: "",
};

const taker = (state = intialTakerState, action) => {
  switch (action.type) {
    case types.SET_TAKER_NAME:
      return {
        ...state,
        takerName: action.payload,
      };
      break;

    default:
      break;
  }
};

export default combineReducers({ quiz });
