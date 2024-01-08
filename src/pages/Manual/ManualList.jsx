import React from "react";
import { useSelector } from "react-redux";
import WeekListMenu from "../../components/WeekListMenu/WeekListMenu";
 
// import { getSearch } from "../../store/data";
/* eslint-disable */
function DevotionalList() {
  // let dispatch = useDispatch();
  //   dispatch(getSearch(""));
  const search = useSelector((state) => state.data.search2);
  const list = useSelector((state) =>
    state.data.manual.filter((item) => {
      if (item.topic.toLowerCase().match(search.toLowerCase())) {
        return item;
      } else if (item.date.toLowerCase().match(search.toLowerCase())) {
        return item;
      } else if (item.lesson.toLowerCase().match(search.toLowerCase())) {
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
            route={`/manual/${item.date}`}
          />
        ))}
      {list.length <= 0 && (
        <div className="text-center notfoundDiv ">
          <img
            src="/images/notfound.webp"
            className="notfound "
            alt="not found"
          />
          <div className="d-block">Not found</div>
        </div>
      )}
    </div>
  );
}

export default DevotionalList;
