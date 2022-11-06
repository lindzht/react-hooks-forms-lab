import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({handleDisplayedItems}) {

  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");


  function handleFormSubmit (e) {
    e.preventDefault();

    const newItem  = {
      id: uuid(),
      name,
      category
    }
    handleDisplayedItems(newItem);
  }

  return (

    <form onSubmit={handleFormSubmit} className="NewItem">
      <label>
        Name:
        <input 
          type="text" 
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)} />
      </label>

      <label>
        Category:
        <select 
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}>

          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>

        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
