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
    form p:nth-child(1) span:nth-child(1){
        display: inline-block;
        width: 30%;
    }
    form p:nth-child(1) span:nth-child(2){
        display: inline-block;
        width: 80px;
        font-size: 90%;
        text-align: center;
        line-height: 1.5;
        border: 1px solid #03588C;
        box-sizing: border-box;
        font-weight: 400;
    }

    form p:nth-child(2){
        text-align: right;
        line-height: 3;
    }
    form p:nth-child(2) span:nth-child(1){
        display: inline-block;
        width: 30%;
    }
    form p:nth-child(2) span:nth-child(2){
        display: inline-block;
        width: 80px;
        font-size: 90%;
        text-align: center;
        line-height: 1.5;
        border: 1px solid #03588C;
        box-sizing: border-box;
        font-weight: 400;
    }

    form p:nth-child(3){
        text-align: center;
        font-size: 90%;
        color: red;
        line-height: 2;
        font-weight: 500;
    }

    form p:nth-child(4){
        text-align: right;
        line-height: 3;
    }
    form p:nth-child(4) input{
        width: 60%;
        text-align: center;
        padding: 0;
        font-size: 100%;
        border: 2px solid #03588C;
        box-sizing: border-box;
        border-radius: 5px;
    }

    form p:nth-child(5){
        text-align: right;
        line-height: 3;
    }
    form p:nth-child(5) input{
        width: 60%;
        text-align: center;
        padding: 0;
        font-size: 100%;
        border: 2px solid #03588C;
        box-sizing: border-box;
        border-radius: 5px;
    }

    form p:nth-child(6){
        text-align: center;
        font-size: 150%;
        line-height: 2;
    }
    form p:nth-child(6) input{
        display: none;
    }

    form p:nth-child(7){
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin: 10px 0;
    }
    form p:nth-child(7) label{
        display: block;
        width: calc(100% / 3 - 20px);
        border: 2px solid #03588C;
        text-align: center;
        border-radius: 10px;
        line-height: 2;
        font-size: 110%;
    }

    form button:nth-child(8){
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
        color: #eee;
    }

    /* popUp */
    #popUpLayout{
        position: fixed;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: 1;
        background-color: rgba(0,0,0,0.7);
    }
    #popUp{
        z-index: 2;
        margin: 0 auto;
        width: 70%;
        height: 45%;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 15%;
        background-color: #fff;
        border-radius: 10px;
    }
    #popUp h3{
        text-align: center;
        margin: 30px 0;
        font-weight: 600;
        color: #03588C;
    }
    #popUp section{
        display: flex;
        width: 80%;
        margin: 0 auto;
        flex-wrap: wrap;
        justify-content: space-between;
        row-gap: 10px;
    }
    #popUp section p{
        margin: 0;
        display: inline-block;
        width: 30%;
        line-height: 2.5;
        font-size: 120%;
        text-align: center;
        border: 2px solid #6DD93B;
        box-sizing: border-box;
        border-radius: 5px;
    }
    #popUp section p:nth-child(1){

    }
    #popUp section p:nth-child(2){

    }
    #popUp section p:nth-child(3){

    }
    #popUp section p:nth-child(4){

    }
    #popUp section p:nth-child(5){

    }
    #popUp section p:nth-child(6){

    }
    #popUp section p:nth-child(7){

    }
    #popUp section p:nth-child(8){

    }
    #popUp section p:nth-child(9){

    }
`