import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Room from "../pages/Room";
import Booking from "../pages/Booking";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";



export const router = createBrowserRouter([
        {
            path : '/',
            element: <MainLayout></MainLayout>,
            errorElement: <ErrorPage></ErrorPage>,
            children: [
                {
                    path : '/',
                    element: <Home></Home>
                },
                {
                    path: '/rooms',
                    element: <Room></Room>
                },
                {
                    path: '/bookings',
                    element: <Booking></Booking>
                },
                {
                    path: '/login',
                    element: <Login></Login>
                },
                {
                    path: '/register',
                    element: <Register></Register>
                }
            ]
        }
])