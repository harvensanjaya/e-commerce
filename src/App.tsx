import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages'
import Login from './pages/Login'
import Register from './pages/Register'
import Products from './pages/Products'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/register',
    element: <Register/>
  },
  {
    path: "/products",
    element: <Products/>
  }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App