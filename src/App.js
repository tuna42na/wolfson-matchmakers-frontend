import React from "react";
// import { hot } from "react-hot-loader";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@chakra-ui/core";
import rootReducer from "./reducers";
import WolfsonHeader from "./components/header";
import Quiz from "./components/quiz";
import HomePage from "./components/home";
import "antd/dist/antd.css";

const store = createStore(rootReducer);

class App extends React.Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <ThemeProvider>
            <Switch>
              <Route path="/" component={HomePage} exact />
              <Route path="/quiz" component={Quiz} />
              <Route component={Error} />
            </Switch>
          </ThemeProvider>
        </Provider>
      </>
    );
  }
}

export default App;
