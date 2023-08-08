import { BodyDiv } from "./style";
import { useState } from "react";
import { kakaoLogin } from "../../apis/apis";

function Body() {
    // 카카오 로그인 구현
    const handleLogin = () => {
        const Rest_api_key = 'd679f25e59dbc97619baf1256489b449';
        const redirect_uri = `http://localhost:3000/main`;
        const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`
        window.location.href = kakaoURL;
    }
    const code = new URL(window.location.href).searchParams.get("code");
    const getKakaoLogin = async (code) => {
        const data = await kakaoLogin(code);
        const nickname = data[0];
        const profileImage = data[1];  
    }
    return (
        <BodyDiv>
            <p>간편하게 <span>카카오 계정</span>으로</p>
            <p><span>로그인</span> 하세요!</p>
            <div onClick={handleLogin}></div>
        </BodyDiv>
    );
}

export default Body;