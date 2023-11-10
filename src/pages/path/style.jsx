import styled from "styled-components";

export const BodyDiv = styled.div`
    div:nth-child(1){
        margin: 30px 0;
    }
    div:nth-child(1) div:nth-child(1){
        text-align: center;
        margin: 0;
    }
    div:nth-child(1) div:nth-child(1) span{
        font-size: 150%;
        font-weight: 600;
    }
    div:nth-child(1) p:nth-child(2){
        margin: 0;
        text-align: center;
        font-size: 150%;
        line-height: 2.5;
    }
    div:nth-child(1) div:nth-child(3){
        text-align: center;
    }
    div:nth-child(1) div:nth-child(3) span{
        font-size: 150%;
        font-weight: 600;
    }

    table:nth-child(2){
        border-collapse: collapse;
        width: 80%;
        margin: 0 auto;
        border: 2px solid #03588C;
        box-sizing: border-box;
    }
    table:nth-child(2) thead{
        
    }
    table:nth-child(2) thead tr{
        
    }
    table:nth-child(2) thead tr th{
        line-height: 2;
        font-size: 120%;
        font-weight: 600;
    }
    table:nth-child(2) tbody{
        width: 100%;
    }
    table:nth-child(2) tbody tr{

    }
    table:nth-child(2) tbody tr td{
        text-align: center;
        font-size: 110%;
        width: 25%;
    }
    table:nth-child(2) tbody tr td p{
        display: block;
        margin: 0 auto;
        width: 60px;
        height: 100%;
        white-space: nowrap;
        overflow: auto;
        line-height: 3;
    }
`