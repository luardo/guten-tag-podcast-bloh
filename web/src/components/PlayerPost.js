import React from "react"
import Spotify from '../images/spotify.svg'
import Applepodcast from '../images/applepodcast.svg';
import Button from '../components/Button';

const PlayerPost = () => {
  return (
    <div className="flex  bg-bottom  bg-blue p-5 items-center">
      <div className="">
        <img
          src="https://source.unsplash.com/collection/496241/600x600"
          alt="xxx"
        />
      </div>
      <div className="px-5">
        <p className=" text-xl  text-fourth">Episodio 5:</p>
        <h3 className="text-starship font-bold text-2xl md:text-5xl leading-none">
          No te mudes a Berlin si no te gusta el frío
        </h3>
        <p className="text-white py-3">Escuchanos en cualquier plataforma:</p>
        <div className="flex pb-10">
          <img src={Spotify} className="pr-3" />
          <img src={Applepodcast} />
        </div>
        <Button text="Más detalles" />

      </div>
    </div>
  )
}

export default PlayerPost;
