import React from "react"

function Search({ search, onSearchChange }) {
    console.log(search)
  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search..."
      />
    </div>
  )
}

export default Search
