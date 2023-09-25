import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { RiMenu2Fill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  return (
    <nav className="z-[11] sticky top-0 p-4 shadow-xl bg-white">
      <div className="container mx-auto p-1 relative">
        <div className="md:flex md:justify-between md:items-center bg-white">
          {/* first part */}
          <div className="flex items-center">
            <RiMenu2Fill
              onClick={() => setOpen(!open)}
              className="me-3 lg:hidden cursor-pointer  text-4xl text-primary"
            />
            <div className="mx-auto">
              <img
                src="https://i.ibb.co/j4DCXgn/Frame.png"
                alt="logo"
                className="w-[128px] h-[32px]"
              />
            </div>
          </div>
          {/* second part */}
          <ul className="hidden lg:flex font-semibold space-x-10">
            <li className="hover:text-primary cursor-pointer transition-all delay-100 duration-300">
              <span>
                <NavLink to={"/home"}>Home</NavLink>
              </span>
            </li>
            <li className="hover:text-primary cursor-pointer transition-all delay-100 duration-300">
              <span>
                <NavLink to={"/"}>Features</NavLink>
              </span>
            </li>
            <li className="hover:text-primary cursor-pointer transition-all delay-100 duration-300">
              <span>
                <NavLink to={"/"}>Pricing </NavLink>
              </span>
            </li>
            <li className="hover:text-primary cursor-pointer transition-all delay-100 duration-300">
              <span>
                <NavLink to={"/"}>About us</NavLink>
              </span>
            </li>
          </ul>
          {/* third part */}
          <div className="space-x-4 hidden md:block">
            <button className="transition-all delay-100 duration-300 font-semibold text-white px-8 py-2 rounded-full bg-gradient-to-r from-[#00B6BD] to-[#ACFFAD]">
              Signin
            </button>
            <button className="transition-all delay-100 duration-300 font-semibold text-white px-8 py-2 rounded-full bg-gradient-to-r from-[#00B6BD] to-[#ACFFAD]">
              Signup
            </button>
          </div>
        </div>
        {/* mobile navbar */}
        <div
          className={`lg:hidden bg-[#001356] text-white w-[280px] md:w-[260px] h-screen absolute ${open
            ? "-top-2 -left-2 transition-all duration-700 "
            : "top-0 -left-full transition-all duration-1000 delay-300"
            }`}
        >
          <div className="bg-white p-[17px] flex justify-between items-center">
            <span className="cursor-pointer">
              <img
                src="https://i.ibb.co/j4DCXgn/Frame.png"
                alt="logo"
                className="h-7"
              />
            </span>
            <IoIosClose
              className="text-3xl text-[#001356] font-bold cursor-pointer transition-all duration-200"
              onClick={() => setOpen(!open)}
            />
          </div>
          <ul className="space-y-3 text-sm cursor-pointer">
            <li
              className=""
              style={{ borderBottom: "1px solid #F8908B" }}
            >
              <div
                onClick={() => setSubmenuOpen(!submenuOpen)}
                className="p-3"
              >
                <NavLink to={"/home"}>Home</NavLink>
              </div>
              {/* submenu */}
            </li>
            <li
              style={{ borderBottom: "1px solid #F8908B" }}
              className="p-3"
            >
              <NavLink to={"/"}>Features</NavLink>
            </li>
            <li
              style={{ borderBottom: "1px solid #F8908B" }}
              className="p-3"
            >
              <NavLink to={"/"}>Pricing </NavLink>
            </li>
            <li
              style={{ borderBottom: "1px solid #F8908B" }}
              className="p-3"
            >
              <NavLink to={"/"}>About us</NavLink>
            </li>
            <li
              style={{ borderBottom: "1px solid #F8908B" }}
              className="flex justify-between items-center p-3"
            >
              <NavLink to={"/"}> <span className="text-white px-2 py-1 rounded-md text-semibold">Signin / Signup</span> </NavLink>

            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header