import React from "react";
import { Link } from "react-router-dom";
import { Button, Heading } from "@chakra-ui/core";

const HomePage = () => {
  return (
    <div className="homepage">
      <Button variantColor="teal" variant="outline">
        Login
      </Button>
      <div className="homepage-content">
        <Heading as="h1" size="2xl">
          Wolfson's Match Makers
        </Heading>
        <Link to="/quiz">
          <Button variantColor="teal">Take the Quiz</Button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
