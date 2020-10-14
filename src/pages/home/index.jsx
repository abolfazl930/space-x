import React from "react";
import { useModalContext } from "../../hooks/use-modal-context";

function Home(props) {
  const modalInfo = useModalContext();
  console.log("m", modalInfo);
  return <div>Home</div>;
}

export default Home;
