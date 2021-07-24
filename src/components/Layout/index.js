import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../../pages/Home";
import "./index.scss";

const Layout = () => {
  return (
    <Router>
      <div className="layout">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {/* Add more page here */}
        </Switch>
      </div>
    </Router>
  );
};

export default Layout;
