import React from "react"

import PlayerPost from "./PlayerPost";

const Hero = ({siteTitle, post}) => {
  return (
    <div className="w-full m-0 p-0 bg-turquoise">
      <div className="container mx-auto lg:p-16 md:pt-5 sm:px-0 break-normal">
          <div className="mx-auto text-center p-10">
              <h1 className="text-5xl leading-none md:leading-snug md:text-6xl font-bold text-starship">{siteTitle}</h1>
              <h2 className="text-2xl md:text-2xl font-light text-starship">Sobreviviendo en Berlin</h2>
          </div>
        <PlayerPost {...post} />
      </div>
    </div>
  )
}

export default Hero
