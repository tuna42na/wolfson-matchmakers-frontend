import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Heading, List, ListIcon, ListItem } from "@chakra-ui/core";

const ReviewAnswers = () => {
  const { questions, takerAnswers } = useSelector((state) => state.quiz);

  return (
    <>
      <Heading> Congrats! Here are your Responses </Heading>
      <div>
        {questions.map((item, i) => (
          <List>
            <ListItem>
              {i + 1} : {item.question}
            </ListItem>
            <ListItem fontWeight="bold">
              <ListIcon icon="check-circle" color="blue.500" />
              {item.answers[takerAnswers[i]]}{" "}
            </ListItem>
          </List>
        ))}
      </div>

      <Link to="/matches">
        <Button variant="ghost" variantColor="red">
          {" "}
          Let's See Your Matches{" "}
        </Button>
      </Link>
    </>
  );
};

export default ReviewAnswers;
