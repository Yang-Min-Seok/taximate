import styled from "styled-components";
import kakaoImg from "../../assets/images/kakaotalk.png";
export const BodyDiv = styled.div`
    
    // pop up
    #popUpLayout{
        position:fixed;
        background-color: #eee;
        left:0;
        top: 0;
        height: 100%;
        width: 100%;
        margin: 0 auto;
        z-index: 1;
    }
    #popUp{
        position: absolute;
        z-index: 2;
        width: 70%;
        height: 70%;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 15%;
        background-color: #fff;
        border-radius: 5px;
        color: #FFD732;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        p{  
            font-size: 120%;
            margin: 0%;
            line-height: 2;
        }
        p:nth-child(1){

        }
        p:nth-child(2){
            
        }

        // kakao login btn
        div::before{
            content: "";
            display: block;
            width: 50px;;
            height: 50px;
            background-image: url(${kakaoImg});
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
        }
        div{
            width: 50px;
            margin: 0 auto;
            margin-top: 3%;
        }

        p:nth-child(4){
            font-size: 60%;
            display: block;
            background-color: #FFD732;
            width: 15%;
            text-align: center;
            color: #fff;
            margin-top: 10%;
        }
    }
`