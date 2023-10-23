import React from "react";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductsCategory from "./pages/ProductsCategory";
import ProductDetails from "./pages/ProductDetails";
import Search from "./pages/Search";
import About from "./pages/About";
import Contact from "./pages/Contact";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Layout
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/",
        element: <Products />,
      },
      {
        path: "products/category/:id",
        element: <ProductsCategory />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
