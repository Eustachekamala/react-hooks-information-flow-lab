import React from "react";
import { useState } from "react";
import Item from "./Item";
import items from "../data/items";


const Filter = ({ onCategoryChange }) => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    
    function handleCategoryChange(e) {
        const newCategory = e.target.value;
        setSelectedCategory(newCategory);
        onCategoryChange(newCategory);
    }

    // Filter items based on selected category
    const itemsToDisplay = items.filter((item) => 
         selectedCategory === "All" ? true : item.category === selectedCategory
    );

    return (
    <div className="Filter">
        <select name="filter" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
        <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
      </div>
    )
}

export default Filter