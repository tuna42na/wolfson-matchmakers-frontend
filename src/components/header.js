import React from "react";
import { useSelector } from "react-redux";
import { Box, Grid, Heading, Progress } from "@chakra-ui/core";
import { Link } from "react-router-dom";

const WolfsonHeader = () => {
  const { questionNumber } = useSelector((state) => state.quiz);
  let progress = (questionNumber / 7) * 100;

  return (
    <>
      <Grid className="quiz-header">
        <Box align="center">
          <Link to="/">
            <Heading id="header-font" as="h1" fontSize="7vh">
              Wolfson Match Makers
            </Heading>
          </Link>
        </Box>
        <Box align="center" h="7vh">
          <Progress value={progress} />
        </Box>
      </Grid>
    </>
  );
};

export default WolfsonHeader;
