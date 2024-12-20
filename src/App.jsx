import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './layout/main';
import Projects from './pages/projects';
import Testimonials from './pages/testimonials';
import Contacts from './pages/contacts';
import { Toaster } from 'react-hot-toast';
import Landing from './pages/landing';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children : [
      {
        path: "",
        element : <Landing />
      },
      {
        path: "/projects",
        element : <Projects />
      },
      {
        path: "/testimonials",
        element : <Testimonials />
      },
      {
        path: "/contact",
        element : <Contacts />
      }
    ]
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster 
      position="top-center"
      reverseOrder={false}
      />
    </>
  )
}