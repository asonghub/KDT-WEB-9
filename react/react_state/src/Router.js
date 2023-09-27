import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Student from "./Student";
import StudentDetail from "./StudentDetail";
import Home from "./Home";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "student/:id",
        element: <StudentDetail />,
        children: [
          {
            path: "",
            element: <Student />,
          },
        ],
      },
    ],
  },
]);

export default Router;
