import React from "react";

const Container = ({ children }) => {
  return (
    <div className="md:container px-5 py-8 md:px-8 md:py-16 lg:px-16 lg:py-24 mx-auto">
      {children}
    </div>
  );
};

export default Container;
