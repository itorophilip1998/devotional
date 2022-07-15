import React from "react";

function DiscussionQuestion({ item }) {
  return (
    <div className="introText">
      {/* start text */}
      <div className="container p-2 ">
        <span className="text d-block text-primary my-3">
          Discussion Question:
        </span>

        <span className="text-content introduction text-dark d-block  text-justify">
          <div  clasName="p1">
            {console.log(item.discussion_question)}
            {item &&
              item?.discussion_question?.map((currentItem, index) => {
                return (
                  <React.Fragment key={index}>
                    {/* questions */}
                    <div className="question text-primary">
                      {currentItem?.question}
                    </div>

                    {/* answers */}
                    <ul>
                      {currentItem &&
                        currentItem?.answer?.map((newItem, newIndex) => {
                          return (
                            <li key={newIndex}>
                              <div className="anwser text-dark">{newItem}</div>
                            </li>
                          );
                        })}
                    </ul>
                  </React.Fragment>
                );
              })}
          </div>
        </span>
      </div>
      {/* end text */}
    </div>
  );
}

export default DiscussionQuestion;
