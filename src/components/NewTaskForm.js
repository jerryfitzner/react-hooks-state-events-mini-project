import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [info, setText] = useState({
    text: '',
    category: 'Code'
  });
  // console.log(category.category)

  const catFilter = categories.map((cat) => (<option key={uuid()}>{cat}</option>));

  const changeHandler = (e) => {
    setText({
      ...info,
      [e.target.name]: e.target.value
      });
  };

  const submitBtn = (e) => {
    e.preventDefault();
    onTaskFormSubmit(info);
  };

  return (
    <form className="new-task-form" onSubmit={submitBtn}>
      <label>
        Details
        <input type="text" name="text" onChange={changeHandler}/>
      </label>
      <label>
        Category
        <select name="category" value={info.category} onChange={changeHandler}>
          {catFilter}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
