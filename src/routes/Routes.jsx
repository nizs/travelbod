import { createBrowserRouter } from "react-router-dom";
import MainLayout from '../../src/layout/MainLayout';
import Home from "../pages/home/Home/Home";
import About from "../pages/about/About/About";
import Tours from "../pages/tours/Tours/Tours";
import TourD from "../pages/tours/TourD/TourD";
import Signup from "../shared/Signup/Signup";
import Login from "../shared/Login/Login";
import PrivateRoute from "./PrivateRoute";
import Destinations from "../pages/destination/Destinations/Destinations";
import DesTours from "../pages/destination/DesTours/DesTours";
import Checkout from "../pages/checkout/Checkout/Checkout";
import Bookings from "../pages/bookings/Bookings/Bookings";
import Testimonials from "../pages/testimonials/Testimonials/Testimonials";
import Blogs from "../pages/blogs/Blogs/Blogs";
import BlogD from "../pages/blogs/Blogs/BlogD";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,  // <Main /> is custom component
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'home',
                element: <Home />
            },
            {
                path: 'about',
                element: <><About /> <Testimonials /></>
            },
            {
                path: 'tours',
                element: <Tours />
            },
            {
                path: 'tours/:id',
                element: <PrivateRoute><TourD /></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/tours/${params.id}`)
            },
            {
                path: 'tours/:id',
                element: <Checkout />,
                loader: ({ params }) => fetch(`http://localhost:5000/tours/${params.id}`)
            },
            {
                path: 'destinations',
                element: <Destinations />
            },
            {
                path: 'destinations/:name',
                element: <PrivateRoute><DesTours /></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/destinations/${params.name}`)
            },
            {
                path: 'bookings',
                element: <PrivateRoute><Bookings /></PrivateRoute>
            },
            {
                path: 'blogs',
                element: <Blogs />
            },
            {
                path: 'blogs/:id',
                element: <BlogD />,
                loader: ({ params }) => fetch(`http://localhost:5000/blogs/${params.id}`)
            },
            {
                path: 'signup',
                element: <Signup />
            },
            {
                path: 'login',
                element: <Login />
            }
        ]
    }
]);

export default router;