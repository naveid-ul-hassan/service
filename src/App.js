import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Blogs from './components/blogs/Blogs';
import Home from './components/home/Home';
import Root from './Root';
import About from './components/about/About';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';
import ServiceDetailComp from './components/common/servicedetail/ServiceDetailComp';

const router = createBrowserRouter([
  {
    path:"/" ,
    element:<Root />, 
    children: [
    { path:"/", element:<Home /> },
    { path:"/about",element: <About />},
    { path:"/services", element: <Services />},
    { path:"/blogs",element: <Blogs /> },
    { path:"/contact",element: <Contact />},
    // {path:"/servicedetail" , element:<ServiceDetailComp />}
    ]
  }
])

const App = () => {
  return (
   <RouterProvider router={router} /> 
  );
};

export default App;







