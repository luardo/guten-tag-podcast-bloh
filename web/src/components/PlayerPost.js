import React from "react";
import Spotify from "../images/spotify.svg";
import Applepodcast from "../images/applepodcast.svg";
import Button from "../components/Button";
import ResizableImage from "./ResizableImage";

const PlayerPost = ({ mainImage, slug, title, spotifyLink, applePodcastLink }) => {
  return (
    <div className="flex flex-col md:flex-row bg-bottom  bg-blue p-5 items-center">
      <div className="">
        <ResizableImage mainImage={mainImage} width={600} aspectRatio={1} />
      </div>
      <div className="py-5 md:py-0 md:px-5">
        <p className=" text-xl  text-fourth">Nuevo episodio:</p>
        <h3 className="text-starship font-bold text-2xl md:text-5xl leading-none">{title}</h3>
        <p className="text-white py-3">Escuchanos en cualquier plataforma:</p>
        <div className="flex pb-10">
          {spotifyLink && (
            <a href={spotifyLink} target="_blank">
              <img src={Spotify} className="pr-3" />
            </a>
          )}

          {applePodcastLink && (
            <a href={applePodcastLink} target="_blank">
              <img src={Applepodcast} />
            </a>
          )}
        </div>
        <div class="text-left">
          <Button text="Más detalles" />
        </div>
      </div>
    </div>
  );
};

export default PlayerPost;
