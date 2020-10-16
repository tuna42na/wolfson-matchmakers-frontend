import React, { useState, useEffect } from "react";
import WolfsonHeader from "./header";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setQuestionNumber } from "../actions/quizActions";
import { Box, Button, Flex, Grid, Heading, Icon, Text } from "@chakra-ui/core";

const Quiz = () => {
  const { questionNumber } = useSelector((state) => state.quiz);
  const dispatch = useDispatch();
  let [questions, setQuestions] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("src/questions/questions.json");
      setQuestions(result.data);
    };
    fetchData();
  }, []);

  const nextQuestion = () => {
    if (questionNumber < questions.length - 1) {
      dispatch(setQuestionNumber(questionNumber + 1));
    }
  };
  const prevQuestion = () => {
    if (questionNumber > 0) {
      dispatch(setQuestionNumber(questionNumber - 1));
    }
  };

  return (
    <div>
      <WolfsonHeader />
      <div className="quizBody">
        {questions ? (
          <>
            <Button
              type="text"
              size="xs"
              variantColor="teal"
              // variant=""
              onClick={prevQuestion}
            >
              <Icon name="arrow-back" />
              Previous Question
            </Button>{" "}
            <Heading as="h2" fontSize="3vh" padding="5px">
              {questions[questionNumber].question}
            </Heading>
            <Grid templateColumns="repeat(2, 2fr)" gap={5}>
              {questions[questionNumber].answers.map((item, i) => (
                <>
                  <Box
                    as="button"
                    rounded="md"
                    bg="teal.500"
                    width="100%"
                    color="white"
                    onClick={nextQuestion}
                    key={i}
                  >
                    <Flex size="20vh" align="center" justify="center">
                      <Text fontSize="2vh" textAlign="center">
                        {item}
                      </Text>
                    </Flex>
                  </Box>
                </>
              ))}
            </Grid>
          </>
        ) : (
          "Loading..."
        )}
      </div>
    </div>
  );
};

export default Quiz;
