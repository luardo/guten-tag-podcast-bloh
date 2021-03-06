import { Link } from "gatsby";
import React from "react";
import Button from "./Button";

const Header = ({ siteTitle }) => (
  <nav className="bg-turquoise">
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div className="relative flex items-center justify-between h-16">
        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-xl font-bold text-starship">
              {" "}
              <Link to="/">{siteTitle}</Link>
            </h1>
          </div>
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-starship text-black px-3 py-2 rounded-md text-sm font-medium"
              >
                Inicio
              </a>
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Todos los Episodios
              </a>
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Colabora
              </a>
            </div>
          </div>
        </div>
        <div className="absolute inset-y-0 right-0  items-center pr-2 hidden sm:flex">
          <Button text="Colabora con nosotros!" />
        </div>
      </div>
    </div>
  </nav>
);

export default Header;
