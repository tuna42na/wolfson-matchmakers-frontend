import { List, ListItem, ListIcon } from "@chakra-ui/core";
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
    setBottomTenMatches(bottomMatches);
  };

  return (
    <div>
      {bottomTenMatches ? (
        <List>
          {bottomTenMatches.map((bottom, i) => (
            <ListItem key={i}>
              <ListIcon icon="delete" color="red.500" />
              {bottom.name} : {bottom.match} %{" "}
            </ListItem>
          ))}
        </List>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
};

export default BottomTen;
