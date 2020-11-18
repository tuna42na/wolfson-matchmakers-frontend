import React, { useEffect, useState } from "react";
import { setStudents } from "../actions/matchesActions";
import { Heading } from "@chakra-ui/core";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import TopTen from "./topTen";

const Matches = () => {
  const { students } = useSelector((state) => state.students);
  const { takerAnswers } = useSelector((state) => state.quiz);
  const [matches, setMatches] = useState([]);
  const dispatch = useDispatch();

  // Set Up the Students
  useEffect(() => {
    const fetchPeople = async () => {
      const students = await axios("src/data/people.json");
      dispatch(setStudents(students.data));
    };
    fetchPeople();
  }, []);

  // Compare Students to Current Results
  const generateMatches = () => {
    compare(students);
  };

  // Comparison Function
  const compare = (list) => {
    list.map((person) => {
      let matchCount = 0;
      for (let i = 0; i < person.answers.length; i++) {
        if (takerAnswers[i] === person.answers[i]) {
          matchCount++;
        }
      }
      let updateMatches = matches;

      updateMatches.push({ name: person.name, matches: matchCount });
      setMatches([...updateMatches]);
    });
  };

  return (
    <>
      <Heading id="header-font" as="h1" fontSize="7vh">
        Matches for "Your Name"
      </Heading>
      <div>
        <button onClick={() => generateMatches()}> Get Results </button>
        <br />
        <TopTen matches={matches} />
      </div>
    </>
  );
};

export default Matches;
