import * as types from "../types";
import { combineReducers } from "redux";

// Quiz Reducer
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

// Matches Reducer
const initialStudentState = {
  students: "",
};

const students = (state = initialStudentState, action) => {
  switch (action.type) {
    case types.SET_STUDENTS:
      return {
        ...state,
        students: action.payload,
      };
    default:
      return {
        ...state,
      };
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

    default:
      break;
  }
};

export default combineReducers({ quiz, students });
