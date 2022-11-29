import { useEffect } from "react";
import raw from "../hooks/functions/divvy_dataset.json";
import PieChart from "./PieChart";
import { Checkbox, Grid } from "theme-ui";
import { useState } from "react";
const SelectMode = ({
    data,
    changeData,
    renderMode,
    changeRenderMode,
    chosenData,
    changeChosenData,
    ...props
}) => {
    useEffect(() => {
        changeData(raw);
        changeRenderMode("selectmode");
    }, []);
    useEffect(() => {}, []);
    const [checkBoxes, changeCheckBoxes] = useState([true, true, true, true]);
    //https://medium.com/programming-essentials/how-to-manage-a-checkbox-with-react-hooks-f8c3d973eeca#:~:text=The%20state%20related%20to%20a%20checkbox%20input%20is,at%20How%20to%20Create%20Functional%20Components%20in%20React.
    return (
        <div>
            <h1>Hello World</h1>
            <PieChart data={data} chosenData={chosenData} />
            <form>
                <Grid gap={2} columns={4}>
                    <Checkbox
                        checked={checkBoxes[0]}
                        onChange={(e) =>
                            changeCheckBoxes([
                                e.target.value,
                                checkBoxes[1],
                                checkBoxes[2],
                                checkBoxes[3],
                            ])
                        }
                    >
                        Member Electric
                    </Checkbox>
                    <Checkbox
                        value={checkBoxes[1]}
                        onChange={(e) =>
                            changeCheckBoxes([
                                checkBoxes[0],
                                e.target.value,
                                checkBoxes[2],
                                checkBoxes[3],
                            ])
                        }
                    >
                        Member Normal
                    </Checkbox>
                    <Checkbox
                        value={checkBoxes[2]}
                        onChange={(e) =>
                            changeCheckBoxes([
                                checkBoxes[0],
                                checkBoxes[1],
                                e.target.value,
                                checkBoxes[3],
                            ])
                        }
                    >
                        Casual Electric
                    </Checkbox>
                    <Checkbox
                        value={checkBoxes[3]}
                        onChange={(e) =>
                            changeCheckBoxes([
                                checkBoxes[0],
                                checkBoxes[1],
                                checkBoxes[2],
                                e.target.value,
                            ])
                        }
                    >
                        Casual Normal
                    </Checkbox>
                </Grid>
            </form>
        </div>
    );
};

export default SelectMode;
