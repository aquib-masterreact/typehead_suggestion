import "./styles.css";
import React from "react";
import { useState } from "react";

export default function App() {
  const fruits = ["apple", "mango", "banana", "kiwi"];
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const handleChange = (event) => {
    setValue(event.target.value);
    const filteredValue = fruits.filter((fruit) =>
      fruit.toLowerCase().includes(value)
    );
    setSuggestions(filteredValue);
  };

  return (
    <div className="App">
      <h1>Typehead Searchbox</h1>
      <input type="text" value={value} onChange={handleChange} />
      <div className="suggest">
        <div className="box">
          <ul>
            {suggestions.map((suggestion, index) => (
              <li key={index}>{suggestion}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
