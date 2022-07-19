import React from 'react'
import "./tip.scss"
import {tips} from "../../Database/tips"
function Tip() {
  return (
    <div className='tips  pb-5 mb-3 p-2'>
      {tips && tips.map((item, index) => (
        <div key={index}>
          <h4 className="text-head text text-primary">{item.head}</h4>
          <p>{item.body}</p>
        </div>
      ))
      }
    </div>
  )
}

export default Tip