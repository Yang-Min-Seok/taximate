import styled from "styled-components";
import mainLogo from "../../../assets/images/mainLogo.png";

export const BodyDiv = styled.div`
    display: flex;
    width: 100%;
    padding: 10px 0;
    justify-content: space-around;
    
    div{
        height:60px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
    }
    div:nth-child(1){
        width: 60px;
    }
    div:nth-child(2){
        width: calc(100% - 200px);
        background-image: url(${mainLogo});
    }
    div:nth-child(3){
        width: 60px;
        border-radius: 50%;
    }

`