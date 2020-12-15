import { Box, Heading, List, ListItem, ListIcon } from "@chakra-ui/core";
import React, { useEffect, useState } from "react";

const BottomTen = (props) => {
  const [bottomTenMatches, setBottomTenMatches] = useState([]);

  useEffect(() => {
    bottomTen();
  }, [props.matches]);

  // Sort Matches
  const bottomTen = () => {
    let bottomMatches = props.matches.slice();
    bottomMatches.sort((a, b) => {
      return a.match - b.match;
    });
    let onlyTen = bottomMatches.slice(0, 11);
    setBottomTenMatches(onlyTen);
  };

  return (
    <Box w="80%">
      {bottomTenMatches ? (
        <List className="match-view">
          {bottomTenMatches.map((bottom, i) => (
            <ListItem key={i}>
              <ListIcon icon="delete" color="red.500" />
              {bottom.name} : {bottom.match}%
            </ListItem>
          ))}
        </List>
      ) : (
        <p>loading...</p>
      )}
      <Heading> Bottom Matches </Heading>
    </Box>
  );
};

export default BottomTen;
