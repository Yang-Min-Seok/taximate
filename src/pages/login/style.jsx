import styled from "styled-components";
import kakaoImg from "../../assets/images/kakaotalk.png";
export const BodyDiv = styled.div`
    p{  
        font-size: 120%;
        margin: 0%;
        line-height: 2;
        text-align: center;
    }
    p:nth-child(1){
        color: #000;
        span{
            color: #FFD732;
        }
    }
    p:nth-child(2){
        color: #000;
        span{
            color: #FFD732;
        }
    }
    // kakao login btn
    div{
        width: 170px;
        height: 50px;
        background-image: url(${kakaoImg});
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        margin: 0 auto;
    }
`