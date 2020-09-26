import React, { useState, useEffect } from "react";
import axios from "axios";

const Quiz = () => {
  let [questions, setQuestions] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("src/questions/questions.json");
      setQuestions(result.data);
    };
    fetchData();
  }, []);

  return (
    <>
      {questions
        ? questions.map((q, i) => (
            <div key={q.id}>
              <p>{q.question}</p>
              <ul>
                {q.answers.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            </div>
          ))
        : "Loading..."}
    </>
  );
};

export default Quiz;
