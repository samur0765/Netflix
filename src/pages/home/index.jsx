import React, { useEffect, useState } from "react";
import Hero from "./hero";
import api from "../../utils/api";
import Loader from "../../components/loader";
import MovieList from "./movie-list";

const Home = () => {
  const [genres, setGenres] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    api
      .get("/genre/movie/list?language=tr")
      .then((res) => setGenres(res.data.genres))
      .catch((err) => setError(err));
  }, []);
  return (
    <div>
      <Hero />

      {error ? (
        <Error message={error} />
      ) : !genres ? (
        <Loader />
      ) : (
        genres.map((genre) => <MovieList key={genre.id} genre={genre} />)
      )}
    </div>
  );
};

export default Home;
