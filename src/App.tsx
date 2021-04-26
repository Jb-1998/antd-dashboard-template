import React from 'react';
// Theme
import "./theme/theme.scss";

// Routes
import { Router, Route, Switch } from "react-router-dom";
import routesContainer from "./routes/routesContainer";
import history from "./routes/history";

import Login from './pages/auth/Login';

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/" component={routesContainer} />
      </Switch>
    </Router>
  );
}

export default App;
