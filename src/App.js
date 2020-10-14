import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import routes from "./configs/routes";

function App() {
  const [data, setData] = useState([]);
  useEffect((e) => {
    axios
      .get("https://api.spacexdata.com/v3/launches")
      .then(function (response) {
        console.log("response", response);
      });
  }, []);
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about-us">About</Link>
        <Suspense fallback={<div></div>}>
          <Switch>
            {routes.map((route, index) => (
              <Route
                exact
                key={index}
                path={route.path}
                render={(props) => {
                  const Page = route.component();
                  return <Page {...props} />;
                }}
              />
            ))}
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
