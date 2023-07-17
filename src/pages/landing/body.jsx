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
    // 로그인 후 접근 시
    if (code) {
        console.log(`kakao api 호출 ${code}`);
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