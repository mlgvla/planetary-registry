import React from "react"
import Planet from "./Planet"

function PlanetList({planets, onTableSort}) {

    const planetList = planets.map(planet => <Planet key={planet.id} planet={planet}/>)
    return(
        <table>
            <tbody>
                <tr>
                    <th onClick={() => onTableSort("name")}>Name</th>
                    <th onClick={() => onTableSort("climate")}>Climate</th>
                    <th onClick={() => onTableSort("terrain")}>Terrain</th>
                    <th>Population</th>
                </tr>
                {planetList}
            </tbody>
        </table>
    );
}

export default PlanetList;