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

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
            path: "/all-tourist-spot",
            element: <AllTouristSpot></AllTouristSpot>,
            loader: () => fetch('http://localhost:5555/tourist-spot')
        },
        {
          path: "/all-tourist-spot/:id",
          element: <SingleTouristsSpot></SingleTouristsSpot>,
          loader: ({params}) => fetch(`http://localhost:5555/tourist-spot/${params.id}`)
        },
        {
            path: "/add-tourist-spot",
            element: <AddTouristsSpot></AddTouristsSpot>,
        },
        {
          path: "/update-tourist-spot",
          element: <MyListUpdate></MyListUpdate>,
        },
        {
            path: "/my-list",
            element: <MyList></MyList>,
            loader: ({params}) => fetch(`http://localhost:5555/user/${params.id}/tourist-spot`)
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
          element: <UpdateProfile></UpdateProfile>,
        },
      ],
    },
  ]);

export default router