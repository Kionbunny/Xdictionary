import React, { useState } from "react";

function XDictionary() {
  // Initialize the dictionary state
  const dictionary = [
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ];

  // State to hold the user's search input and the search result
  const [searchInput, setSearchInput] = useState("");
  const [definition, setDefinition] = useState("");

  // Search function to handle the search process
  const handleSearch = () => {
    // Check if the word exists in the dictionary
    const result = dictionary.find(
      (entry) => entry.word.toLowerCase() === searchInput.toLowerCase()
    );
    // Update the definition state
    if (result) {
      setDefinition(result.meaning);
    } else {
      setDefinition("Word not found in the dictionary.");
    }
  };

  return (
    <div style={{ fontFamily: "Arial", maxWidth: "400px", margin: "0 auto" }}>
      <h1>Dictionary App</h1>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Search for a word..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          style={{ width: "70%", padding: "5px" }}
        />
        <button
          onClick={handleSearch}
          style={{
            padding: "5px 10px",
            marginLeft: "5px",
            backgroundColor: "#white",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Search
        </button>
      </div>
      <p>
        <strong>Definition:</strong> {definition}
      </p>
    </div>
  );
}

export default XDictionary;
