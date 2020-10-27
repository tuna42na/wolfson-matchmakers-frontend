import React, { useEffect, useState } from "react";
import {
  TransitionGroup,
  CSSTransition,
  SwitchTransition,
} from "react-transition-group";
import WolfsonHeader from "./header";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  setQuestionNumber,
  setQuestions,
  setTakerAnswers,
} from "../actions/quizActions";
import { Box, Button, Flex, Grid, Heading, Icon, Text } from "@chakra-ui/core";
import ReviewAnswers from "./reviewAnswers";

const Quiz = () => {
  const { questions, takerAnswers } = useSelector((state) => state.quiz);
  const dispatch = useDispatch();

  // CSS Transition State
  const [questionNumber, setQuestionNumber] = useState(0);
  const [change, setChange] = useState(false);

  // Axios Loads for Questions
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("src/data/questions.json");
      dispatch(setQuestions(result.data));
    };
    fetchData();
  }, []);

  // Function for each Answer Selection
  const nextQuestion = (key) => {
    let q = questionNumber;
    let addAnswer = takerAnswers;
    addAnswer[q] = key;
    setChange(true);
    console.log(change);
    dispatch(setTakerAnswers(addAnswer));
    dispatch(setQuestionNumber(questionNumber + 1));
    setTimeout(() => setChange(false), 1000);
  };

  // Button To Go Back a Question
  const prevQuestion = () => {
    if (questionNumber > 0) {
      dispatch(setQuestionNumber(questionNumber - 1));
    }
  };

  // Quiz Body & Conditional Formatting
  return (
    <div>
      <WolfsonHeader />
      <div className="quizBody">
        {questionNumber === questions.length ? (
          <div>
            <Button
              type="text"
              size="xs"
              variantColor="teal"
              variant="ghost"
              onClick={prevQuestion}
            >
              <Icon name="arrow-back" />
              Previous Question
            </Button>
            <ReviewAnswers />
          </div>
        ) : (
          <>
            <Button
              type="text"
              size="xs"
              variantColor="teal"
              variant="ghost"
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
                <CSSTransition
                  in={change}
                  timeout={300}
                  classNames="question-animation"
                >
                  <Box
                    as="button"
                    rounded="md"
                    bg="blue.500"
                    width="100%"
                    color="white"
                    onClick={() => nextQuestion(i)}
                    key={i}
                  >
                    <Flex key={i} h="20vh" align="center" justify="center">
                      <Text
                        key={i}
                        fontSize="2vh"
                        fontWeight="bold"
                        textAlign="center"
                      >
                        {item}
                      </Text>
                    </Flex>
                  </Box>
                </CSSTransition>
              ))}
            </Grid>
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz;
