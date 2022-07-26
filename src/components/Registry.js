import React, { useEffect, useState } from "react"
import Search from "./Search"
import NewPlanetForm from "./NewPlanetForm"
import PlanetList from "./PlanetList"

function Registry() {
  const [planets, setPlanets] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:8085/planets")
      .then((res) => res.json())
      .then(setPlanets)
  }, [])

  function handleAddPlanet(newPlanet) {
    setPlanets([...planets, newPlanet])
  }
console.log(planets)
  const planetsToDisplay = planets.filter((planet) => {
    return (
      planet.name.toLowerCase().includes(search.toLowerCase()) ||
      planet.climate.toLowerCase().includes(search.toLowerCase()) ||
      planet.terrain.toLowerCase().includes(search.toLowerCase()) ||
      planet.population.toLowerCase().includes(search.toLowerCase())
    )
  })

  return (
    <div className="registry">
      <Search search={search} onSearchChange={setSearch} />
      <div className="content">
        <PlanetList planets={planetsToDisplay} />
        <NewPlanetForm onAddNewPlanet={handleAddPlanet} />
      </div>
    </div>
  )
}

export default Registry
