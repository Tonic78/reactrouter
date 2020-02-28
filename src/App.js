import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import DiscoverMoviesPage from "./pages/DiscoverMoviesPage";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import MoviePage from "./pages/MoviePage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/discover" component={DiscoverMoviesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/moviepage/:id" component={MoviePage} />
      </Switch>
    </div>
  );
}

export default App;
