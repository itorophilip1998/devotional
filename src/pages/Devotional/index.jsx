import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import PrayerFocus from "./components/PrayerFocus";
 
import { devotional } from "../../Database/v3/devotional";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../layouts/Headers/Navbar"; 
import { useAuth } from "../../context/firebaseContext";
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
  const navigate=useNavigate(); 
  // console.debug(isSub);
  const { userDetails: user } = useAuth();

  if (!user?.isSub) return navigate("/subscribe");
  return (
    <div className="page">
      <Header item={list} />
      <Navbar date={list.date} />
      <Introduction item={list} />
      <PrayerFocus item={list} />
    </div>
  );
}

export default Devotional;
