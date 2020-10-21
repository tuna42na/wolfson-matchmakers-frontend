import * as types from "../types";

export const setQuestions = (questions) => ({
  type: types.SET_QUESTIONS,
  payload: questions,
});

export const setQuestionNumber = (questionNumber) => ({
  type: types.SET_QUESTION_NUMBER,
  payload: questionNumber,
});

export const setTakerAnswers = (takerAnswers) => ({
  type: types.SET_TAKER_ANSWERS,
  payload: takerAnswers,
});
