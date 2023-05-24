import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";
import Friends from "./Pages/Fiends";
import ProfilePage from "./Pages/ProfilePage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/signup",
        element: <SignUp />
    },
    {
        path: "/home",
        element: <Home />
    },
    {
        path: "/profile",
        element: <ProfilePage />
    },
    {
        path: "/friends",
        element: <Friends />
    },
]);

export default function App() {
    return (
        <RouterProvider router={router} />
    );
}
