
import React from "react"
import ReactDOM from "react-dom/client"
import Heading from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter , RouterProvider } from "react-router";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";


// //React Element
// const jsxHeading =(<h1>Hi priya
//     how are you?
// </h1>)

// //React Components
// const Title = function() { 
//  return(<h2>Hello inside component rendered in outside component</h2>
// )};

// const HeadingComponent = () => (
//     <div>
//     <Title/>
//     <h1>Outer component</h1>
//     </div>
// );





const AppLayout =() => {
    return(
        <div className="App">
        <Heading/>
        <Body/>
        </div>
    )
}

const appRouter = createBrowserRouter([
  {
  path: "/",
  element: <AppLayout/>,
  errorElement: <Error/>,
},
{
  path: "/about",
  element: <About/>,
},
{
  path: "/contact",
  element: <Contact/>,
}
])

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)