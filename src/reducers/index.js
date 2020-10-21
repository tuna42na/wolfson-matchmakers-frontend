import * as types from "../types";
import { combineReducers } from "redux";

const intialQuizState = {
  questionNumber: 0,
  questions: [{ id: "1000", question: "Loading...", answers: ["Loading..."] }],
  takerAnswers: [],
};

const quiz = (state = intialQuizState, action) => {
  switch (action.type) {
    case types.SET_QUESTION_NUMBER:
      return {
        ...state,
        questionNumber: action.payload,
      };
    case types.SET_QUESTIONS:
      return {
        ...state,
        questions: action.payload,
      };
    case types.SET_TAKER_ANSWERS:
      return {
        ...state,
        takerAnswers: action.payload,
      };
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
