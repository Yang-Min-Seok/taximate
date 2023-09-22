import { BodyDiv } from "./style";
import { useState, useEffect } from "react";
import kakaoMapScript from "../../components/kakoMap";

function Body() {

    // startStation, endStation 상태 관리
    const [startStationList, setStartStationList] = useState([]);
    const [endStationList, setEndStationList] = useState([]);

    // setStartBox
    const setStartBox = () => {
        // target
        const startBox = document.getElementById('startBox');
        const target = startBox.lastChild;
        
        // fill up startBox
        target.innerHTML = '';
        const lenOfStartStationList = startStationList.length;
        for(let i=0; i<lenOfStartStationList; i++){
            const prevStation = target.innerHTML;
            const newStation = startStationList[i];
            target.innerHTML = prevStation + `
                <span id="${newStation}">${newStation}</span>
            `;
        }
    }

    // setEndBox
    const setEndBox = () => {
        // target
        const endBox = document.getElementById('endBox');
        const target = endBox.lastChild;
        
        // fill up startBox
        target.innerHTML = '';
        const lenOfendStationList = endStationList.length;
        for(let i=0; i<lenOfendStationList; i++){
            const prevStation = target.innerHTML;
            const newStation = endStationList[i];
            target.innerHTML = prevStation + `
                <span id="${newStation}">${newStation}</span>
            `;
        }
    }

    // startStation이 있으면
    if (startStationList.length >= 1){
        setStartBox();
    }
    // endStation이 있으면
    if (endStationList.length >= 1){
        setEndBox();
    }

    // popUp 구현 (지도에서 역 클릭 시)
    const [popUp, setPopUp] = useState(false);

    const callPopUp = async (station) => {
        // activate popUp
        await setPopUp(true);
        const stationSpan = document.getElementById('stationSpan');
        stationSpan.innerText = `${station}`;
    }

    const handleOnClickPopUp = (e) => {
        const order = e.target.id;
        if (order === 'popUpLayout') {
            setPopUp(false);
        } 
        else if (order === 'start') {
            const stationSpan = document.getElementById('stationSpan');
            const newStation = stationSpan.innerText;
    
            // check
            if (!startStationList.includes(newStation)) {
                // update startStationList
                const newStartStationList = [...startStationList, newStation];
                setStartStationList(newStartStationList);
            }
            else{
                alert('이미 추가하셨습니다');
            }
    
            // close popUp
            setPopUp(false);
        }
        else if (order === 'end'){
            const stationSpan = document.getElementById('stationSpan');
            const newStation = stationSpan.innerText;
    
            // check
            if (!endStationList.includes(newStation)) {
                // update endStationList
                const newEndStationList = [...endStationList, newStation];
                setEndStationList(newEndStationList);
            }
            else{
                alert('이미 추가하셨습니다');
            }

            // close popUp
            setPopUp(false);
        }
    }

    // call kakaoMap
    useEffect(() => {
        kakaoMapScript(setStartStationList, setEndStationList, callPopUp);
    }, [])

    return(
        <BodyDiv>
            <div id='map'></div>
            
            <div id='startBox'>
                <p>출발역</p>
                <p></p>
            </div>
            
            <div id='endBox'>
                <p>도착역</p>
                <p></p>
            </div>

            <button>검색</button>

            {popUp && 
            <div id="popUpLayout" onClick={handleOnClickPopUp}>
                <div id="popUp">
                    <h3><span id="stationSpan"></span>을(를)<br /> 어디에 추가할까요?</h3>
                    <div>
                        <p id="start">출발</p>
                        <p id="end">도착</p>
                    </div>
                </div>
            </div>
            }
        </BodyDiv>
    )
}

export default Body;