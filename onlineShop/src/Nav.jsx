import { Link } from "react-router-dom";
function Nav() {
  const auth = localStorage.getItem("user");
  return (
    <nav className="w-full h-12 bg-slate-800 text-white flex gap-10 font-semibold text-xl justify-center items-center ">
      <Link to="/">Products</Link>
      <Link to="/add">Add Products</Link>
      <Link to="/update">Update Products</Link>
      <Link to="/profile">Profile</Link>
      {auth ? (
        <Link to="/logout">logout</Link>
      ) : (
        <Link to="/signup">SignUp</Link>
      )}
    </nav>
  );
}

export default Nav;
