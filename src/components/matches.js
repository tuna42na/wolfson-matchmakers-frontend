import React, { useEffect, useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Heading } from "@chakra-ui/core";
import axios from "axios";
import { useDispatch } from "react-redux";

const Matches = () => {
  const [matches, setMatches] = useState([{ name: "" }]);

  useEffect(() => {
    const fetchPeople = async () => {
      const students = await axios("src/data/people.json");
      setMatches(students.data);
    };
    fetchPeople();
  }, []);

  console.log(matches);
  return (
    <>
      <Heading id="header-font" as="h1" fontSize="7vh">
        Matches for "Your Name"
      </Heading>
      <div>
        {matches === [] ? (
          <span>"Loading..."</span>
        ) : (
          <span>
            {matches.data.map((item) => (
              <span>{item.name}</span>
            ))}
          </span>
        )}
      </div>
    </>
  );
};

export default Matches;
