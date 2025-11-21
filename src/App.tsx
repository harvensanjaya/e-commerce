import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthToast from "./components/Fragments/AuthToast";
import ProtectedRoute from "./components/ProtectedRoute";
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
  { path: "/", element: <Home /> },

  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },

  {
    path: "/products/:title",
    element: <Products />,
  },
  {
    path: "/product/:id",
    element: (
      <ProtectedRoute>
        <DetailProduct />
      </ProtectedRoute>
    ),
  },

  {
    path: "/cart",
    element: (
      <ProtectedRoute>
        <CartPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/order",
    element: (
      <ProtectedRoute>
        <OrderPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/profile",
    element: (
      <ProtectedRoute>
        <ProfilePage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/wishlist",
    element: (
      <ProtectedRoute>
        <Wishlist />
      </ProtectedRoute>
    ),
  },
]);

const App = () => {
  return (
    <>
      <AuthToast />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
