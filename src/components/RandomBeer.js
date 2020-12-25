import React from "react";
import "../css/Main.css";
import homer2 from "../images/homer2.png";

export default function RandomBeer({ getRandomBeer, random }) {
  return (
    <div className="random">
      <div className="random_items">
        <div className="discover">
          <h1>Discover your beer!</h1>
          <p>Our beer expert will choose a beer for you. Are you ready?</p>
          <button onClick={getRandomBeer} className="btn">
            Grab a Beer
          </button>
        </div>
        <img alt="beer" src={homer2} className="random_image" />
      </div>
      {random.map((beer, index) => {
        return (
          <div key={index} className="random_products">
            <img
              src={beer.image_url}
              alt={beer.name}
              style={{ height: "380px", width: "120px", padding: "10px 0" }}
            />
            <div className="description">
              <h1>{beer.name}</h1>
              <h5>{beer.tagline}</h5>
              <p>{beer.description}</p>
              <h5>First brewed:{beer.first_brewed}</h5>
              <h3>ABV: {beer.abv} %</h3>
              <h3>IBU: {beer.ibu} %</h3>
              <h3>EBC: {beer.ebc} %</h3>
              <h3>SRM: {beer.srm} %</h3>
              <h3>PH: {beer.ph} %</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}
