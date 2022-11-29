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
        </div>
    );
};

export default Home;
