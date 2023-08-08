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
        width: 50px;
        height: 50px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: 80%;
        border-radius: 10px;
    }
    div:nth-child(2){
        text-align: center;
        height: 50px;
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
        width: 50px;
        height: 50px;
        background-image: url(${login});
        background-position: center;
        background-repeat: no-repeat;
        background-size: 70%;
        background-color: #FFD732;
        border-radius: 10px;
    }
`