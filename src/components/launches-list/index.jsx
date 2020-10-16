import React from "react";
import CustomContainer from "../shared/custom-continer";
import { getTime } from "../../utils/get-time";

import { Div, List, Row, Col } from "./styles";

function LaunchesList(props) {
  const { launches } = props;

  return (
    <Div>
      <CustomContainer>
        <List>
          {launches &&
            launches.map((launch, index) => (
              <Row className="d-flex">
                <Col width="200px">{getTime(launch.launch_date_unix)}</Col>
                <Col className="d-flex flex-grow-1"></Col>
              </Row>
            ))}
        </List>
      </CustomContainer>
    </Div>
  );
}

export default LaunchesList;
