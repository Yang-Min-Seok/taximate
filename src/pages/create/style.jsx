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
        width: 40%;
        text-align: center;
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
        width: 40%;
        text-align: center;
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
        height: 70%;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 15%;
        background-color: #fff;
        border-radius: 10px;
        overflow: scroll;
    }
    #popUp h3{
        text-align: center;
        margin: 0;
        font-weight: 600;
        color: #03588C;
        line-height: 4;
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
        font-size: 100%;
        text-align: center;
        border: 2px solid #6DD93B;
        box-sizing: border-box;
        border-radius: 5px;
    }
    #popUp section p:nth-child(1){
        border-color: #0052A4;
    }
    #popUp section p:nth-child(2){
        border-color: #00A84D;
    }
    #popUp section p:nth-child(3){
        border-color: #EF7C1C;
    }
    #popUp section p:nth-child(4){
        border-color: #00A5DE;
    }
    #popUp section p:nth-child(5){
        border-color: #996CAC;
    }
    #popUp section p:nth-child(6){
        border-color: #CD7C2F;
    }
    #popUp section p:nth-child(7){
        border-color: #747F00;
    }
    #popUp section p:nth-child(8){
        border-color: #E6186C;
    }
    #popUp section p:nth-child(9){
        border-color: #BDB092;
    }
    #popUp section p:nth-child(10){
        border-color: #003DA5;
    }
    #popUp section p:nth-child(11){
        border-color: #77C4A3;
    }
    #popUp section p:nth-child(12){
        border-color: #0C8E72;
    }
    #popUp section p:nth-child(13){
        border-color: #0090D2;
    }
    #popUp section p:nth-child(14){
        border-color: #81A914;
    }
    #popUp section p:nth-child(15){
        border-color: #F5A200;
    }
    #popUp section p:nth-child(16){
        border-color: #6FB245;
    }
    #popUp section p:nth-child(17){
        border-color: #D4003B;
    }
    #popUp section p:nth-child(18){
        border-color: #A17800;
    }
    #popUp section p:nth-child(19){
        border-color: #7CA8D5;
    }
    #popUp section p:nth-child(20){
        border-color: #ED8B00;
    }
    #popUp section p:nth-child(21){
        border-color: #6789CA;
    }
    #popUp section p:nth-child(22){
        border-color: #22246F;
    }
    #popUp section p:nth-child(23){
        border-color: #B7C452;
    }
    
    /* popUp 2 */
    #popUpLayout2{
        position: fixed;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: 1;
        background-color: rgba(0,0,0,0.7);
    }
    #popUp2{
        z-index: 2;
        margin: 0 auto;
        width: 70%;
        height: 70%;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 15%;
        background-color: #fff;
        border-radius: 10px;
        padding: 10px;
        box-sizing: border-box;
        overflow: scroll;
    }
    #popUp2 section{
        display: flex;
        width: 100%;
        margin: 0 auto;
        flex-wrap: wrap;
        justify-content: space-between;
        row-gap: 10px;
    }
    #popUp2 section p{
        margin: 0;
        display: inline-block;
        width: 30%;
        line-height: 2.5;
        font-size: 120%;
        text-align: center;
        border: 2px solid #000;
        box-sizing: border-box;
        border-radius: 5px;
        font-size: 100%;
    }
`