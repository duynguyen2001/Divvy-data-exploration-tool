import { useEffect } from "react";
import { brushModeProcessedData } from "../hooks/functions/brushModeProcessingData";
import LineChart from "./LineChart";
const BrushMode = ({
    data,
    changeData,
    renderMode,
    changeRenderMode,
    chosenData,
    changeChosenData,
    ...props
}) => {
    useEffect(() => {
        changeData(brushModeProcessedData());
        changeRenderMode("brushmode");
    }, []);
    return (
        <div>
            <h1>Hello World</h1>
            <LineChart data={chosenData.length === 0? data: chosenData} />
        </div>
    );
};

export default BrushMode;
