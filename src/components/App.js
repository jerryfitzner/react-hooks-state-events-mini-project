import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setNewTask] = useState(TASKS);
  const [category, setCategory] = useState("All");


  const deleteFunction = (item) => {
    setNewTask(tasks.filter(task => task.text !== item));
  }

  const btnClick = (cat) => {
    setNewTask(TASKS.filter((task) => {
      if(task.category === cat){
        setCategory(task.category);
        return task;
      }else if(cat === "All"){
        setCategory(task.category);
        return tasks;
      }
    }))
  };

  const onTaskFormSubmit = (info) => {
    setNewTask([
      ...tasks,
      info
    ]);
  }

  

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} btnClick={btnClick} category={category}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={tasks} deleter={ deleteFunction } />
    </div>
  );
}

export default App;
