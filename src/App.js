import React from "react";
// import { hot } from "react-hot-loader";
import WolfsonHeader from "./components/header";
import Quiz from "./components/quiz";
import "antd/dist/antd.css";

class App extends React.Component {
  render() {
    return (
      <>
        <WolfsonHeader />
        <Quiz />
      </>
    );
  }
}

export default App;
