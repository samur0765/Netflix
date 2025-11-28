import React from "react";

const Error = ({ message }) => {
  return (
    <div className="text-center text-zinc-200 my-10 bg-red-600 p-10 rounded flex items-center justify-center">
      <p>Üzgünüz bir hata oluştu</p>
      <p>{message}</p>
    </div>
  );
};

export default Error;
