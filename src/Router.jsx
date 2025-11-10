import { createBrowserRouter } from "react-router";
import RootLayout from "./RootLayout";
import Home from "./Home";
import Doctors from "./Doctors";
import Loading from "./Loading";


export const router = createBrowserRouter([
    {

        path: '/',
        element: <RootLayout></RootLayout>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: "/doctors",
                element: <Doctors></Doctors>,
                loader: () => fetch('doctors.json'),
                hydrateFallbackElement: <Loading></Loading>

            }
        ]
    }
])