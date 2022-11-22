import * as React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import { ThemeProvider } from "theme-ui";
import theme from "./theme";
import BrushMode from "./pages/BrushMode";
import SliderMode from "./pages/SliderMode";
import SelectMode from "./pages/SelectMode";
import About from "./pages/About";
import NoMatch from "./pages/NoMatch";
import Home from "./pages/Home";
import Layout from "./pages/Layout";

export default function App() {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <HashRouter>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Home />} />
                            <Route path="about" element={<About />} />
                            <Route path="BrushMode" element={<BrushMode />} />
                            <Route path="SelectMode" element={<SelectMode />} />
                            <Route path="SliderMode" element={<SliderMode />} />
                            <Route path="*" element={<NoMatch />} />
                        </Route>
                    </Routes>
                </HashRouter>
            </ThemeProvider>
        </div>
    );
}
