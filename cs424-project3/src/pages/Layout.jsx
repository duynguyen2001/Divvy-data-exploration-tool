/** @jsxImportSource theme-ui */
import { Outlet, Link } from "react-router-dom";
import { Box, Button, Container, Flex, Grid } from "theme-ui";
// import Map from "./Map";
function Layout() {
    return (
        <Flex
            sx={{
                position: "fixed",
                width: "50%",
                right: 0,
                flexDirection: "column",
            }}
        >
            {/* A "layout route" is a good place to put markup you want to
            share across all the pages on your site, like navigation. */}

            <Grid
                sx={{
                    position: "relative",
                    zIndex: "6",
                    width: "50vw",
                    height: "20vh",
                    border: "2px solid red",
                }}
                columns={[6]}>
                <Link to="/">
                    <Button>Home</Button>
                </Link>

                <Link to="/about">
                    <Button>About</Button>
                </Link>

                <Link to="/BrushMode">
                    <Button>Brush Mode</Button>
                </Link>

                <Link to="/SelectMode">
                    <Button>Select Mode</Button>
                </Link>

                <Link to="/SliderMode">
                    <Button>Slider Mode</Button>
                </Link>

                <Link to="/nothing-here">
                    <Button>Nothing Here</Button>
                </Link>
            </Grid>
            <hr />

            {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
            <Container
                sx={{
                    position: "relative",
                    zIndex: "1",
                    width: "50vw",
                    height: "60vh",
                }}
            >
                <Outlet />
            </Container>
        </Flex>
    );
}

export default Layout;
