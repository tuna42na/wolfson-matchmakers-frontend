import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Heading, List, ListIcon, ListItem } from "@chakra-ui/core";

const ReviewAnswers = () => {
  const { questions, takerAnswers } = useSelector((state) => state.quiz);

  return (
    <>
      <Heading color="white"> Congrats! Here are your Responses </Heading>
      <List>
        {questions.map((item, i) => (
          <div key={i}>
            <ListItem color="white">
              {i + 1} : {item.question}
            </ListItem>
            <ListItem color="white" fontWeight="bold">
              <ListIcon icon="check-circle" color="white" />
              {item.answers[takerAnswers[i]]}
            </ListItem>
          </div>
        ))}
      </List>

      <Link to="/matches">
        <Button> Let's See Your Matches </Button>
      </Link>
    </>
  );
};

export default ReviewAnswers;
