import * as types from "../types";

export const setStudents = (students) => ({
  type: types.SET_STUDENTS,
  payload: students,
});
