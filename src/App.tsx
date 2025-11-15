import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Home from "./pages";
import CartPage from "./pages/Cart";
import DetailProduct from "./pages/detailProduct";
import Login from "./pages/Login";
import OrderPage from "./pages/OrderConfirmation";
import Products from "./pages/Products";
import ProfilePage from "./pages/Profile";
import Register from "./pages/Register";
import Wishlist from "./pages/Wishlist";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/product",
    element: <DetailProduct />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/order",
    element: <OrderPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/wishlist",
    element: <Wishlist />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
