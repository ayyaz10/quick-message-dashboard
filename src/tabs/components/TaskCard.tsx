import React from "react";

function TaskCard() {
  function getTimeInSecondsSinceEpoch() {
    const currentTimeInMillis = Date.now();
    const currentTimeInSeconds = Math.floor(currentTimeInMillis / 1000);
    return currentTimeInSeconds;
  }

  // const imgUrl = `https://www.robohash.org/${getTimeInSecondsSinceEpoch()}?set=set2&size=100x100`;
  // chrome.storage.sync.set({ imgUrl });
  console.log("hello world");
  return (
    <div className="card-container">
      {/* <img src={imgUrl} alt="" /> */}
      <p className="name">Ayyaz</p>
      <p className="task-name">Task Name</p>
      <p className="task-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
        voluptas minima debitis nesciunt ipsum asperiores expedita sint eos
        sapiente excepturi! Perferendis necessitatibus quaerat, id eveniet non
        accusantium in saepe ab.
      </p>
      <p className="associate-number">Number</p>
    </div>
  );
}

export default TaskCard;
