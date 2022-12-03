import { createBrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Error from './pages/Error' 
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/sobre',
    element: <Sobre />
  },
  {
    path: '*',
    element: <Error/>
  }
])

export { router };