import React from "react";
import { useSelector } from "react-redux";
import { Box, Grid, Heading, Progress } from "@chakra-ui/core";
import { Link } from "react-router-dom";

const WolfsonHeader = () => {
  const { questionNumber } = useSelector((state) => state.quiz);
  let progress = (questionNumber / 7) * 100;
  console.log(progress);
  return (
    <>
      <Grid templateColumns="2">
        <Box align="center">
          <Link to="/">
            <Heading as="h1" fontSize="7vh">
              Wolfson Match Maker's
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
