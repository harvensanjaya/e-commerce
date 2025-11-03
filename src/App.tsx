import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages'
import Login from './pages/Login'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/login',
    element: <Login/>
  }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App