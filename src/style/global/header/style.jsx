import { styled } from "styled-components";
import mainLogo from "../../../assets/images/mainLogo.png";
import login from "../../../assets/images/login.svg";
export const BodyDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    div{
        
    }
    div:nth-child(1){
        width: 40px;
        height: 40px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: 80%;
    }
    div:nth-child(2){
        text-align: center;
        height: 40px;
        width: calc(100% - 80px);
        p{  
            margin: 0 auto;
            width: 30%;
            height: 100%;
            background-image: url(${mainLogo});
            background-position: center;
            background-repeat: no-repeat;
            background-size: contain;
        }
    }
    div:nth-child(3){
        width: 40px;
        height: 40px;
        background-image: url(${login});
        background-position: center;
        background-repeat: no-repeat;
        background-size: 70%;
    }
`