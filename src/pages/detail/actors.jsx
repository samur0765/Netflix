import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
import { baseImgUrl } from "../../utils/constans";

const Actors = ({ cast }) => {
  //Aktörün fotoğraı varsa onu yoksa varsayılan fotoğrafını  döndüren fonksiyon
  const getPicture = (actor) => {
    return actor.profile_path
      ? baseImgUrl + actor.profile_path
      : actor.gender === 1
      ? "/woman.jpg"
      : actor.gender === 2
      ? "/man.jpg"
      : "/default.webp";
  };
  return (
    <div className="mb-10">
      <h2 className="font-semibold text-lg md:text-xl my-5">Oyuncular</h2>
      <Splide options={{ autoWidth: true, gap: "20px", pagination: false }}>
        {cast.map((actor) => (
          <SplideSlide>
            <div className="w-[160px] h-full flex flex-col">
              <img
                src={getPicture(actor)}
                alt={actor.name}
                className="h-full object-cover rounded"
              />
              <h2 className="text-center font-semibold mt-2 line-clamp-1">
                {actor.name}
              </h2>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Actors;
