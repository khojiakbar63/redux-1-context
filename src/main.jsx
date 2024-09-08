import { createRoot } from "react-dom/client";
import { AppRouter } from "./router";
import { RouterProvider } from "react-router-dom";
import {store} from "./redux/redux.config";
import {Provider } from 'react-redux'
import "./index.css";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={AppRouter} />
  </Provider>
);
