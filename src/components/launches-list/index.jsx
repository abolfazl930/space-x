import React, { useEffect, useState } from "react";
import CustomContainer from "../shared/custom-continer";
import { getTime } from "../../utils/get-time";

import {
  Div,
  TextFieldHlder,
  List,
  Row,
  Head1,
  Head2,
  Col1,
  Col2,
} from "./styles";
import TextField from "../shared/text-field";

function LaunchesList(props) {
  const { launches } = props;

  const [inputVal, setInputVal] = useState("");

  const handleChangeInput = (e) => {
    setInputVal(e.target.value);
  };

  useEffect(() => {
    props.onChange && props.onChange(inputVal);
  }, [inputVal]);

  return (
    <Div>
      <CustomContainer>
        <List>
          <TextFieldHlder>
            <TextField
              placeholder="search by site name"
              value={inputVal}
              onChange={handleChangeInput}
            />
          </TextFieldHlder>
          <Row className="d-flex align-items-center">
            <Head1>time</Head1>
            <Head2 className="d-flex">site name</Head2>
          </Row>
          {launches &&
            launches.map((launch, index) => (
              <Row
                className="d-flex align-items-center"
                key={launch.flight_number}
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
