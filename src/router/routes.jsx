import { createBrowserRouter } from "react-router-dom";
import App from "../App";

export const router = createBrowserRouter([
    {path: "/", element: <App/>, children: [
        {path: "/about", element: <h1>Nosotros</h1>},
        {path: "/blog", element: <h1>Articulos del blog</h1>}      
    ]},
])