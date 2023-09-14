import styled from "styled-components";
import create from "../../assets/images/create.jpg";
import map from "../../assets/images/map.jpg";
import name from "../../assets/images/name.jpg";

export const BodyDiv = styled.div`
    margin: 30px 0px;
    /* common */
    div{
        width: 70%;
        height: 100px;
        margin: 0 auto;
        padding: 20px;
        box-sizing: border-box;
        border: 2px solid #03588C;
        border-radius: 10px;
    }
    div p{
        margin: 0;
    }

    div:nth-child(1){
        margin-bottom: 20px;
        position: relative;
    }
    div:nth-child(1)::before{
        content: "";
        background-image: url(${create});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        position: absolute;
        opacity: 0.3;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
    }
    div:nth-child(1) p{

    }
    div:nth-child(1) p:nth-child(1){
        font-size: 120%;
        font-weight: 700;
    }
    div:nth-child(1) p:nth-child(2){
        text-align: right;
        font-size: 90%;
        line-height: 3;
    }

    div:nth-child(2){
        margin-bottom: 20px;
        position: relative;
    }
    div:nth-child(2)::before{
        content: "";
        background-image: url(${map});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        position: absolute;
        opacity: 0.3;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
    }
    div:nth-child(2) p{
        
    }
    div:nth-child(2) p:nth-child(1){
        font-size: 120%;
        font-weight: 700;
    }
    div:nth-child(2) p:nth-child(2){
        text-align: right;
        font-size: 90%;
        line-height: 3;
    }

    div:nth-child(3){
        position: relative;
    }
    div:nth-child(3)::before{
        content: "";
        background-image: url(${name});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        position: absolute;
        opacity: 0.3;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
    }
    div:nth-child(3) p{
        
    }
    div:nth-child(3) p:nth-child(1){
        font-size: 120%;
        font-weight: 700;
    }
    div:nth-child(3) p:nth-child(2){
        text-align: right;
        font-size: 90%;
        line-height: 3;
    }
`