import { createBrowserRouter } from "react-router-dom";
import MainLayout from '../../src/layout/MainLayout';
import Home from "../pages/home/Home/Home";
import About from "../pages/about/About/About";
import Tours from "../pages/tours/Tours/Tours";
import TourD from "../pages/tours/TourD/TourD";
import Signup from "../shared/Signup/Signup";
import Login from "../shared/Login/Login";


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
                element: <About />
            },
            {
                path: 'tours',
                element: <Tours />
            },
            {
                path: 'tours/:id',
                element: <TourD />,
                loader: ({ params }) => fetch(`http://localhost:5000/tours/${params.id}`)
            },
            {
                path: 'signup',
                element: <Signup />
            },
            {
                path: 'login',
                element: <Login />
            },
        ]
    }
]);

export default router;