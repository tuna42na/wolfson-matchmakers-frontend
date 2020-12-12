import React, { useEffect, useState } from "react";
import { setStudents } from "../actions/matchesActions";
import { Box, Flex, Grid, Heading } from "@chakra-ui/core";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import TopTen from "./topTen";
import BottomTen from "./bottomTen";

const Matches = () => {
  const { students } = useSelector((state) => state.students);
  const { takerAnswers } = useSelector((state) => state.quiz);
  const [matches, setMatches] = useState([]);
  const dispatch = useDispatch();

  // Set Up the Students
  useEffect(() => {
    const fetchPeople = async () => {
      const students = await axios("src/data/people.json").then(function (
        students
      ) {
        dispatch(setStudents(students.data));
        compare(students.data);
      });
    };
    fetchPeople();
  }, []);

  // Comparison Function
  const compare = (list) => {
    list.map((person) => {
      let matchCount = 0;
      for (let i = 0; i < person.answers.length; i++) {
        if (takerAnswers[i] === person.answers[i]) {
          matchCount++;
        }
      }
      let percentage = (matchCount / person.answers.length) * 100;
      let updateMatches = matches;
      updateMatches.push({ name: person.name, match: percentage });
      setMatches([...updateMatches]);
    });
  };

  return (
    <>
      <Heading className="quiz-header" id="header-font" as="h1" fontSize="7vh">
        Matches for "Your Name"
      </Heading>
      <div className="matchBody">
        {matches ? (
          <Grid templateColumns="repeat(2, 10fr)" gap={5}>
            <Box w="100%">
              <Flex h="20vh" align="center" justify="center">
                <TopTen matches={matches} />
              </Flex>
            </Box>
            <Box w="100%">
              <Flex h="20vh" align="center" justify="center">
                <BottomTen matches={matches} />
              </Flex>
            </Box>
          </Grid>
        ) : (
          <p>Loading</p>
        )}
      </div>
    </>
  );
};

export default Matches;
