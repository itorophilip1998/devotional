import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import PrayerFocus from "./components/PrayerFocus";
import { manual } from "../../Database/v3/manual";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../layouts/Headers/Navbar";
import DiscussionQuestion from "./components/DiscussionQuestion";
import { useSelector } from "react-redux";
/* eslint-disable */

function Manual() {
  const [list, setList] = useState([]);
  const page = useLocation();
  const date = page.pathname.replace("/manual/", "");
  const newDate = date.replace(/%20/g, " ");

  useEffect(() => {
    const newItem = manual?.filter((item) => {
      if (item?.date == newDate) {
        return item;
      }
    });
    const newList = newItem[0];
    setList({ ...newList });
  }, []);
  const navigate = useNavigate();
  const isSub = useSelector((state) => state.data.isSub);

  if (isSub !== "1") return navigate("/subscribe");
  return (
    <div>
      <Header item={list} />
      <Navbar date={list?.date} />
      <Introduction item={list} />
      <DiscussionQuestion item={list} />
      <PrayerFocus item={list} />
    </div>
  );
}

export default Manual;
