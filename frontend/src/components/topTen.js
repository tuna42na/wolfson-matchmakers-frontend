import React, { useEffect, useState } from "react";
import { Heading, List, ListItem, ListIcon, Box } from "@chakra-ui/core";

const TopTen = (props) => {
  const [topTenMatches, setTopTenMatches] = useState([]);

  useEffect(() => {
    topTen();
  }, [props.matches]);

  // Sort Matches
  const topTen = () => {
    let topMatches = props.matches.slice();
    topMatches.sort((a, b) => {
      return b.match - a.match;
    });
    setTopTenMatches(topMatches);
  };

  return (
    <Box w="80%">
      <Heading> Top Matches </Heading>
      {topTenMatches ? (
        <List className="match-view">
          {topTenMatches.map((top, i) => (
            <ListItem key={i}>
              <ListIcon icon="check-circle" color="green.500" />
              <span>
                {top.name} : {top.match} %
              </span>
            </ListItem>
          ))}
        </List>
      ) : (
        <p>loading...</p>
      )}
    </Box>
  );
};

export default TopTen;
