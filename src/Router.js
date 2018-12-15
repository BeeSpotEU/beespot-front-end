import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
import Landing from "./Landing";

const AppRouter = () => (
  <Router>
    <div>
      <Route path="/" exact component={Landing} />
    </div>
  </Router>
);

export default AppRouter;
