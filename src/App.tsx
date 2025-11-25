import { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthToast from "./components/Fragments/AuthToast";
import RootLayout from "./components/Layouts/RootLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import { useAppDispatch } from "./hooks/reduxHooks";
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
import { fetchUserThunk } from "./redux/auth/authThunks";
import { fetchProducts } from "./redux/product/productThunks";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RootLayout>
        <Home />
      </RootLayout>
    ),
  },

  {
    path: "/login",
    element: (
      <RootLayout>
        <Login />
      </RootLayout>
    ),
  },
  {
    path: "/register",
    element: (
      <RootLayout>
        <Register />
      </RootLayout>
    ),
  },
  {
    path: "/products/all/:title",
    element: (
      <RootLayout>
        <Products />
      </RootLayout>
    ),
  },
  {
    path: "/products/:title",
    element: (
      <RootLayout>
        <Products />
      </RootLayout>
    ),
  },
  {
    path: "/product/:id",
    element: (
      <ProtectedRoute>
        <RootLayout>
          <DetailProduct />
        </RootLayout>
      </ProtectedRoute>
    ),
  },

  {
    path: "/cart",
    element: (
      <ProtectedRoute>
        <RootLayout>
          <CartPage />
        </RootLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/order",
    element: (
      <ProtectedRoute>
        <RootLayout>
          <OrderPage />
        </RootLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/profile",
    element: (
      <ProtectedRoute>
        <RootLayout>
          <ProfilePage />
        </RootLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/wishlist",
    element: (
      <ProtectedRoute>
        <RootLayout>
          <Wishlist />
        </RootLayout>
      </ProtectedRoute>
    ),
  },
]);

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());

    const token = localStorage.getItem("token");
    if (token) {
      dispatch(fetchUserThunk());
    }
  }, []);

  return (
    <>
      <AuthToast />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
