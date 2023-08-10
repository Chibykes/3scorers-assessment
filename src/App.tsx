import Error from "components/Error";
import PersistAuth from "middlewares/PersistAuth";
import RequireAuth from "middlewares/RequireAuth";
import Admins from "pages/Admins";
import Login from "pages/Login";
import Signup from "pages/Signup";
import Users from "pages/Users";
import { AuthUserProvider } from "contexts/AuthUser";
import { Toaster } from "react-hot-toast";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Overview from "./pages/Overview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        element: <PersistAuth />,
        children: [
          {
            element: <RequireAuth />,
            children: [
              {
                path: "/overview",
                element: <Overview />,
              },
              {
                path: "/users",
                element: <Users />,
              },
              {
                path: "/admins",
                element: <Admins />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <AuthUserProvider>
      <RouterProvider router={router} />
      <Toaster />
    </AuthUserProvider>
  );
}

export default App;
