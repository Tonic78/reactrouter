import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function MoviePage() {
  const [movie, set_Movie] = useState("");

  const location = useParams();
  // console.log("WHAT IS USEPARAMS:", location);

  const search = async () => {
    const specific_movie = `http://www.omdbapi.com/?i=${location.id}&apikey=b858b4f4`;
    const response = await axios.get(specific_movie);
    // console.log("WHAT IS MY SEARCH RESULT:", response.data);

    set_Movie(response.data);
  };

  useEffect(() => {
    search();
  }, []);

  return (
    <div>
      <p>{movie.Title}</p>
      <img src={movie.Poster} />
    </div>
  );
}
