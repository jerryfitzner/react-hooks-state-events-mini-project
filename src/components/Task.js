import React from "react";

function Task({ text, category, deleter }) {
  // console.log(deleter);
  const itemDeleter = () => {
    deleter(text)
  }

  return (
    <div className="task">
      <div className="label">{ category }</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={ itemDeleter }>X</button>
    </div>
  );
}

export default Task;
