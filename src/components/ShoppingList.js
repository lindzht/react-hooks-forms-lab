import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchField, setSearchField] = useState("")
  const [displayItems, setDisplayItems] = useState (items)

  //adding a new item:
  function handleDisplayedItems ( newItem ){
    setDisplayItems([...displayItems, newItem]);
  }

  //category filter:
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = displayItems.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });


  function handleSearchField (onSearchChange){
    setSearchField(onSearchChange);
  }

  const searchItemsToDisplay = itemsToDisplay.filter((item) => {
    return item.name.toLowerCase().includes(searchField.toLowerCase());
  })


  return (
    <div className="ShoppingList">
      <ItemForm handleDisplayedItems={handleDisplayedItems}/>
      <Filter selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} handleSearchField={handleSearchField} searchField={searchField} />
      <ul className="Items">
        {searchItemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
