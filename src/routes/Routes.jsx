import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import AllTouristSpot from "../pages/AllTouristSpot";
import AddTouristsSpot from "../pages/AddTouristsSpot";
import SingleTouristsSpot from "../pages/SingleTouristsSpot";
import MyListUpdate from "../pages/MyListUpdate";
import MyList from "../pages/MyList";
import Register from "../pages/Register";
import Login from "../pages/Login";
import UpdateProfile from "../pages/UpdateProfile";
import ErrorPage from "../ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";

import CountryName from "../countryComponents/CountryName";
import CountryTourist from "../countryComponents/CountryTourist";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: () => fetch('https://tourism-server-site-blond.vercel.app/countryname')
        },
        {
            path: "/all-tourist-spot",
            element: <AllTouristSpot></AllTouristSpot>,
            loader: () => fetch('https://tourism-server-site-blond.vercel.app/tourist-spot')
        },
        {
          path: "/all-tourist-spot/:id",
          element: <PrivateRoute><SingleTouristsSpot></SingleTouristsSpot></PrivateRoute> ,
          loader: ({params}) => fetch(`https://tourism-server-site-blond.vercel.app/tourist-spot/${params.id}`)
        },
        {
            path: "/add-tourist-spot",
            element: <PrivateRoute><AddTouristsSpot></AddTouristsSpot></PrivateRoute> ,
        },
        {
          path: "/update-tourist-spot/:id",
          element: <PrivateRoute><MyListUpdate></MyListUpdate></PrivateRoute> ,
          loader: ({params}) => fetch(`https://tourism-server-site-blond.vercel.app/tourist-spot/${params.id}`)
        },
        {
            path: "/my-list",
            element: <PrivateRoute><MyList></MyList></PrivateRoute>,
            // loader: ({params}) => fetch(`https://tourism-server-site-blond.vercel.app/user/${params.id}/tourist-spot`)
        },
        
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/update-profile",
          element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>,
        },
        {
          path: "/country-name",
          element: <CountryName></CountryName>,
        },
        {
          path: "/country-tourist-name/:name",
          element: <CountryTourist></CountryTourist>,
          loader: ({params})=> fetch(`https://tourism-server-site-blond.vercel.app/tourist-spot/country/${params.name}`)
          
        },
      ],
    },
  ]);

export default router