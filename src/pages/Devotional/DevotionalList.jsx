import React from "react";
import WeekListMenu from "../../components/WeekListMenu/WeekListMenu";
import { useSelector } from "react-redux";
/* eslint-disable*/
function DevotionalList() {
  const search = useSelector((state) => state.data.search);

  const list = useSelector((state) =>
    state.data.devotional.filter((item) => {
      if (item.topic.toLowerCase().match(search.toLowerCase())) {
        return item;
      } else if (item.date.toLowerCase().match(search.toLowerCase())) {
        return item;
      }
    })
  );

  return (
    <div className="p-1 pb-5 mb-2">
      {list &&
        list.map((item, index) => (
          <WeekListMenu
            item={item}
            index={index}
            key={index}
            route={`/devotional/${item.date}`}
          />
        ))}
      {list.length <= 0 && (
        <div className="text-center notfoundDiv ">
          <img
            src="/images/notfound.webp"
            className="notfound shadow"
            alt="not found"
          />
          <div className="d-block">Not found</div>
        </div>
      )}
    </div>
  );
}

export default DevotionalList;
