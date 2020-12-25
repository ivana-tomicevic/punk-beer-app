import React from "react";
import "../css/Main.css";

export default function SortBy({ onSortBy }) {
  return (
    <div>
      <form className="dropdown">
        <select onChange={onSortBy}>
          <option value="Light Beers">Light Beers</option>
          <option value="Strong Beers">Strong Beers</option>
        </select>
      </form>
    </div>
  );
}
