import { createBrowserRouter } from "react-router-dom";
import LayOut from "./LayOut";
import Home from "../pages/Home";
import NewCar from "../pages/NewCar";
import AddCar from "../pages/AddCar";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/newCar",
        element: <NewCar/>,
      },
      {
        path:'/addCar',
        element:<AddCar/>
      },
    ],
  },
]);
