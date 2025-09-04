import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <header className="fixed top-3 right-3 flex gap-2 z-20 p-4 justify-center bg-white w-fit rounded-3xl">
      <div className="w-full text-left grid gap-y-3">
        <NavLink
          to="/color-platter/"
          className={({ isActive }) =>
            `${isActive ? "bg-blue-600" : "bg-blue-300"} cursor-pointer min-w-[100px] text-white rounded-4xl py-2 px-4`
          }
        >
          Color Platter
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${isActive ? "bg-blue-600" : "bg-blue-300"} cursor-pointer min-w-[100px] text-white rounded-4xl py-2 px-4`
          }
          to="/password"
        >
          Password Generator
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${isActive ? "bg-blue-600" : "bg-blue-300"} cursor-pointer min-w-[100px] text-white rounded-4xl py-2 px-4`
          }
          to="/converter"
        >
          Currency Converter
        </NavLink>
      </div>
    </header>
  );
};

export default Navbar;
