import styled from "styled-components";
import refresh from "../../assets/images/refresh.svg";
export const BodyDiv = styled.div`
    p:nth-child(1){
        margin: 0;
        text-align: center;
        font-size: 200%;
    }
    p:nth-child(1) span{
        display: inline-block;
        width: 100px;
        line-height: 2.5;
        font-size: 90%;
    }
    p:nth-child(1) span:nth-child(1){

    }
    p:nth-child(1) span:nth-child(2){

    }
    
    p:nth-child(2){
        text-align: center;
        font-size: 150%;
        margin: 0;
    }
    p:nth-child(2) span{

    }
    p:nth-child(2) span:nth-child(1){

    }
    p:nth-child(2) span:nth-child(2){

    }

    table:nth-child(3){
        border-collapse: collapse;
        margin: 20px auto;
        width: 80%;
        border: 2px solid #03588C;
        box-sizing: border-box;
    }
    table:nth-child(3) thead{

    }
    table:nth-child(3) thead tr{

    }
    table:nth-child(3) thead tr th{
        line-height: 1.8;
        padding: 0;
        
    }
    table:nth-child(3) tbody{
        text-align: center;
    }
    table:nth-child(3) tbody tr{
        
    }
    table:nth-child(3) tbody tr td{
        line-height: 2;
        padding: 0;
    }
    table:nth-child(3) tbody tr td:nth-child(5){
        color: red;
        font-size: 150%;
    }

    div:nth-child(4){
        display: flex;
        width: 80%;
        margin: 0 auto;
        justify-content: space-around;
    }
    div:nth-child(4) p{
        font-size: 130%;
        width: 30%;
        line-height: 2;
        border: 2px solid #03588C;
        box-sizing: border-box;
        border-radius: 10px;
    }
    div:nth-child(4) p:nth-child(1){
        color: #6DD93B;
    }
    div:nth-child(4) p:nth-child(2){
        color: red;
    }

    p:nth-child(5){
        margin: 0;
        font-size: 130%;
        text-align: center;
        line-height: 3;
        font-weight: 700;
    }
    p:nth-child(5) span{
        text-decoration: underline;
        color: red;
    }

    form:nth-child(6){
        width: 80%;
        margin: 0 auto;
    }
    form:nth-child(6) p{
        display: flex;
        width: 100%;
        margin: 0;
        font-size: 150%;
        justify-content: space-between;

    }
    form:nth-child(6) p input{
        width: 75%;
        padding: 0;
        text-align: center;
        font-size: 100%;
        border: 2px solid #03588C;
        border-radius: 10px;
        line-height: 1.8;
    }
    form:nth-child(6) p button{
        width: 20%;
        padding: 0;
        border: none;
        background-color: #fff;
        font-size: 100%;
        line-height: 1.8;
        border: 2px solid #03588C;
        color: #6DD93B;
        border-radius: 10px;
    }
    
    p:nth-child(7){
        display: block;
        width: 45px;
        height: 45px;
        margin: 20px auto;
        background-image: url(${refresh});
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
    }

    div:nth-child(8){
        border: 2px solid #03588C;
        box-sizing: border-box;
        border-radius: 10px;
        width: 80%;
        margin: 0 auto;
        height: 250px;
        overflow: scroll;
    }
    div:nth-child(8) div{
        padding: 10px;
        border: 2px solid #6DD93B;
        width: 80%;
        margin: 10px auto;
        border-radius: 10px;
    } 
    div:nth-child(8) div div:nth-child(1){
        display: flex;
        padding: 0;
        border: none;
        width: 100%;
        margin: 0;
        height: 40px;
    } 
    div:nth-child(8) div div:nth-child(1) p{
        font-size: 110%;
    } 
    div:nth-child(8) div div:nth-child(1) p:nth-child(1){
        width: 40px;
        height: 40px;
    } 
    div:nth-child(8) div div:nth-child(1) p:nth-child(2){
        width: 30%;
        line-height: 40px;
    }
    div:nth-child(8) div div:nth-child(2){
        display: flex;
        padding: 0;
        border: none;
        width: 100%;
    } 
    div:nth-child(8) div div:nth-child(2) p{
        font-size: 110%;
        line-height: 1.8;
    } 
    div:nth-child(8) div div:nth-child(2) p:nth-child(1){
        width: 80%;
    } 
    div:nth-child(8) div div:nth-child(2) p:nth-child(2){
        width: 20%;
    }

`