import React, { useState, useEffect } from "react";
import BeerList from "./components/BeerList/BeerList";
import fire from "./Firebase";
import Login from "./components/LoginPage/Login";
import Navbar from "./components/Header/Navbar";
import { fetchBeerList } from "./services/api";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const [beerList, setBeerList] = useState([]);
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getBeers = async () => {
      await fetchBeerList().then(({ data }) => {
        setBeerList(data);
      });
    };
    getBeers();
  }, []);

  const handleClickSearch = (e) => {
    e.preventDefault();
    fetch(`https://api.punkapi.com/v2/beers?beer_name=${query}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setBeerList(data);
        } else {
          setBeerList([]);
        }
      });
  };

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.code);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
          default:
        }
      });
  };

  const handleSignUp = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.code);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
          default:
        }
      });
  };

  const handleLogOut = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  });

  return (
    <div>
      <Router>
        {user ? (
          <>
            <Route exact path="/">
              <Navbar
                handleLogOut={handleLogOut}
                handleClickSearch={handleClickSearch}
                query={query}
                onChange={onChange}
              />
              <BeerList beerList={beerList} />
            </Route>
          </>
        ) : (
          <Login
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleLogin={handleLogin}
            handleSignUp={handleSignUp}
            hasAccount={hasAccount}
            setHasAccount={setHasAccount}
            emailError={emailError}
            passwordError={passwordError}
          />
        )}
      </Router>
    </div>
  );
}

export default App;
