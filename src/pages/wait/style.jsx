import styled from "styled-components";
import loading from "../../assets/images/loading.gif";
export const BodyDiv = styled.div`
    padding: 100px 0px;
    div{
        width: 50%;
        height: 120px;
        background-image: url(${loading});
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        margin: 0 auto;
    }
    p{
        text-align: center;
        margin: 0;
        font-size: 120%;
        line-height: 3;
    }
`