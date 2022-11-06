import React from "react";

function Filter({ onCategoryChange, handleSearchField, searchField, selectedCategory }) {

  // const searchFieldInput = (name)=> {
  //   const searchInput = name.target.value
  //   handleSearchField(searchInput);
  // }

  const searchFieldInput = (e)=> {
    handleSearchField(e.target.value);
  }




  return (
    <div className="Filter">
      <input 
        type="text" 
        name="search" 
        placeholder="Search..." 
        value={searchField}
        onChange={ searchFieldInput }/>

      <select name="filter" value={selectedCategory} onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>

      </select>
    </div>
  );
}

export default Filter;
