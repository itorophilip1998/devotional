import React from 'react'

function MainPoint({item}) {
  return (
    <div>
      {item?.main_point?.length !== 0 && (
        <div className="container">
          <span className="text text-warning">Main point: </span>
          <span className="text-letter d-block text-white font-italic ">
            <ul>
              {item &&
                item?.main_point?.map((item, index) => {
                  return (
                    <li className="listPoint" key={index}>
                      {item}
                    </li>
                  );
                })}
            </ul>
          </span>
        </div>
      )}
    </div>
  );
}

export default MainPoint