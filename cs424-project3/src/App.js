import logo from "./logo.svg";
import { ThemeProvider } from "theme-ui";
import theme from "./theme";
import React, { Component } from "react";
import { createBrowserHistory } from "history";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";

function App() {

    return (
        <ThemeProvider theme={theme}>
            {/* <Home></Home> */}
            <BrowserRouter basename="/Project3CS424">
                <Routes>
                    <Route index component={<Home/>} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
