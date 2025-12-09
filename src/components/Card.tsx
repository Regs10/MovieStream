import React from "react";
import { imgPath } from "../api/tmbd";
import type { MoviesData } from "./Movies";

function Card({
  item: { poster_path, title, release_date, vote_average, id },
  handleBoxClick,
}: {
  item: MoviesData;
  handleBoxClick?: Function;
}) {
  return (
    <div
      onClick={() => {
        handleBoxClick(id);
      }}
      className="p-2 bg-gray-900/70 rounded-xl"
    >
      <div className="w-40 h-56 overflow-hidden rounded-md ">
        <img
          src={imgPath + poster_path}
          alt=""
          className="object-cover w-full h-full "
        />
      </div>
      <div className="">
        <p className="font-semibold text-white/80 line-clamp-1">{title}</p>
        <div>
          <div className="flex items-center justify-between text-gray-500">
            <p>{new Date(release_date).getFullYear()}</p>
            <p className="px-1 text-xs border border-slate-300/40 ">
              {" "}
              {Number(vote_average).toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
