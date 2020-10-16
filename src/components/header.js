import React from "react";
import { Heading } from "@chakra-ui/core";
import { Link } from "react-router-dom";

const WolfsonHeader = () => {
  return (
    <>
      <Link to="/">
        <Heading>Wolfson Match Maker's</Heading>
      </Link>
    </>
  );
};

export default WolfsonHeader;
