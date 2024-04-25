import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import AllTouristSpot from "../pages/AllTouristSpot";
import AddTouristsSpot from "../pages/AddTouristsSpot";
import MyList from "../pages/MyList";
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
        },
        {
            path: "/add-tourist-spot",
            element: <AddTouristsSpot></AddTouristsSpot>,
        },
        {
            path: "/my-list",
            element: <MyList></MyList>,
        },
      ],
    },
  ]);

export default router