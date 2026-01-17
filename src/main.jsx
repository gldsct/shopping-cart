import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { HomePage } from "./components/HomePage/HomePage.jsx";
import { Shop } from "./components/Shop/Shop.jsx";
import { Cart } from "./components/Cart/Cart.jsx";
import { ErrorPage } from "./components/ErrorPage/ErrorPage.jsx";
import App from "./App.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "shop",
        element: <Shop />
      },
      {
        path: "cart",
        element: <Cart />
      }
    ],
    errorElement: <ErrorPage />
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
);
