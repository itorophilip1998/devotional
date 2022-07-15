import React, { useEffect, useState } from "react";
import WeekListMenu from "../../components/WeekListMenu/WeekListMenu";
import { manual } from "../../Database/manual";
function DevotionalList() {
  const [list, setList] = useState([]);
  useEffect(() => {
    setList(manual);
  }, []);
  return (
    <div className="p-1 pb-5 mb-2">
      {list &&
        list.map((item, index) => (
            <WeekListMenu item={item} index={index} key={index} route={`/manual/${item.date}`} />
        ))}
    </div>
  );
}

export default DevotionalList;
