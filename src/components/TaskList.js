import React from "react";
import Task from "./Task"
import { v4 as uuid } from "uuid";


function TaskList({ tasks, deleter }) {

  const taskerList = tasks.map((task) => (<Task key={uuid()} deleter={ deleter } text={task.text} category={task.category} />))

  return (
    <div className="tasks">
      { taskerList }
    </div>
  );
}

export default TaskList;
