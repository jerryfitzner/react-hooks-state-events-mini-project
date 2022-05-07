import React from "react";

function CategoryFilter({ categories, btnClick, category }) {
  
  const btnCreator = categories.map(cat => {
    

      const classSel = category === cat ? "selected" : null;

      return(
        <button 
        key={cat} 
        onClick={ () => btnClick(cat) }
        className={ classSel }
        >
          {cat}
        </button>
      )
    })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {btnCreator}
    </div>
  );
}

export default CategoryFilter;
