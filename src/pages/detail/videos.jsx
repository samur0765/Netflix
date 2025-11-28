import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
import ReactPlayer from "react-player";

const Videos = ({ videos }) => {
  const isRender = videos && videos.length > 0;

  const videoBaseUrl = "https://www.youtube.com/watch?v=";

  return isRender ? (
    <div>
      <h2 className="font-semibold text-lg md:text-xl my-5">Fragmanlar</h2>
      <Splide options={{ pagination: false }}>
        {videos.map((video) => (
          <SplideSlide>
            <ReactPlayer
              url={videoBaseUrl + video.key}
              width="100%"
              height="400px"
              controls
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  ) : (
    <div className="text-center mb-10 text-zinc-400">Fragmanlar Bulunamadı</div>
  );
};

export default Videos;
