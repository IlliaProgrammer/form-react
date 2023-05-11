import Home from "./pages/Home"
import Auth from "./pages/Auth"
import { HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from "./utils/consts" 


export const RoutesArr = [
    {
        path: HOME_ROUTE,
        Component: <Home/>
    },
    {
        path: LOGIN_ROUTE,
        Component: <Auth/>
    },
    {
        path: REGISTRATION_ROUTE,
        Component: <Auth/>
    },
]