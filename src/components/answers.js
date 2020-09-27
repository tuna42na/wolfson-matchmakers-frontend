import React from "react";

const Answers = (items) => {
  let options = props.items;

  return <li>{options.map((item) => item)}</li>;
};

export default Answers;
