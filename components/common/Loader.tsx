import React, { useState, useEffect } from "react";

const Loader: React.FC = () => {
  return (
    <div className="h-screen w-full bg-slate-800">
        <div className="loader">
      <div className="box1"></div>
      <div className="box2"></div>
      <div className="box3"></div>
    </div>
    </div>
  );
};

export default Loader;
