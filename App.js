// how to create multiple div in react like this 
{/* <div id="parent">
    <div id="child">
        <h1>i'm an h1 tag</h1>
        </div>
    </div> */}

import React from "react"
import ReactDOM from "react-dom/client"

const parent = React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child"},
 [React.createElement("h1",{},"i'm an h1 tag"),React.createElement("h2",{},"priya here")],));

const heading = React.createElement("h1",{id:"heading"},"Hello world from react!")
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent);