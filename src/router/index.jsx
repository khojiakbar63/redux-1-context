import { createBrowserRouter } from "react-router-dom";
import { Home, About, Users, NotFound } from "../pages";
import { App } from "../App";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];

export const AppRouter = createBrowserRouter(routes);
