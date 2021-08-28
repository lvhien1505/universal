import React from "react";
import { useHistory } from "react-router-dom";

const Folder = ({ name, path }) => {
  let history = useHistory();
  const onDBClickFolder = () => {
    history.push(path);
  };
  return (
    <div
      className="h-16 w-16 flex flex-col justify-center items-center hover:bg-purple-50 cursor-pointer z-10"
      onDoubleClick={onDBClickFolder}
    >
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M3 21a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2H20a1 1 0 0 1 1 1v3H4v9.996L6 11h16.5l-2.31 9.243a1 1 0 0 1-.97.757H3z"
            fill="rgba(241,196,14,1)"
          />
        </svg>
      </span>
      <span className="text-sm">{name}</span>
    </div>
  );
};

export default Folder;
