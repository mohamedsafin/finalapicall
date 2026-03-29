import React from "react";
import ReactDOM from "react-dom/client"
import App from "./App";
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Success from "./Success";
import Fail from "./Fail";
import Signup from "./Signup";
import "../src/index.css"
const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<App></App>}></Route>
        <Route path="/success" element={<Success/>}></Route>
        <Route path="/fail" element={<Fail/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
)