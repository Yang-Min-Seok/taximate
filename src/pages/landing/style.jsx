import styled from "styled-components";
import KakaoLogin from "../../assets/images/kakaoLogin.png";
import landingImg from "../../assets/images/landingImg.png";

export const BodyDiv = styled.div`
    h1{
        text-align: center;
        font-size: 110%;
        font-weight: 500;
        margin: 0;
        line-height: 3;
    }
    h1 span{
        color: red;
        font-weight: 700;
    }
    div:nth-child(2){
        width: 80%;
        height: 200px;
        margin: 0 auto;
        background-image: url(${landingImg});
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        padding: 30px 0;
    }
    div:nth-child(3){
        width: 60%;
        height: 80px;
        margin: 0 auto;
        background-image: url(${KakaoLogin});
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
    }
`