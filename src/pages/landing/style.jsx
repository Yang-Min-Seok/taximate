import styled from "styled-components";
import KakaoLogin from "../../assets/images/kakaoLogin.png";
export const BodyDiv = styled.div`
    h1{
        text-align: center;
        font-size: 170%;
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
    }
    div:nth-child(3){
        width: 50%;
        height: 80px;
        margin: 0 auto;
        background-image: url(${KakaoLogin});
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
    }
`