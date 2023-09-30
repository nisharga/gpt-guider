import { useContext, useState } from "react";
import { IoIosClose } from "react-icons/io";
import { RiMenu2Fill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import LoadingButton from './../../assets/Other/LoadingButton';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  // user from context
  const { logOut, user, loading} = useContext(AuthContext);
  return (
    <nav className="z-[60] sticky top-0 p-4 text-white bg-[#07091E] ">
      <div className="container mx-auto p-1 relative">
        <div className="md:flex md:justify-between md:items-center">
          {/* first part */}
          <div className="flex items-center">
            <RiMenu2Fill
              onClick={() => setOpen(!open)}
              className="me-3 lg:hidden cursor-pointer  text-4xl text-primary"
            />
            <div className="mx-auto">
              <Link to="/">
              <img
                src="https://i.ibb.co/j4DCXgn/Frame.png"
                alt="logo"
                className="w-[128px] h-[32px]"
              />
              </Link>
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
<<<<<<< HEAD
          {/* third part space-x-4 hidden md:block */}
          <div className="hidden md:flex space-x-4"> 
            <div className="text-lg font-bold mt-2 uppercase">{user?.displayName}</div>
            <div className="text-lg font-bold mt-2 uppercase">{user?.displayName === null && 'anonymous'}</div>
             <div>
                {/* conditioning outLout and SignIn button*/}
                {user ? 
                <button
                onClick={() => logOut()} 
                className="transition-all delay-100 duration-300 font-semibold text-white px-8 py-2 rounded-full bg-gradient-to-r from-[#00B6BD] to-[#ACFFAD]"> { loading && <LoadingButton/>} Log Out</button> : 
                <Link to='/signin' className="transition-all delay-100 duration-300 font-semibold text-white px-8 py-2 rounded-full bg-gradient-to-r from-[#00B6BD] to-[#ACFFAD]">
                  { loading && <LoadingButton/>} Signin
                </Link>
                }
                {/* conditioning outLout and SignIn button*/}
             </div>
=======
          {/* third part */}
          <div className="hidden md:block">
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-r from-[#00B6BD] to-[#ACFFAD] rounded-full p-[1px] ">
                <div className="bg-[#07091E] rounded-full">
                  <button className="transition-all delay-100 duration-300 font-semibold text-white px-8 py-2 rounded-full ">
                    Signin
                  </button>
                </div>
              </div>
              <div>
                <button className="transition-all delay-100 duration-300 font-semibold text-white px-8 py-2 rounded-full bg-gradient-to-r from-[#00B6BD] to-[#ACFFAD]">
                  Signup
                </button>
              </div>
            </div>
>>>>>>> 9f64a950d6e82529d98e97ade3066dbef661c1b4
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
              {user && <div className="text-md font-bold uppercase">{user?.displayName}</div>}
              {/* conditioning outLout and SignIn button*/}
            {user ? 
            <button
            onClick={() => logOut()} 
            className="transition-all delay-100 duration-300 font-semibold text-white px-8 py-2 rounded-full bg-gradient-to-r from-[#00B6BD] to-[#ACFFAD]"> { loading && <LoadingButton/>} Log Out</button> : 
            <Link to='/signin' className="transition-all delay-100 duration-300 font-semibold text-white px-8 py-2 rounded-full bg-gradient-to-r from-[#00B6BD] to-[#ACFFAD]">
              { loading && <LoadingButton/>} Signin
            </Link>
            }

            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header