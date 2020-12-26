import React from "react"

import PlayerPost from "./PlayerPost";

const Hero = ({siteTitle}) => {
  return (
    <div className="w-full m-0 p-0 bg-turquoise">
      <div className="container mx-auto p-16 md:pt-5 break-normal">
          <div className="mx-auto text-center p-10">
              <h1 className="text-6xl font-bold text-starship">{siteTitle}</h1>
              <h2 className="text-3xl font-light text-starship">Sobreviviendo en Berlin</h2>
          </div>
        <PlayerPost />
      </div>
    </div>
  )
}

export default Hero
