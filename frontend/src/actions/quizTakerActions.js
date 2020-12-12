import * as types from "../types";

export const setQuestionNumber = (questionNumber) => ({
  type: types.SET_QUESTION_NUMBER,
  payload: questionNumber,
});
