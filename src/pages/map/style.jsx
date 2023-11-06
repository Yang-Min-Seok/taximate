import styled from "styled-components";
import deleteMark from "../../assets/images/delete.svg";
export const BodyDiv = styled.div`

    #map{
        width: 80%;
        height: 350px;
        margin: 20px auto;
        border: 2px solid #03588C;
        border-radius: 10px;
        box-sizing: border-box;
    }

    #startBox{
        width: 80%;
        margin: 0 auto;
        display: flex;
        height: 70px;
        border: 2px solid #6DD93B;
        border-radius: 10px;
    }
    #startBox p:nth-child(1){
        width: 25%;
        margin: 0;
        line-height: 70px;
        border-right: 2px solid #6DD93B;
        box-sizing: border-box;
        text-align: center;
        font-size: 120%;
    }
    #startBox p:nth-child(2){
        margin: 0;
        height: 100%;
        width: 70%;
        padding: 0 15px;
        box-sizing: border-box;
        
        /* 가로 스크롤 */
        overflow: auto;
        white-space: nowrap;
    }
    #startBox p:nth-child(2) span{
        display: inline-block;
        height: 70px;
        line-height: 70px;
        font-size: 110%;
        text-align: center;
        margin-right: 10px;
    }
    #startBox p:nth-child(2) span::after{
        content: "";
        display: inline-block;
        width: 17.6px;
        height: 17.6px;
        transform: translate(4px, 3px);
        background-image: url(${deleteMark});
        background-repeat: no-repeat;
        background-position: center;
    }

    #endBox{
        width: 80%;
        margin: 0 auto;
        margin-top: 20px;
        display: flex;
        height: 70px;
        border: 2px solid #6DD93B;
        border-radius: 10px;
    }
    #endBox p:nth-child(1){
        width: 25%;
        margin: 0;
        line-height: 70px;
        border-right: 2px solid #6DD93B;
        box-sizing: border-box;
        text-align: center;
        font-size: 120%;
    }
    #endBox p:nth-child(2){
        margin: 0;
        height: 100%;
        width: 70%;
        padding: 0 15px;
        box-sizing: border-box;
        
        /* 가로 스크롤 */
        overflow: auto;
        white-space: nowrap;
    }
    #endBox p:nth-child(2) span{
        display: inline-block;
        height: 70px;
        line-height: 70px;
        font-size: 110%;
        text-align: center;
        margin-right: 10px;
    }
    #endBox p:nth-child(2) span::after{
        content: "";
        display: inline-block;
        width: 17.6px;
        height: 17.6px;
        transform: translate(2px, 2px);
        background-image: url(${deleteMark});
        background-repeat: no-repeat;
        background-position: center;
    }

    button{
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
        margin: 0;
        margin-top: 100px;
        margin-bottom: 50px;
        font-weight: 500;
        text-align: center;
        font-size: 160%;
        line-height: 1.5;
    }
    #popUp h3 span{
        color: #03588C;
        font-weight: 700;
    }
    #popUp div{
        display: flex;
        justify-content: space-around;
    }
    #popUp div p{
        margin: 0;
        width: 35%;
        text-align: center;
        font-size: 140%;
        line-height: 2;
        border-radius: 10px;
        font-weight: 700;
    }
    #popUp div p:nth-child(1){
        color: #03588C;
        background-color: #6DD93B;
    }
    #popUp div p:nth-child(2){
        color: #6DD93B;
        background-color: #03588C;
    }
`