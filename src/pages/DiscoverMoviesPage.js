import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function DiscoverMoviesPage() {
  const [searchText, set_searchText] = useState("");

  const [searchStatus, set_searchStatus] = useState("Idle");
  // console.log("WHAT IS THE SEARCHSTATUS", searchStatus);

  const [movieList, set_movieList] = useState([]);
  console.log("WHAT IS MY MOVIELIST STATE:", movieList);

  const search = async () => {
    // console.log("Start searching for:", searchText);

    set_searchStatus("searching");

    // Best practice: encode the string so that special characters
    //  like '&' and '?' don't accidentally mess up the URL
    const queryParam = encodeURIComponent(searchText);

    const response = await axios.get(
      `https://omdbapi.com/?apikey=b858b4f4&s=${queryParam}`
    );
    // console.log("WHAT IS MY SEARCH RESULT:", response.data);

    // const responseResult =
    //   Error === "Movie not found!"
    //     ? set_searchStatus("Oops, something went wrong")
    //     : set_searchStatus("Done");

    set_movieList(response.data.Search);
  };

  const page = movieList.map(movie => {
    return (
      <div>
        <p>
          <Link to={`/moviepage/${movie.imdbID}`}>
            {movie.Title} {movie.Year}
          </Link>
        </p>
        <p>
          <img src={movie.Poster} alt="" />
        </p>
      </div>
    );
  });

  return (
    <div>
      <h1>Discover some movies!</h1>
      <p>
        <input
          value={searchText}
          onChange={event => set_searchText(event.target.value)}
        />
        <button onClick={search}>Search</button>
      </p>
      <p>{searchStatus}</p>
      {page}
    </div>
  );
}
