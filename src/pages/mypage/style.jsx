import styled from "styled-components";

export const BodyDiv = styled.div`

    && h1:nth-child(1){
        margin: 0;
        text-align: center;
        font-size: 180%;
        font-weight: 500;
        line-height: 2.5;
    }
    && h1:nth-child(1) span{

    }

    && p:nth-child(2){
        margin: 0;
        text-align: center;
        font-size: 150%;
        line-height: 2.5;
        font-weight: 600;
    }

    && div:nth-child(3){
        width: 100%;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        row-gap: 15px;
        justify-content: space-around;
    }
    && div:nth-child(3) p{
        margin: 0;
        width: 30%;
        text-align: center;
        border: 2px solid #03588C;
        box-sizing: border-box;
        border-radius: 5px;
        line-height: 3;
        font-size: 120%;
    }
    && div:nth-child(3) p:nth-child(1){
        color: #cc8e34;
    }
    && div:nth-child(3) p:nth-child(2){
        color: #c0c0c0;
        font-size: 120%;
        font-weight: 500;
    }
    && div:nth-child(3) p:nth-child(3){
        color: #ffd700;
    }
    && div:nth-child(3) p:nth-child(4){
        color: #a0b2c6;
    }
    && div:nth-child(3) p:nth-child(5){
        color: #fff294;
    }

    && p:nth-child(4){
        margin: 0;
        color: red;
        text-align: center;
        line-height: 3;
    }
    && p:nth-child(4) span{
        text-decoration: underline;
        font-size: 110%;
    }

    && button:nth-child(5){
        display: block;
        width: 40%;
        line-height: 2;
        border: 2px solid #03588C;
        border-radius: 10px;
        font-size: 130%;
        font-weight: 600;
        background-color: #fff;
        margin: 0 auto;
        margin-bottom: 10px;
        transition: all 0.5s;
        color: red;
    }
`