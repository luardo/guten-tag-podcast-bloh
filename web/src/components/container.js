import React from "react";

import Header from "./header";

const Container = ({ children, color }) => {
  return (
    <div className={`flex flex-col min-h-screen ${!color ? "bg-lavender" : "bg-" + color}`}>
      <div className="container px-4 md:px-0 max-w-6xl mx-auto">{children}</div>
    </div>
  );
};

export default Container;
