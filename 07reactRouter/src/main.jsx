import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Layout from "./layout.jsx";

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import ContactUs from "./components/ContactUs/ContactUs.jsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="/about/" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
        </Route>,
    ),
);

/*
Here, Route can be like <Route /> or <Route> </Route>

<Route></Route> -> We use sandwitching of route when we want to render insider this another i.e, /about if we have different components in /about 
like /about/company , /about/xyz , /about/pqr etc then for writing all company, xyz, pqr we use this sandwitch wala route.

<Route /> ->  defines which component should render for a particular URL.

createBrowserRouter -> is for we have different URL'a in our website right, for which url which page should render this will decide

createRoutesFromElements -> This takes the JSX route definitions you write with <Route> and converts them into the route configuration that the router can use.

RouterProvider -> It makes the router active so the application can respond to URL changes and render matching routes.

<Outlet /> -> It acts as a placeholder for the matching nested route.
      Ex. when the user visits /about, React Router renders the equivalent of this structure:
<>
  <Header />
  <About />
  <Footer />
</>

if user visit /company
<>
  <Header />
  <Company />
  <Footer />
</>

like this Outlet will work 

*/

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);
