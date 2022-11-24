/** @jsxImportSource theme-ui */
// import Circles from "./Circles";
import Maps from "./Maps";
const dimensions = {
    width: 600,
    height: 300,
    margin: { top: 30, right: 30, bottom: 30, left: 60 },
};

const Home = () => {
    return (
        <div>
            <h1 sx={{ textAlign: "center" }}>Hello World</h1>
            <Maps />
        </div>
    );
};

export default Home;
