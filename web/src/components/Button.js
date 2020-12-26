import React from "react"

const turquoiseClasses =
  "bg-transparent hover:bg-starship hover:text-blue border-starship  text-starship"
const starshipClasses =
  "bg-transparent hover:bg-blue hover:text-starship border-blue  text-blue"

const Button = ({ text, color }) => {
  return (
    <button
      className={`
      ${color === "starship" ? starshipClasses : turquoiseClasses}
      mx-auto rounded-full border-2 font-bold px-5 transition text-center uppercase py-2 mb-2 text-base`}
    >
      {text}
    </button>
  )
}

export default Button
