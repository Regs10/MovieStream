import React, { useEffect, useState } from "react";
import tmdb from "../api/tmbd";
import Card from "../components/Card";
import PopMovie from "../components/PopMovie";

export interface Genre {
  id: number;
  name: string;
}

export interface MoviesData {
  title: string;
  release_date: string;
  overview: string;
  poster_path: string;
  vote_average: number;
  star: string;
  backdrop_path: string;
  id: number;
  genres: Genre[];
}

function Movies() {
  const [data, setData] = useState<MoviesData[]>([]);
  const [selectedId, setSelectedId] = useState<number>();

  const getMovie = async () => {
    try {
      const res = await tmdb.get("/discover/movie");
      setData(res.data.results);
      setSelectedId(res.data.results[0].id);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMovie();
  }, []);

  const handleBoxClick = (id: number) => {
    setSelectedId(id);
  };

  return (
    <>
      <div className="absolute bottom-0 left-0 z-10 w-full p-10 ">
        <p>Discover</p>
        <div
          className="flex gap-4 overflow-x-auto hide-scrollbar "
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {data.map((item, index) => (
            <Card key={index} item={item} handleBoxClick={handleBoxClick} />
          ))}
        </div>
      </div>

      {<PopMovie id={selectedId} handleBoxClick={handleBoxClick} />}
    </>
  );
}

export default Movies;
