import { BodyDiv } from "./style";
import { getTeamNumber } from "../../apis/landingApis";
import { useState, useEffect } from "react";
function Body() {
    
    // 카카오 로그인 구현
    const handleLogin = () => {
        const Rest_api_key = 'd679f25e59dbc97619baf1256489b449';
        const redirect_uri = `http://localhost:3000/wait`;
        const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
        window.location.href = kakaoURL;
    }

    // set curr number of team
    const [teamNumber, setTeamNumber] = useState(0);
    const findTeamNumber = async() => {
        const teamNumber = await getTeamNumber();
        setTeamNumber(teamNumber);
    }
    const showTeamNumber = () => {
        if (!teamNumber){
            const teamNumberH1 = document.getElementById('teamNumberH1');
            teamNumberH1.innerText = '같이 택시탈래요? (섹시)';
        }
        else{
            const teamNumberSpan = document.getElementById('teamNumberSpan');
            teamNumberSpan.innerText = teamNumber;
        }
    }
    useEffect(() => {
        findTeamNumber();
        showTeamNumber();
    },[])

    return(
        <BodyDiv>
            <h1 id="teamNumberH1">지금 <span id="teamNumberSpan"></span>팀이 택시를 같이 타고 싶어해요!</h1>
            <div></div>
            <div onClick={handleLogin}></div>
        </BodyDiv>
    )
}

export default Body;