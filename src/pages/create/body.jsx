import { BodyDiv } from "./style";
import useInput from "../../hooks/useInput";
import { useState } from "react";
function Body() {
    
    // 폼 내의 정보
    const [startStation, setStartStation] = useState('');
    const [endStation, setEndStation] = useState('');
    const [startDate, setStartDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [maxPeople, setMaxPeople] = useState('');

    // 출발 역 선택 시
    const handleOnChangeStartStation = (e) => {
        const startStation = e.target.value;
        setStartStation(startStation);
    }
    
    // 도착 역 선택 시
    const handleOnChangeEndStation = (e) => {
        const endStation = e.target.value;
        setEndStation(endStation);
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
                <p>출발역 :&nbsp;
                    <select name="startStation" id="" onChange={handleOnChangeStartStation}>
                        <option value="">출발역 선택</option>
                        <option value="강변역">강변역②</option>
                        <option value="구의역">구의역②</option>
                        <option value="서울역">서울역①④</option>
                    </select>
                </p>
                <p>도착역 :&nbsp;
                    <select name="startStation" id="" onChange={handleOnChangeEndStation}>
                        <option value="">도착역 선택</option>
                        <option value="강변역">강변역②</option>
                        <option value="구의역">구의역②</option>
                        <option value="서울역">서울역①④</option>
                    </select>
                </p>
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
        </BodyDiv>
    )
}

export default Body;