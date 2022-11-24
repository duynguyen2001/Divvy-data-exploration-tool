import { Outlet, Link } from "react-router-dom";
// import Map from "./Map"; 
function Layout() {
    return (
        <div>
            {/* A "layout route" is a good place to put markup you want to
            share across all the pages on your site, like navigation. */}
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/BrushMode">Brush Mode</Link>
                    </li>
                    <li>
                        <Link to="/SelectMode">Select Mode</Link>
                    </li>
                    <li>
                        <Link to="/SliderMode">Slider Mode</Link>
                    </li>
                    <li>
                        <Link to="/nothing-here">Nothing Here</Link>
                    </li>
                </ul>
            </nav>
            <div sx = {{
                width: "500px",
                height: "300px"
            }}> </div>
            <hr />
            
            {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
            <Outlet />
        </div>
    );
}

export default Layout;