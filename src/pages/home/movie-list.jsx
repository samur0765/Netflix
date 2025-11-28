import React, { useEffect, useState } from "react";
import api from "../../utils/api";
import { baseImgUrl } from "../../utils/constans";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

const MovieList = ({ genre }) => {
  const [movies, setMovie] = useState();

  useEffect(() => {
    const params = {
      with_genres: genre.id,
      language: "tr",
      region: "TUR",
    };
    api
      .get("/discover/movie", { params })
      .then((res) => setMovie(res.data.results));
  }, []);
  return (
    <div className="my-10">
      <h1 className="text-3xl font-semibold mb-3">{genre.name}</h1>

      <Splide
        options={{
          autoWidth: true,
          gap: "20px",
          pagination: false,
          type: "loop",
        }}
      >
        {movies?.map((movie, key) => (
          <SplideSlide key={key}>
            <Link to={`/movie/${movie.id}`}>
              <img
                src={`${baseImgUrl}${movie.poster_path}`}
                alt=""
                className="max-w-[300px] max-h-[400px] cursor-pointer rounded transition hover:scale-[1.01]"
              />
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default MovieList;
