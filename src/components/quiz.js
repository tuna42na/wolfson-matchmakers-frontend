import React, { useState, useEffect } from "react";
import Answers from "./answers";
import WolfsonHeader from "./header";
import axios from "axios";
import { Button } from "@chakra-ui/core";

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
    <div>
      <WolfsonHeader />
      <div className="quizBody">
        {questions ? (
          <>
            <h2>{questions[number].question}</h2>
            <div>
              {questions[number].answers.map((item, i) => (
                <>
                  <button key={i}> {item} </button>
                </>
              ))}
            </div>
            <button type="text" onClick={prevQuestion}>
              Previous Question
            </button>{" "}
            <button type="text" onClick={nextQuestion}>
              Next Question
            </button>
          </>
        ) : (
          "Loading..."
        )}
        {/* <Button> Chakra Test </Button> */}
      </div>
    </div>
  );
};

export default Quiz;
