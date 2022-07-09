import React,{useEffect,useState} from 'react'
import WeekListMenu from '../../components/WeekListMenu/WeekListMenu'
import { devotional } from "../../Database/devotional";
function DevotionalList() {
  const [list, setList] = useState([])
  useEffect(()=>{
    setList(devotional)
  },[])
  return (
    <div className="p-1 pb-5 mb-2"> 
      {list &&
        list.map((item, index) => <WeekListMenu item={item} key={index} />)}
    </div>
  );
}

export default DevotionalList;