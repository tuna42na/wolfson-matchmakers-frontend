import React, { useEffect } from "react";
import WolfsonHeader from "./header";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  setQuestionNumber,
  setQuestions,
  setTakerAnswers,
} from "../actions/quizActions";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Box, Button, Flex, Grid, Heading, Icon, Text } from "@chakra-ui/core";
import ReviewAnswers from "./reviewAnswers";

const Quiz = () => {
  const { questions, takerAnswers, questionNumber } = useSelector(
    (state) => state.quiz
  );
  const dispatch = useDispatch();

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
    dispatch(setTakerAnswers(addAnswer));
    dispatch(setQuestionNumber(questionNumber + 1));
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
              variantColor="red.50"
              size="xs"
              onClick={prevQuestion}>
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
              variantColor="red.50"
              onClick={prevQuestion}>
              <Icon name="arrow-back" />
              Previous Question
            </Button>{" "}
            <Heading
              as="h2"
              fontSize="3vh"
              color="white"
              lineHeight="5vh"
              padding="20px">
              {questions[questionNumber].question}
            </Heading>
            {/* <Grid templateColumns="repeat(2, 2fr)" gap={5}> */}
            <TransitionGroup className="question-grid">
              {questions[questionNumber].answers.map((item, i) => (
                <CSSTransition
                  key={item}
                  timeout={500}
                  classNames="question-animation">
                  <Box
                    as="button"
                    bg=" #e44949"
                    width="100%"
                    color="white"
                    onClick={() => nextQuestion(i)}
                    key={i}
                    className="answer-box">
                    <Flex key={i} h="20vh" align="center" justify="center">
                      <Text
                        key={i}
                        fontSize="2vh"
                        fontWeight="bold"
                        textAlign="center">
                        {item}
                      </Text>
                    </Flex>
                  </Box>
                </CSSTransition>
              ))}
            </TransitionGroup>
            {/* </Grid> */}
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz;
