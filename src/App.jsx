import { Header } from "./components/layout/Header";
import { Sidebar } from "./components/layout/Sidebar";
import { HomePage } from "./pages/home";
import "./App.css";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useNavigation,
} from "react-router-dom";
import { homeLoader } from "./pages/home/loader";
import { ErrorPage } from "./pages/error";
import { Loader } from "./components/common/Loader";

const Layout = () => {
  const navigation = useNavigation();
  return (
    <div className="app">
      <Header />
      <div className="content">
        <Sidebar />
        {navigation.state === "loading" ? <Loader /> : <Outlet />}
      </div>
    </div>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        index: true,
        errorElement: <ErrorPage />,
        loader: homeLoader,
        element: <HomePage />,
      },
      {
        path: "/:id",
        errorElement: <ErrorPage />,
        loader: homeLoader,
        element: <HomePage />,
      },
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
