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
        <Heading as="h1" fontSize="10vh" color="white">
          Wolfson's
        </Heading>
        <Heading as="h1" fontSize="10vh" color="white">
          Match Makers
        </Heading>
        <Link to="/quiz">
          <Button variantColor="teal" variant="outline" size="lg">
            {" "}
            Quiz
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
