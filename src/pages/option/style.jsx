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
    #popUp h3:nth-child(1){
        margin: 30px 0;
        line-height: 3;
        text-align: center;
        font-weight: 600;
        font-size: 130%;
    }
    #popUp h3:nth-child(1) span{
        color: red;
        text-decoration: underline;
    }
    #popUp section:nth-child(2){
        display: flex;
        width: 60%;
        margin: 0 auto;
        justify-content: space-between;
    }
    #popUp section:nth-child(2) p{
        width: 45%;
        text-align: center;
        line-height: 3;
        border-radius: 10px;
        font-size: 120%;
        box-sizing: border-box;
    }
    #popUp section:nth-child(2) p:nth-child(1){
        border: 2px solid #03588C;
    }
    #popUp section:nth-child(2) p:nth-child(2){
        border: 2px solid #FF607F;
    }
    #popUp button{
        display: block;
        width: 40%;
        line-height: 2;
        border: 2px solid #6DD93B;
        border-radius: 10px;
        font-size: 130%;
        font-weight: 400;
        background-color: #fff;
        margin: 50px auto;
    }
`