import React, { useState, useEffect } from "react";
import BeerList from "./components/BeerList";
import RandomBeer from "./components/RandomBeer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./css/Main.css";
import { fetchBeerList, fetchRandomBeer } from "./services/api";

import SortBy from "./components/SortBy";

function App() {
  const [beerList, setBeerList] = useState([]);
  const [sortBeers, setSortBeers] = useState([]);
  const [sortByTerm, setSortByTerm] = useState("Light Beers");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [random, setRandom] = useState([]);

  useEffect(() => {
    const getBeers = async () => {
      await fetchBeerList().then(({ data }) => {
        setBeerList(data);
      });
    };
    getBeers();
  }, []);

  const getRandomBeer = (e) => {
    e.preventDefault();
    fetchRandomBeer().then(({ data }) => {
      setRandom(data);
    });
  };

  const onSortBy = (e) => {
    let option = e.target.value;
    let sortedBeers = beerList.sort((a, b) => {
      return option === "Strong Beers"
        ? a.abv > b.abv
          ? -1
          : 1
        : a.abv < b.abv
        ? -1
        : 1;
    });
    setSortBeers(sortedBeers);
    setSortByTerm(option);
  };

  const handleClick = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <ul>
            <Link to="/">
              <h1 style={{ fontSize: "2rem" }}>Lager than life</h1>
            </Link>
            <li>
              <Link to="/random">Random Beer</Link>
            </li>
            <li>
              <Link to="/fav">My Beers</Link>
            </li>
            <SortBy onSortBy={onSortBy} sortByTerm={sortByTerm} />
          </ul>
        </nav>
      </div>
      <Switch>
        <Route exact path="/">
          <BeerList
            beerList={beerList}
            modalIsOpen={modalIsOpen}
            closeModal={closeModal}
            handleClick={handleClick}
            sortBeers={sortBeers}
          />
        </Route>
      </Switch>
      <Switch>
        <Route path="/random">
          <RandomBeer getRandomBeer={getRandomBeer} random={random} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
