import React from "react";
import "./styles.css";

const SearchFilters = () => {
  return (
    <div>
      <h1>Seach Filters</h1>
      <div class="filter-wrapper">
        <div class="filter-input">input 1</div>
        <div class="filter-input">input 2</div>
        <div class="filter-input">input 3</div>
        <div class="filter-input">input 4</div>
        <div class="filter-input">input 5</div>
        <div class="filter-input">input 6</div>

        <div class="action-btns">
          <button type="reset">Reset</button>
          <button type="submit">Search</button>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;
