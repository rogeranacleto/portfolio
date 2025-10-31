import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Notfound } from "./pages/Notfound";
const router = createBrowserRouter([
  {
    element: <Home/>,
    path: "/"
  },
  {
    element: <Notfound/>,
    path: "*"
  }
])

export { router };