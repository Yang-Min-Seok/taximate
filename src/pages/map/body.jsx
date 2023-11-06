import { BodyDiv } from "./style";
import { useState, useEffect } from "react";
import kakaoMapScript from "../../components/kakoMap";
import { useNavigate } from "react-router-dom";
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

    // 출발역 박스에서 클릭 시 (삭제)
    const handleOnClickStartBox = (e) => {
        const selectedStation = e.target.id;
        const newStartStationList = startStationList.filter(item => item !== selectedStation);
        setStartStationList(newStartStationList);
    };

    // 도착 박스에서 클릭 시 (삭제)
    const handleOnClickEndBox = (e) => {
        const selectedStation = e.target.id;
        const newEndStationList = endStationList.filter(item => item !== selectedStation);
        setEndStationList(newEndStationList);
    }
    
    // 검색 버튼 눌렀을 시
    const navigate = useNavigate();
    const handleOnClickSearch = () => {
        if (startStationList.length === 0){
            alert('출발역을 최소 하나 이상 설정해 주세요!');
        }
        else if (endStationList.length === 0){
            alert('도착역을 최소 하나 이상 설정해 주세요!');
        }
        else{
            navigate(`/path`, {state: {'startStationList':startStationList, 'endStationList':endStationList}});
        }
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

    // call kakaoMap, setStartBox, setEndBox
    useEffect(() => {
        kakaoMapScript(setStartStationList, setEndStationList, callPopUp);
        setStartBox();
        setEndBox();
    }, [startStationList, endStationList])

    return(
        <BodyDiv>
            <div id='map'></div>
            
            <div id='startBox' onClick={handleOnClickStartBox}>
                <p>출발역</p>
                <p></p>
            </div>
            
            <div id='endBox' onClick={handleOnClickEndBox}>
                <p>도착역</p>
                <p></p>
            </div>

            <button onClick={handleOnClickSearch}>검색</button>

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