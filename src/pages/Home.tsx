import Nav from "../components/Nav";
import Movies from "../components/Movies";

function Home() {
  return (
    <>
      <div className="relative h-screen bg-slate-950">
        <Nav />
        <Movies />
      </div>
    </>
  );
}
export default Home;
