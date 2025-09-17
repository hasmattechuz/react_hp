import { NavLink } from "react-router-dom"; // ✅ use react-router-dom in Remix

const Navbar = () => {
  return (
    <header className="fixed top-3 right-3 flex gap-2 z-20 p-4 justify-center bg-white w-fit rounded-3xl">
      <div className="w-full text-left grid gap-y-3">
        <NavLink
          to="/colorplatter"
          className={({ isActive }) =>
            `${isActive ? "bg-blue-600" : "bg-blue-300"} cursor-pointer min-w-[140px] text-white rounded-4xl py-2 px-4`
          }
        >
          Color Platter
        </NavLink>
        <NavLink
          to="/password"
          className={({ isActive }) =>
            `${isActive ? "bg-blue-600" : "bg-blue-300"} cursor-pointer min-w-[140px] text-white rounded-4xl py-2 px-4`
          }
        >
          Password Generator
        </NavLink>
        <NavLink
          to="/converter"
          className={({ isActive }) =>
            `${isActive ? "bg-blue-600" : "bg-blue-300"} cursor-pointer min-w-[140px] text-white rounded-4xl py-2 px-4`
          }
        >
          Currency Converter
        </NavLink>
        {/* ✅ New Login / Signup links */}
        <NavLink
          to="/login"
          className={({ isActive }) =>
            `${isActive ? "bg-green-600" : "bg-green-400"} cursor-pointer min-w-[140px] text-white rounded-4xl py-2 px-4`
          }
        >
          Login
        </NavLink>
        <NavLink
          to="/signup"
          className={({ isActive }) =>
            `${isActive ? "bg-purple-600" : "bg-purple-400"} cursor-pointer min-w-[140px] text-white rounded-4xl py-2 px-4`
          }
        >
          Signup
        </NavLink>
      </div>
    </header>
  );
};

export default Navbar;
