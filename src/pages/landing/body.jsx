import { BodyDiv } from "./style";
import { getTeamNumber } from "../../apis/landingApis";
import { useEffect } from "react";
function Body() {
    // 카카오 로그인 구현
    const handleLogin = () => {
        const Rest_api_key = 'd679f25e59dbc97619baf1256489b449';
        const redirect_uri = `http://localhost:3000/wait`;
        const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
        window.location.href = kakaoURL;
    }

    // set number of team
    const setTeamNumber = async() => {
        const teamNumber = await getTeamNumber();
        if (!teamNumber) {
            const teamNumberH1 = document.getElementById('teamNumberH1');
            teamNumberH1.innerText = '지금 택시 메이트를 모아보세요!';
        }
        else{
            const teamNumberSpan = document.getElementById('teamNumberSpan');
            teamNumberSpan.innerText = teamNumber;
        }
    }

    // check unusual access
    const checkUnusualAccess = () => {
        const login = sessionStorage.getItem('login');
        if(login){
            sessionStorage.removeItem('login');
            sessionStorage.removeItem('userInfo');
            window.location.reload();
            console.log(login, sessionStorage.getItem('userInfo'));
        }
    }

    useEffect(() => {
        setTeamNumber();
        checkUnusualAccess();
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