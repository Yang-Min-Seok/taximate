import styled from "styled-components";

export const BodyDiv = styled.div`
    
    form{
        width: 80%;
        margin: 0 auto;
    }
    form p{
        margin: 0;
        font-size: 130%;
    }

    form p:nth-child(1){
        text-align: right;
        line-height: 3;
    }
    form p:nth-child(1) input{
        width: 60%;
        padding: 0;
        font-size: 100%;
        text-align: center;
        border: 2px solid #03588C;
        box-sizing: border-box;
        border-radius: 5px;
    }

    form p:nth-child(2){
        text-align: right;
        line-height: 3;
    }
    form p:nth-child(2) input{
        width: 60%;
        padding: 0;
        font-size: 100%;
        text-align: center;
        border: 2px solid #03588C;
        box-sizing: border-box;
        border-radius: 5px;
    }

    form p:nth-child(3){
        text-align: right;
        line-height: 3;
    }
    form p:nth-child(3) input{
        width: 60%;
        text-align: center;
        padding: 0;
        font-size: 100%;
        border: 2px solid #03588C;
        box-sizing: border-box;
        border-radius: 5px;
    }

    form p:nth-child(4){
        text-align: center;
        font-size: 150%;
        line-height: 2;
    }
    form p:nth-child(4) input{
        display: none;
    }

    form p:nth-child(5){
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin: 10px 0;
    }
    form p:nth-child(5) label{
        display: block;
        width: calc(100% / 3 - 20px);
        border: 2px solid #03588C;
        text-align: center;
        border-radius: 10px;
        line-height: 2;
        font-size: 110%;
    }

    form button:nth-child(6){
        display: block;
        width: 40%;
        line-height: 2;
        border: 2px solid #03588C;
        border-radius: 10px;
        font-size: 130%;
        font-weight: 600;
        background-color: #fff;
        margin: 30px auto;
    }
`