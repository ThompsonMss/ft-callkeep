import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GlobalStyle from "./globalStyle";

import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/:tk?" exact component={Home} />
        </Switch>
      </Router>
      <GlobalStyle />
    </>
  );
}

export default App;
