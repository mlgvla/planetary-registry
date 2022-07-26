import React, { useState } from "react"
// import { v4 as uuid } from "uuid"

function NewPlanetForm({ onAddNewPlanet }) {
  const [formData, setFormData] = useState({
    name: "",
    climate: "",
    terrain: "",
    population: "",
  })

  function handleFormInputs(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch("http://localhost:8085/planets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())``
      .then((newPlanet) => {
        onAddNewPlanet(newPlanet)
        setFormData({
          name: "",
          climate: "",
          terrain: "",
          population: "",
        })
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleFormInputs}
      />
      <input
        type="text"
        name="climate"
        placeholder="Climate"
        value={formData.climate}
        onChange={handleFormInputs}
      />
      <input
        type="text"
        name="terrain"
        placeholder="Terrain"
        value={formData.terrain}
        onChange={handleFormInputs}
      />
      <input
        type="text"
        name="population"
        placeholder="Population"
        value={formData.population}
        onChange={handleFormInputs}
      />
      <input type="submit" value="Add" />
    </form>
  )
}

export default NewPlanetForm
