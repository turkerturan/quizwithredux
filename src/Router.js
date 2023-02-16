import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"
import Exam from './pages/Exam';
import Final from './pages/Final';
import Intro from './pages/Intro';



const router = createBrowserRouter([
    {
        path: "/",
        element: <Intro />,
    },
    {
        path: "/exam",
        element: <Exam />,
    },
    {
        path: "/final",
        element: <Final />
    }
]);


export default function Router() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}
