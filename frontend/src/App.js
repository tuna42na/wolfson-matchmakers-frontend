import React from "react";
// import { hot } from "react-hot-loader";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { Switch, Route } from "react-router-dom";

import rootReducer from "./reducers";
import Profile from "./components/profile";
import Quiz from "./components/quiz";
import HomePage from "./components/home";
import "antd/dist/antd.css";
import Matches from "./components/matches";

const store = createStore(rootReducer);

class App extends React.Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/profile" component={Profile} />
            <Route path="/quiz" component={Quiz} />
            <Route path="/matches" component={Matches} />
            <Route component={Error} />
          </Switch>
        </Provider>
      </>
    );
  }
}

export default App;
