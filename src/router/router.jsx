import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import HomePage from "../Pages/HomePage/HomePage";
import SignIn from "../Pages/SignIn/SignIn";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: (
             <HomePage/>
          ),
        },
        {
          path: "/signin",
          element: (
             <SignIn/>
          ),
        }  
      ],
    },
  ]);
  