import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="h-16 shrink-0 border-b border-slate-200 bg-white px-4 shadow-sm">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between">
        <NavLink to="/" className="text-xl font-bold text-indigo-600">
          MyPaste
        </NavLink>

        <div className="flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm font-medium transition ${isActive ? "text-indigo-600" : "text-slate-600 hover:text-indigo-600"}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/pastes"
            className={({ isActive }) =>
              `text-sm font-medium transition ${isActive ? "text-indigo-600" : "text-slate-600 hover:text-indigo-600"}`
            }
          >
            Pastes
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
