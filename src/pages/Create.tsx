import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import axios from "axios";
import { useEffect, useState } from "react";

function Create() {
  const [username, setUsername] = useState<string>("");
  const [Password, setPassword] = useState<string>("");
  const [cPassword, setCPassword] = useState<string>("");
  const [validation, setValidation] = useState<string>("");
  const [errorVisible, setErrorVisible] = useState<boolean>(false);

  const sendData = async () => {
    try {
      const respond = await axios.post(
        "http://192.168.101.4:8080/api/auth/register",
        {
          username: username,
          password: Password,
        }
      );
      setUsername(respond.data);

      console.log(respond);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cPassword !== Password) {
      setValidation("password not match");
      setErrorVisible(true);
    }

    sendData();
    console.log(username);
  };

  return (
    <div className="relative w-full bg-cover bg-center h-screen bg-[url('../../background.webp')]">
      <Nav />
      <div className="absolute z-20 w-full h-full bg-black/55"></div>
      <div className="flex justify-center w-full pt-40 ">
        <div className="p-5 w-[600px] bg-black/80 z-50">
          <p className="px-20 py-10 text-3xl font-medium text-white">Sign Up</p>
          <form
            className="flex flex-col gap-8 px-20 "
            action="
            "
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder=" Enter email or phone"
              onChange={(e) => setUsername(e.target.value)}
              className="p-2 font-medium border-none rounded-lg text-white/60 none bg-gray-800/50"
            />
            <input
              type="text"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 font-medium border-none rounded-lg text-white/60 none bg-gray-800/50"
            />
            <input
              type="text"
              placeholder="confirm Password"
              onChange={(e) => setCPassword(e.target.value)}
              className="p-2 font-medium border-none rounded-lg text-white/60 none bg-gray-800/50"
            />
            {errorVisible ? (
              <p className="text-xs text-red-700"> {validation}</p>
            ) : (
              ""
            )}
            <button
              type="submit"
              className="w-full p-2 font-medium text-white bg-red-700 border-none rounded-lg"
            >
              Create Account
            </button>
            <p className="py-10 text-[18px] text-white/45">
              Already have account
              <Link to="/login" className="pl-2 text-xl font-medium text-white">
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Create;
