import { Children } from "react";
import { createBrowserRouter } from "react-router-dom";
import LoginScreen from "./screens/Login";
import ProductosScreen from "./screens/Productos";
import React from "react";
import MainLayout from "./layouts/main";
import ClientesScreen from "./screens/Clientes";



const router = createBrowserRouter([
  {path: "/login",
  element: <LoginScreen/>
  
  },
  {path:"/", element: <MainLayout/>, children:[
    {path:"/productos", element:<ProductosScreen/>},
    {path:"/clientes", element: <ClientesScreen/>}
]}
]);

export default router;