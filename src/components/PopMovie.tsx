import { useEffect, useState } from "react";
import tmdb, { imgPath } from "../api/tmbd";
import type { MoviesData } from "./Movies";

function PopMovie({
  handleBoxClick,
  id,
}: {
  handleBoxClick: Function;
  id: number;
}) {
  const [loading, setLoading] = useState(true);
  const [selectedMovie, setSelectedMovie] = useState<MoviesData>();
  const getMovieDetails = async () => {
    setLoading(true);
    try {
      const res = await tmdb.get(`/movie/${id}`);
      setSelectedMovie(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
    console.log(loading);
  };
  useEffect(() => {
    getMovieDetails();
  }, [id]);

  return (
    <div
      className="absolute top-0 left-0 z-0 flex w-full gap-6 bg-center bg-cover h-3/4"
      style={{
        backgroundImage: `url('${imgPath + selectedMovie?.backdrop_path}')`,
      }}
      onClick={() => handleBoxClick(id)}
    >
      <div className="absolute top-0 left-0 inset-0 z-20 bg-[radial-gradient(circle,rgba(250,250,250,0)_0%,rgba(0,0,0,1)_100%)]"></div>
      <div className="container z-30 flex flex-col justify-center flex-1 text-white">
        <h1 className="mb-2 text-6xl font-bold">{selectedMovie?.title}</h1>
        <p className="text-sm w-[650px]">{selectedMovie?.overview}</p>

        <div className="">
          <div className="flex gap-2 py-6">
            {selectedMovie &&
              selectedMovie.genres.map((gen, index) => (
                <div
                  className="font-medium bg-slate-600/30 rounded-md px-2 py-0.5"
                  key={index}
                >
                  {gen.name}
                </div>
              ))}
          </div>
          <div>
            <p className="px-12 py-1.5 text-xl bg-purple-700 rounded-full w-fit">
              Play
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopMovie;
