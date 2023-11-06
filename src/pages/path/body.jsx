import { BodyDiv } from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { searchTeam } from "../../apis/pathApis";
function Body() {
    const location = useLocation();

    let startStationList ;
    let endStationList ;
    
    try{
        startStationList = location.state.startStationList;
        endStationList = location.state.endStationList;
    }
    catch(err){
        
    }

    const userInfoAsString = sessionStorage.getItem('userInfo');
    const userInfo = JSON.parse(userInfoAsString);
    const accessToken = userInfo[5];

    const navigate = useNavigate();
    const setSearchedTeam = async () => {
        const searchedTeam = await searchTeam(accessToken, startStationList, endStationList, navigate);

        console.log(searchedTeam);
    }

    useEffect(()=> {
        setSearchedTeam();
    }, [])

    return(
        <BodyDiv>
            <div>
                <div id="startStationDiv">
                    <span>서울역</span>
                    <span>명동</span>
                </div>
                <p>⬇︎</p>
                <div id="endStationDiv">
                    <span>명동</span>
                    <span>숙대입구</span>
                    <span>회현</span>
                </div>
            </div>
            <table border="1">
                <thead>
                    <tr>
                        <th>출발역</th>
                        <th>도착역</th>
                        <th>출발시각</th>
                        <th>인원수</th>
                    </tr>
                </thead>
                <tbody id="teamsTbody">
                    <tr>
                        <td>서울역</td>
                        <td>명동</td>
                        <td>21:00</td>
                        <td>3/4</td>
                    </tr>
                </tbody>
            </table>
        </BodyDiv>
    )
}

export default Body;