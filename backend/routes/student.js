const router = require("express").Router();
let Student = require("../models/student.model");

// Get function
router.route("/").get((req, res) => {
  Student.find()
    .then((students) => res.json(students))
    .catch((err) => res.status(400).json("Error" + err));
});

// Post Function
router.route("/add").post((req, res) => {
  const name = req.body.name;
  const grade = Number(req.body.grade);
  const gender = req.body.gender;
  const preference = req.body.preference;
  const answers = req.body.answers;

  const newStudent = new Student({ name, grade, gender, preference, answers });

  newStudent
    .save()
    .then(() => res.json("New Student"))
    .catch((err) => res.status(400).json("Error" + err));
});

module.exports = router;
