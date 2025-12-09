import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import tmdb from "../api/tmbd";
import type { MoviesData } from "../components/Movies";
import Card from "../components/Card";
import type { ReactFormState } from "react-dom/client";

function Search() {
  const [input, setInput] = useState<string>("");
  const [giveData, setGivenData] = useState<string>("");
  const [searchValue, setSearchValue] = useState<MoviesData[]>([]);

  const findData = async () => {
    const res = await tmdb.get(`/search/movie?query=${giveData}&page=1`);
    console.log(res);
    setSearchValue(res.data.results);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setGivenData(input);
  };

  useEffect(() => {
    findData();
  }, [giveData]);

  return (
    <>
      <div className="h-screen bg-slate-950">
        <Nav />
        <div className="flex justify-center w-full pt-24">
          <form action="" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-[500px] text-xl font-medium px-4 border-none rounded-full focus:outline-none py-2"
            />
            <button className="" type="submit">
              search
            </button>
          </form>
        </div>
        <div className="container grid grid-cols-8">
          {searchValue.map((data, index) => (
            <Card key={index} item={data} />
          ))}
        </div>
      </div>
    </>
  );
}
export default Search;
