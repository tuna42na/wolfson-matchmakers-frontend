const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const quizQuestionSchema = new Schema(
  {
    name: { type: String, required: true },
    grade: { type: Number, required: true },
    gender: { type: Number, required: true },
    preference: { type: String, required: true },
    answers: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const QuizQuestion = mongoose.model("QuizQuestion", quizQuestionSchema);

module.exports = QuizQuestion;
