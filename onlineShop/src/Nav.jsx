import { Link, useNavigate } from "react-router-dom";
function Nav() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };
  const auth = localStorage.getItem("user");
  return (
    <nav className="w-full h-12 bg-slate-800 text-white flex gap-10 font-semibold text-xl justify-center items-center px-5 ">
      {auth ? (
        <>
         
          <Link to="/">Products</Link>
          <Link to="/add">Add Products</Link>
          <Link to="/update">Update Products</Link>
          <Link to="/profile">Profile</Link>
          <Link onClick={logout} to="/signup">
            logout ({JSON.parse(auth).name})
          </Link>
        </>
      ) : (
        <div className="w-full h-12 bg-slate-800 text-white flex gap-10 font-semibold text-xl justify-end items-center px-5 ">

          <Link to="/signup">SignUp</Link>
          <Link to="/login">Login</Link>
        </div>
      )}
    </nav>
  );
}

export default Nav;
