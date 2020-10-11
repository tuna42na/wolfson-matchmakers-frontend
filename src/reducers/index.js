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
    default:
      return state;
  }
};

export default combineReducers({ quiz });
