import { BodyDiv } from "./style";
import { useState } from "react";
function Body() {
    
    // 폼 내의 정보
    const [startStation, setStartStation] = useState('');
    const [endStation, setEndStation] = useState('');
    const [startDate, setStartDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [maxPeople, setMaxPeople] = useState('');


    // popUp
    const [popUp, setPopUp] = useState(false);
    // 출발, 도착 역 선택 시
    const handleOnClickStation = (e) => {
        const order = e.target.id;
        setPopUp(true);

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
    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(startStation);
        console.log(endStation);
        console.log(startDate);
        console.log(startTime);
        console.log(maxPeople);
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
                <p>출발역 <span></span> <span onClick={handleOnClickStation} id="selectStartStation">선택하기</span></p>
                <p>도착역 <span></span> <span onClick={handleOnClickStation} id="selectEndStation">선택하기</span></p>
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
            <div id="popUpLayout">
                <section id="popUp">
                    <h3>먼저 호선부터 선택해요!</h3>
                    <section>
                        <p>1호선</p><p>2호선</p><p>3호선</p>
                        <p>4호선</p><p>5호선</p><p>6호선</p>
                        <p>7호선</p><p>8호선</p><p>9호선</p>
                    </section>
                </section>
            </div>}
        </BodyDiv>
    )
}

export default Body;