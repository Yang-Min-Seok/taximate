import { BodyDiv } from "./style";
import { kakaoLogout } from "../../apis/mypageApis";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function Body() {
    
    // set userInfo
    const userInfoAsString = sessionStorage.getItem('userInfo');
    const userInfo = JSON.parse(userInfoAsString);
    const nickname = userInfo[0];
    const gender = userInfo[2];
    const grade = userInfo[4];
    const setUserInfo = () => {
        // nickname
        const nicknameSpan = document.getElementById('nicknameSpan');
        nicknameSpan.innerText = nickname;
        if (gender) {
            nicknameSpan.style.color = '#03588C';
        }
        else{
            nicknameSpan.style.color = '#FF607F';
        }

        // grade
        const userGrade = document.getElementById(`${grade}`);
        userGrade.style.backgroundColor = `#6DD93B`;
        userGrade.style.color = `#03588C`;
    }

    // logOut
    const navigate = useNavigate();
    const handleOnClickLogout = () => {
        const userInfoAsString = sessionStorage.getItem('userInfo');
        const userInfo = JSON.parse(userInfoAsString);
        const accessToken = userInfo[5];
        kakaoLogout(navigate, accessToken);
    }

    useEffect(() => {
        setUserInfo();
    }, [])

    return(
        <BodyDiv>
            <h1><span id="nicknameSpan"></span>님 안녕하세요</h1>
            <p>내 등급</p>
            <div>
                <p id="bronze">bronze</p>
                <p id="silver">silver</p>
                <p id="gold">gold</p>
                <p id="platinum">platinum</p>
                <p id="diamond">diamond</p>
            </div>
            <p>* <span>안내멘트</span> *</p>
            <button onClick={handleOnClickLogout}>로그아웃</button>
        </BodyDiv>
    )
}

export default Body;