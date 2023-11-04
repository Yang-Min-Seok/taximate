import styled from "styled-components";
export const BodyDiv = styled.div`
    h3{
        text-align: center;
        margin: 15px auto;
        font-weight: 500;
        font-size: 150%;
        display: block;
        width: 80%;
    }   

    form div{
        width: 80%;
        margin: 0 auto;
    }
    form div div{
        display: flex;
        margin-top: 10px;
    }
    form div div div:nth-child(1){
        display: block;
        height: 100%;
    }
    form div div div:nth-child(1) div:nth-child(1){
        height: 44px;
        width: 50px;
        height: 50px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        border-radius: 50%;
    }
    form div div div:nth-child(1) p:nth-child(2){
        margin: 0;
        text-align: center;
        line-height: 1.5;
    }
    form div div div:nth-child(2){
        width: calc(100% - 50px);
        justify-content: space-around;
    }
    form div div div:nth-child(2) input{
        display: none;
    }
    form div div div:nth-child(2) label{
        line-height: 74px;
        font-size: 200%;
    }

    form button{
        display: block;
        width: 40%;
        line-height: 2;
        border: 2px solid #03588C;
        border-radius: 10px;
        font-size: 130%;
        font-weight: 600;
        background-color: #fff;
        margin: 30px auto;
        transition: all 0.5s;
        color: #6DD93B;
    }
`