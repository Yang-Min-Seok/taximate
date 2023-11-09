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

    // show start and end station list
    const setStartEndStationList = () => {
        
        // startStation
        const lenOfStartStationList = startStationList.length;
        const startStationDiv = document.getElementById('startStationDiv');
        startStationDiv.innerHTML = ``;

        for (let i=0; i < lenOfStartStationList; i++){
            const prevStation = startStationDiv.innerHTML;
            
            const newStation = startStationList[i];
            startStationDiv.innerHTML = prevStation + `
                <span>${newStation}</span>
            `
        }

        // endStation
        const lenOfEndStationList = endStationList.length;
        const endStationDiv = document.getElementById('endStationDiv');
        endStationDiv.innerHTML = ``;

        for (let i=0; i < lenOfEndStationList; i++){
            const prevStation = endStationDiv.innerHTML;

            const newStation = endStationList[i];
            endStationDiv.innerHTML = prevStation + `
                <span>${newStation}<span>
            `
        }
    }

    const userInfoAsString = sessionStorage.getItem('userInfo');
    const userInfo = JSON.parse(userInfoAsString);
    const accessToken = userInfo[5];

    const navigate = useNavigate();
    const setSearchedTeam = async () => {
        const searchedTeam = await searchTeam(accessToken, startStationList, endStationList, navigate);
        if (searchedTeam.length >= 1){
            const lenOfTeamList = searchedTeam.length;
            const teamsTbody = document.getElementById('teamsTbody');
            teamsTbody.innerHTML = ``;
    
            for (let i=0; i<lenOfTeamList; i++){
                const prevTeams = teamsTbody.innerHTML;
    
                const newTeamId = searchedTeam[i].id;
                const newTeamStartStation = searchedTeam[i].start_station;
                const newTeamEndStation = searchedTeam[i].arrival_station;
                const newTeamStartTime = searchedTeam[i].start_time;
                const newTeamMemberCnt = `${searchedTeam[i].current_member} / ${searchedTeam[i].maximum_member}`;
    
                teamsTbody.innerHTML = prevTeams + `
                    <tr id="${newTeamId}">
                        <td><p>${newTeamStartStation}</p></td>
                        <td><p>${newTeamEndStation}</p></td>
                        <td><p>${newTeamStartTime}</p></td>
                        <td><p>${newTeamMemberCnt}</p></td>
                    </tr>
                `
            }
        }
    }

    const handleOnClickTeams = (e) => {
        const clickedTeamId = Number(e.target.parentElement.parentElement.id);
        if (Number.isInteger(clickedTeamId)){
            navigate(`/mate/${clickedTeamId}`);
        }
    }

    useEffect(()=> {
        setStartEndStationList();
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
                <tbody id="teamsTbody" onClick={handleOnClickTeams}></tbody>
            </table>
        </BodyDiv>
    )
}

export default Body;