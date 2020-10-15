import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import routes from "./configs/routes";
import Header from "./components/header";

function App() {
  // const [data, setData] = useState([]);
  // useEffect((e) => {
  //   axios
  //     .get("https://api.spacexdata.com/v3/launches")
  //     .then(function (response) {
  //       console.log("response", response);
  //     });
  // }, []);
  return (
    <Router>
      <div>
        <Header />
        <Suspense fallback={<div></div>}>
          <Switch>
            {routes.map((route, index) => (
              <Route
                exact
                key={index}
                path={route.path}
                render={() => {
                  document.title = `spaceX - ${route.title}`;
                  const Page = route.component();
                  return <Page />;
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
