import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import PrayerFocus from "./components/PrayerFocus";
import "./devotional.scss";
import { devotional } from "../../Database/devotional";
import { useLocation } from "react-router-dom";
import Navbar from "../../layouts/Headers/Navbar";
/* eslint-disable */

function Devotional() {
  const [list, setList] = useState([]);
  const page = useLocation();
  const date = page.pathname.replace("/devotional/", "");
  const newDate = date.replace(/%20/g, " ");
  useEffect(() => {
    const newItem = devotional.filter((item) => {
      if (item.date === newDate) {
        return item;
      }
    });
    const newList = newItem[0];
    setList({ ...newList });
  }, []);

  return (
    <div>
      <Navbar date={list.date} />
      <Header item={list} />
      <Introduction item={list} />
      <PrayerFocus item={list} />
    </div>
  );
}

export default Devotional;
