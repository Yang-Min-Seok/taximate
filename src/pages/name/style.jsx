import styled from "styled-components";

export const BodyDiv = styled.div`
    
    h3:nth-child(1){
        margin: 0;
        text-align: center;
        line-height: 3;
        font-size: 150%;
    }
    h3:nth-child(1) span{
        color: #03588C;
        text-decoration: underline;
    }

    div:nth-child(2){
        width: 80%;
        margin: 0 auto;
    }
    div:nth-child(2) p{
        margin: 0;
        font-size: 130%;
        line-height: 2;
    }
    div:nth-child(2) input{
        padding: 0;
        padding-left: 3%;
        box-sizing: border-box;
        line-height: 2;
        font-size: 120%;
        width: 100%;
        border: 2px solid #6DD93B;
        border-radius: 10px;
    }

    div:nth-child(3){
        width: 80%;
        margin: 0 auto;
        margin-top: 20px;
    }
    div:nth-child(3) p{
        margin: 0;
        font-size: 130%;
        line-height:2;
    }
    div:nth-child(3) input{
        padding: 0;
        padding-left: 3%;
        box-sizing: border-box;
        line-height: 2;
        font-size: 120%;
        width: 100%;
        border: 2px solid #6DD93B;
        border-radius: 10px;
    }


    p:nth-child(4){
        margin: 0;
        color: #03588C;
        text-align: center;
        line-height: 3;
        font-size: 110%;
    }
    p:nth-child(4) span{
        text-decoration: underline;
        color: red;
    }

    button:nth-child(5){
        display: block;
        width: 40%;
        line-height: 2;
        border: 2px solid #03588C;
        border-radius: 10px;
        font-size: 130%;
        font-weight: 600;
        background-color: #fff;
        margin: 0 auto;
        transition: all 0.5s;
        color: #6DD93B;
        padding: 0;
    }
`