import { BodyDiv } from "./style";
import { useLocation } from "react-router-dom";
function Body() {
    const location = useLocation();
    const startStationList = location.state.startStationList;
    const endStationList = location.state.endStationList;
    console.log(startStationList, endStationList);
    return(
        <BodyDiv>

        </BodyDiv>
    )
}

export default Body;