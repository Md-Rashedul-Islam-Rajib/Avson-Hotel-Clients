import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Room from "../pages/Room";
import Booking from "../pages/Booking";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";
import RoomDetails from "../pages/RoomDetails";
import PrivateRoute from "../components/PrivateRoute";



export const router = createBrowserRouter([
        {
            path : '/',
            element: <MainLayout></MainLayout>,
            errorElement: <ErrorPage></ErrorPage>,
            children: [
                {
                    path : '/',
                    element: <Home></Home>,
                    loader: ()=> fetch('https://newassignment-11.vercel.app/rooms')
                },
                {
                    path: '/rooms',
                    element: <Room></Room>,
                    loader: ()=> fetch('https://newassignment-11.vercel.app/rooms')
                },{
                    path: '/room/:id',
                    element: 
                        <RoomDetails></RoomDetails>,
                    loader: ({params})=> fetch(`https://newassignment-11.vercel.app/room/${params.id}`)
                },
                {
                    path: '/bookings',
                    element: <PrivateRoute>
                        <Booking></Booking>
                    </PrivateRoute>
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