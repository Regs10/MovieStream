import Nav from "../components/Nav";
import Create from "./Create";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="relative w-full bg-cover bg-center h-screen bg-[url('../../background.webp')]">
      <Nav />
      <div className="absolute z-20 w-full h-full bg-black/55"></div>
      <div className="flex justify-center w-full pt-40 ">
        <div className="p-5 w-[600px] bg-black/80 z-50">
          <p className="px-20 py-10 text-3xl font-medium text-white">sign in</p>
          <form
            className="flex flex-col gap-8 px-20 "
            action="
            "
          >
            <input
              type="text"
              placeholder=" Enter email or phone"
              className="p-2 font-medium border-none rounded-lg text-white/60 none bg-gray-800/50"
            />
            <input
              type="text"
              placeholder="Password"
              className="p-2 font-medium border-none rounded-lg text-white/60 none bg-gray-800/50"
            />
            <button className="w-full p-2 font-medium text-white bg-red-700 border-none rounded-lg">
              sign in
            </button>
            <p className="py-10 text-[16px]  text-white/45">
              new to Vision box ?
              <Link
                to="/create"
                className="pl-2 text-xl font-medium text-white"
              >
                Sign Up Now
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;
