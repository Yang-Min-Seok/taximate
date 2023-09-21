import { BodyDiv } from "./style";
import { useState, useEffect } from "react";
import kakaoMapScript from "../../components/kakoMap";
function Body() {

    useEffect(() => {
        kakaoMapScript();
    },[])

    return(
        <BodyDiv>
            <div id='map'></div>
            
            <div id='startBox'>
                <p>출발역</p>
                <p>
                    <span>서울역</span>
                    <span>시청역</span>
                    <span>종각역</span>
                    <span>남영역</span>
                    <span>용산역</span>
                    <span>노량진역</span>
                </p>
            </div>
            
            <div id='endBox'>
                <p>도착역</p>
                <p>
                    <span>서울역</span>
                    <span>시청역</span>
                    <span>종각역</span>
                    <span>남영역</span>
                    <span>용산역</span>
                    <span>노량진역</span>
                </p>
            </div>

            <button>검색</button>
        </BodyDiv>
    )
}

export default Body;