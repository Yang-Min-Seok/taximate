import { BodyDiv } from "./style";
import { useState } from "react";
import { kakaoLogin } from "../../apis/apis";

function Body() {
    // 팝업 구현
    const [popUp, setPopUp] = useState(true);
    const handleOnClickPopUp = (e) => {
        const area = e.target.id;
        if (area==='popUpLayout' || area==='closeBtn'){
            setPopUp(false);
        }
    }

    // 카카오 로그인 구현
    const handleLogin = () => {
        const Rest_api_key = 'd679f25e59dbc97619baf1256489b449';
        const redirect_uri = `http://localhost:3000`;
        const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`
        window.location.href = kakaoURL;
    }
    const code = new URL(window.location.href).searchParams.get("code");
    const getKakaoLogin = async (code) => {
        const data = await kakaoLogin(code);
        const nickname = data[0];
        const profileImage = data[1];
        // nickname과 profileImage를 가져왔으면
        if (nickname && profileImage){
            // 세션에 저장
            sessionStorage.setItem('loggedIn', true);
            sessionStorage.setItem('nickname', nickname);
            sessionStorage.setItem('profileImage', profileImage);
            alert(`${nickname}님 환영합니다.`);
            // popUp 내리기
            const popUpLayout = document.getElementById('popUpLayout');
            popUpLayout.style.display = 'none';
            // setPopUp(false);
        }
    }
    // 로그인 후 접근 시
    if (code) {
        getKakaoLogin(code);
    }
    
    return (
        <BodyDiv>
            {popUp && 
            <div id="popUpLayout" onClick={handleOnClickPopUp}>
                <div id="popUp">
                    <p>간편하게 <span>카카오 계정</span>으로</p>
                    <p><span>로그인</span> 하세요!</p>
                    <div onClick={handleLogin}></div>
                    <p id="closeBtn">닫기</p>
                </div>
            </div>
            }
        </BodyDiv>
    );
}

export default Body;