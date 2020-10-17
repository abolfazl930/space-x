import React, { useState } from "react";
import CustomContainer from "../shared/custom-continer";
import { getTime } from "../../utils/get-time";

import { Div, List, Row, Head1, Head2, Col1, Col2 } from "./styles";

function LaunchesList(props) {
  const { launches } = props;

  const handleOnClick = (id) => () => {
    props.onClick && props.onClick(id);
  };
  return (
    <Div>
      <CustomContainer>
        <List>
          <Row className="d-flex align-items-center">
            <Head1>time</Head1>
            <Head2 className="d-flex">site name</Head2>
          </Row>
          {launches &&
            launches.map((launch, index) => (
              <Row
                className="d-flex align-items-center"
                key={launch.flight_number}
                onClick={handleOnClick(launch.flight_number)}
              >
                <Col1>{getTime(launch.launch_date_unix)}</Col1>
                <Col2 className="d-flex">{launch.launch_site.site_name}</Col2>
              </Row>
            ))}
        </List>
      </CustomContainer>
    </Div>
  );
}

export default LaunchesList;
