import React from "react";
import { FaSpinner } from "react-icons/fa";

const Loader = () => {
  return (
    <div className="my-10 flex justify-center">
      <FaSpinner className="animate-spin text-3xl text-red-500" />
    </div>
  );
};

export default Loader;
