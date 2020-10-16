import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { ModalActions } from "../../context/actions/modal-actions";
import services from "../../services";

import CustomContainer from "../../components/shared/custom-continer";
import ArrowDownIcon from "../../components/shared/svg/arrow-down";
import Title from "../../components/shared/title";
import LaunchesList from "../../components/launches-list";

import {
  StyledFullPageWrapper,
  TextBox,
  StyledTitle,
  ArrowHolder,
  LuancPage,
  ListSection,
} from "./styles";

function Luanches(props) {
  let history = useHistory();

  const [allLaunches, setAllLaunches] = useState(null);
  const [searchedLaunches, setSearchedLaunches] = useState(null);

  const pastLuanches = "past";
  const upcomingLauches = "upcoming";

  useEffect(() => {
    getLauches(pastLuanches, { start: "2018-01-01", end: "2020-01-01" });
  }, []);

  const getLauches = async (LuanchTime, model, singleMode) => {
    try {
      let res;
      if (LuanchTime === pastLuanches) {
        res = await services.launch.past(model, singleMode);
      }
      if (LuanchTime === upcomingLauches) {
        res = await services.launch.upcoming(model, singleMode);
      }
      console.log("res", res.data);
      setAllLaunches(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const searchHandler = (value, arr, tree, searchTarget) => {
    let newValue = value.toUpperCase();
    let newArr = arr;
    if (newValue) {
      newArr = newArr.filter((item) =>
        String(item[tree][searchTarget]).includes(newValue)
      );
      return newArr;
    } else {
      return allLaunches;
    }
  };

  const handleOnChange = (value) => {
    let searchArr = searchHandler(
      value,
      allLaunches,
      "launch_site",
      "site_name"
    );
    setSearchedLaunches(searchArr);
  };

  const handleOnClick = (id) => {
    history.push(`/details/${id}`);
  };
  //   console.log(ModalActions());
  // const { dispatchOpenModal } = ModalActions();
  // const test = () => {
  //   dispatchOpenModal();
  // };

  return (
    <LuancPage>
      <StyledFullPageWrapper className="d-flex justify-content-center align-items-center">
        <TextBox className="d-flex flex-column justify-content-center align-items-center">
          <StyledTitle size="xLarge">Falcon Heavy</StyledTitle>
          <Title size="medium">The world’s most powerful rocket</Title>
        </TextBox>
        <ArrowHolder className="d-flex justify-content-center align-items-center">
          <ArrowDownIcon width="30px" fill="#000" />
        </ArrowHolder>
      </StyledFullPageWrapper>
      <ListSection>
        <LaunchesList
          launches={searchedLaunches ? searchedLaunches : allLaunches}
          onClick={handleOnClick}
          onChange={handleOnChange}
        />
      </ListSection>
    </LuancPage>
  );
}

export default Luanches;
