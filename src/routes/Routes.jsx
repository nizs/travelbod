import { createBrowserRouter } from "react-router-dom";
import MainLayout from '../../src/layout/MainLayout';
import Home from "../pages/home/Home/Home";
import About from "../pages/about/About/About";
import Tours from "../pages/tours/Tours/Tours";


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
            }
        ]
    }
]);

export default router;