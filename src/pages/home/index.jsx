import React from "react";
import { useModalContext } from "../../hooks/use-modal-context";
import CustomContainer from "../../components/shared/custom-continer";
import "./styles.css";

function Home(props) {
  const modalInfo = useModalContext();
  console.log("m", modalInfo);
  return (
    <section className="main-page">
      <CustomContainer>home</CustomContainer>
    </section>
  );
}

export default Home;
