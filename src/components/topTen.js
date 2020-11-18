import React from "react";

const TopTen = (props) => {
  console.log(props.matches);

  return (
    <ul>
      {props.matches.map((item, i) => (
        <li>
          <span key={i}>{item.name}</span>
          {"  "}
          <span key={i}>{item.matches}</span>
        </li>
      ))}
    </ul>
  );
};

export default TopTen;
