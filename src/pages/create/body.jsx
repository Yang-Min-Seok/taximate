import { BodyDiv } from "./style";
import { useState } from "react";
import { createTeam } from "../../apis/createApis";
import { useNavigate } from "react-router-dom";
function Body() {
    
    // 폼 내의 정보
    const [startStation, setStartStation] = useState('');
    const [endStation, setEndStation] = useState('');
    const [startDate, setStartDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [maxPeople, setMaxPeople] = useState('');

    // popUp
    const [popUp, setPopUp] = useState(false);
    const [popUp2, setPopUp2] = useState(false);
    const [startOrEnd, setStartOrEnd] = useState('');
    // 출발, 도착 역 선택 시
    const handleOnClickStation = (e) => {
        const order = e.target.id;
        if (order === 'selectStartStation'){
            setStartOrEnd('start');
        }
        else if (order === 'selectEndStation'){
            setStartOrEnd('end');
        }
        setPopUp(true);
    }
    // popUp 클릭 시
    const handleOnClickPopup = async(e) => {
        const order = e.target.id;
        if(order === 'popUpLayout'){
            setPopUp(false);
        }
        else if (order.slice(0,4) === 'line'){
            const lineNum = order.slice(4);
            await setPopUp(false);
            await setPopUp2(true);
            fillPopUp2(lineNum);
        }
    }
    // popUp 2 클릭 시
    const handleOnClickPopup2 = (e) => {
        const order = e.target.id;
        if(order === 'popUpLayout2'){
            setPopUp2(false);
        }
        else if (order === 'popUp2'){
            // 무시
        }
        else if (order) {
            if (startOrEnd === 'start'){
                setStartStation(order);
                const startStationSpan = document.getElementById('startStationSpan');
                startStationSpan.innerText = order;
            }
            else if (startOrEnd === 'end'){
                setEndStation(order);
                const endStationSpan = document.getElementById('endStationSpan');
                endStationSpan.innerText = order;
            }
            setPopUp2(false);
        }
    }
    // popUp2 채우기
    const fillPopUp2 = (lineNum) => {
        const popUp2 = document.getElementById('popUp2');
        if (lineNum === '1'){
            popUp2.innerHTML = `
                <section>
                    <p id="서울역">서울역</p>
                    <p id="외대앞">외대앞</p>
                    <p id="종로3가">종로3가</p>
                    <p id="종로5가">종로5가</p>
                    <p id="시청">시청</p>
                    <p id="노량진">노량진</p>
                </section>
            `
        }
        else if (lineNum === '2'){
            popUp2.innerHTML = `

            `
        }
        else if (lineNum === '3'){
            popUp2.innerHTML = `

            `
        }
        else if (lineNum === '4'){
            popUp2.innerHTML = `

            `
        }
        else if (lineNum === '5'){
            popUp2.innerHTML = `

            `
        }
        else if (lineNum === '6'){
            popUp2.innerHTML = `

            `
        }
        else if (lineNum === '7'){
            popUp2.innerHTML = `

            `
        }
        else if (lineNum === '8'){
            popUp2.innerHTML = `

            `
        }
        else if (lineNum === '9'){
            popUp2.innerHTML = `

            `
        }
    }

    // 출발 날짜 선택 시
    const handleOnChangeStartDate = (e) => {
        const startDate = e.target.value;
        setStartDate(startDate);
    }
    
    // 출발 시각 선택 시
    const handleOnChangeStartTime = (e) => {
        const startTime = e.target.value;
        setStartTime(startTime);
    }

    // 최대 인원 선택 시
    const onChangeMaxPeople = (e) => {
        const maxPeople = Number(e.target.id);
        setMaxPeople(maxPeople);

        for (let i=2; i<=4; i++){
            const target = document.getElementById(`${i}Label`);
            target.style.color = '#000';
            target.style.backgroundColor = '#fff';
        }

        const selectedLabel = document.getElementById(`${maxPeople}Label`);
        selectedLabel.style.color = '#fff';
        selectedLabel.style.backgroundColor = '#03588C';
    }

    // 작성하기 버튼 누를 시
    const navigate = useNavigate();
    const handleOnSubmit = (e) => {
        e.preventDefault();
        
        if(!startStation){
            alert('출발역을 지정해주세요!');
        }
        else if (!endStation) {
            alert('도착역을 지정해주세요!');
        }
        else if (!startDate) {
            alert('출발날짜를 지정해주세요!');
        }
        else if (!startTime) {
            alert('출발시각을 지정해주세요!');
        }
        else if (!maxPeople) {
            alert('최대인원을 지정해주세요!');
        }
        else{
            const userInfoAsString = sessionStorage.getItem('userInfo');
            const userInfo = JSON.parse(userInfoAsString);
            const accessToken = userInfo[5];
            const newStartTime = `${startDate}T${startTime}`;
            createTeam(navigate, startStation, endStation, newStartTime, maxPeople, accessToken);
        }
    }

    // 버튼 활성화 구현
    if (startStation && endStation && startDate && startTime && maxPeople){
        const writeBtn = document.getElementById('writeBtn');
        writeBtn.style.backgroundColor = '#6DD93B';
        writeBtn.style.color = ' #fff';
    }
    else if((startStation || endStation || startDate || startTime || maxPeople) && !(startStation && endStation && startDate && startTime && maxPeople)){
        const writeBtn = document.getElementById('writeBtn');
        writeBtn.style.backgroundColor = '#fff';
        writeBtn.style.color = '#eee';
    }

    return(
        <BodyDiv>
            <form onSubmit={handleOnSubmit}>
                <p>출발역 :<span id="startStationSpan">아직없음</span> <span onClick={handleOnClickStation} id="selectStartStation">선택하기</span></p>
                <p>도착역 :<span id="endStationSpan">아직없음</span> <span onClick={handleOnClickStation} id="selectEndStation">선택하기</span></p>
                <p>최대 1주일 이후까지만 설정 가능해요!</p>
                <p>출발 날짜 : <input type="date" name="" id="" onChange={handleOnChangeStartDate}/></p>
                <p>출발 시각 : <input type="time" name="" id="" onChange={handleOnChangeStartTime}/></p>
                <p>최대 인원
                    <input type="radio" name="max" id="2" onChange={onChangeMaxPeople}/>
                    <input type="radio" name="max" id="3" onChange={onChangeMaxPeople}/>
                    <input type="radio" name="max" id="4" onChange={onChangeMaxPeople}/>
                </p>
                <p>
                    <label htmlFor="2" id="2Label">2명</label>
                    <label htmlFor="3" id="3Label">3명</label>
                    <label htmlFor="4" id="4Label">4명</label>
                </p>
                <button type="submit" id="writeBtn">작성하기</button>
            </form>
            {popUp && 
            <div id="popUpLayout" onClick={handleOnClickPopup}>
                <section id="popUp">
                    <h3>먼저 호선부터 선택해요!</h3>
                    <section>
                        <p id="line1">1호선</p>
                        <p id="line2">2호선</p>
                        <p id="line3">3호선</p>
                        <p id="line4">4호선</p>
                        <p id="line5">5호선</p>
                        <p id="line6">6호선</p>
                        <p id="line7">7호선</p>
                        <p id="line8">8호선</p>
                        <p id="line9">9호선</p>
                        <p id="line경강">경강</p>
                        <p id="line경의중앙">경의중앙</p>
                        <p id="line경춘">경춘</p>
                        <p id="line공항">공항철도</p>
                        <p id="line서해">서해</p>
                        <p id="line수인분당">수인분당</p>
                        <p id="line용인">용인에버</p>
                        <p id="line신분당">신분당</p>
                        <p id="line김포골드">김포골드</p>
                        <p id="line인천1">인천1</p>
                        <p id="line인천2">인천2</p>
                        <p id="line신림">신림</p>
                        <p id="line의정부">의정부</p>
                        <p id="line우이">우이신설</p>
                    </section>
                </section>
            </div>}
            {popUp2 && 
            <div id="popUpLayout2" onClick={handleOnClickPopup2}>
                <section id="popUp2">

                </section>
            </div>}
        </BodyDiv>
    )
}

export default Body;