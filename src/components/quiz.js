import React, { useState, useEffect } from "react";
import Answers from "./answers";
import axios from "axios";
import { Radio } from "antd";

const Quiz = () => {
  let [questions, setQuestions] = useState();
  let [number, setNumber] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("src/questions/questions.json");
      setQuestions(result.data);
    };
    fetchData();
  }, []);
  const nextQuestion = () => {
    if (number < questions.length - 1) {
      setNumber(number + 1);
    }
  };
  const prevQuestion = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };

  return (
    <div className="quizBody">
      {questions ? (
        <>
          <h2>{questions[number].question}</h2>
          <ul>
            {questions[number].answers.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
          <button onClick={prevQuestion}> Previous Question </button>
          <button onClick={nextQuestion}> Next Question </button>
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default Quiz;
