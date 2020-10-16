import React, { useState, useEffect } from "react";
import WolfsonHeader from "./header";
import axios from "axios";
import { Box, Button, Flex, Grid, Icon, Text } from "@chakra-ui/core";

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
            <h2>{questions[number].question}</h2>
            <Grid templateColumns="repeat(2, 1fr)" gap={5}>
              {questions[number].answers.map((item, i) => (
                <>
                  <Box
                    bg="teal.500"
                    width="100%"
                    color="white"
                    onClick={nextQuestion}
                    key={i}
                  >
                    <Flex size="120px" align="center" justify="center">
                      <Text textAlign="center">{item}</Text>
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
