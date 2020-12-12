const router = require("express").Router();
let QuizQuestion = require("../models/quizQuestions.model");

// Get function
router.route("/").get((req, res) => {
  QuizQuestion.find()
    .then((quizQuestions) => res.json(quizQuestions))
    .catch((err) => res.status(400).json("Error" + err));
});

// Post Function
router.route("/add").post((req, res) => {
  const name = req.body.name;

  const newQuizQuestion = new QuizQuestion({ name });

  newQuizQuestion
    .save()
    .then(() => res.json("New Question!"))
    .catch((err) => res.status(400).json("Error" + err));
});

module.exports = router;
