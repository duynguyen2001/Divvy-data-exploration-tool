/** @jsxImportSource theme-ui */
import raw from '../hooks/functions/divvy_dataset.json';
import { useEffect } from 'react';

const Home = ({data, changeData, renderMode, changeRenderMode, chosenData, changeChosenData, ...props}) => {
    useEffect(() =>{
        changeData(raw);
        changeRenderMode('none');
        },[])
    return (
        <div>
            <h1 sx={{ textAlign: "center", color: "divvyblue" }}>Hello World</h1>
        </div>
    );
};

export default Home;
