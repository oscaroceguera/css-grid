import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Basic from './basic'
import AdvancedTemplating from "./Advanced-templating";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/basics">Basics</Link>
            </li>
            <li>
              <Link to="/advancedTemplating">Advanced Templating</Link>
            </li>
          </ul>
        </nav>
        <div
          style={{
            border: "1px solid red",
          }}
        >
          <Switch>
            <Route exac path="/basics">
              <Basic />
            </Route>
            <Route exac path="/advancedTemplating">
              <AdvancedTemplating />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
