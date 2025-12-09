import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="fixed top-0 z-50 w-full ">
      <div className="container flex items-center justify-between">
        <div className="text-2xl font-bold ">
          <span className="text-3xl text-red-600">Vision</span>
          <span className="text-white">Box</span>
        </div>
        <ul className="flex gap-12 text-[18px] font-medium text-white">
          <Link to="/">Home</Link>
          <Link to="/search">Search</Link>
          <Link to="/login">Login</Link>
        </ul>
      </div>
    </div>
  );
}
export default Nav;
