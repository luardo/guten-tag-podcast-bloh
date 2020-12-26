import React from "react";

import Header from "./header";

const Container = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-lavender">
      <div className="container px-4 md:px-0 max-w-6xl mx-auto">{children}</div>
    </div>
  );
};

export default Container;
