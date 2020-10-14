import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  useEffect( e => {
    axios
      .get("https://api.spacexdata.com/v3/launches")
      .then(function (response) {
        console.log("response", response);
      });
  }, []);
  return <div className="App"></div>;
}

export default App;
