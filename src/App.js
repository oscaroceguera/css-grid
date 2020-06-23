import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Basic from './basic'
import AdvancedTemplating from "./Advanced-templating";
import SearchFilters from "./Search-filters";
import ImageGallery from "./Image-gallery";
import FancyHomepage from "./Fancy-homepage";

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
            <li>
              <Link to="/searchFilters">Search Filters</Link>
            </li>
            <li>
              <Link to="/imageGallery">Image Gallery</Link>
            </li>
            <li>
              <Link to="/fancyHomepage">Fancy Homepage</Link>
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
            <Route exac path="/searchFilters">
              <SearchFilters />
            </Route>
            <Route exac path="/imageGallery">
              <ImageGallery />
            </Route>
            <Route exac path="/fancyHomepage">
              <FancyHomepage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
