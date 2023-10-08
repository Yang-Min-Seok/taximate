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
                    <p id='소요산'>소요산</p>
                    <p id='동두천'>동두천</p>
                    <p id='보산'>보산</p>
                    <p id='동두천중앙'>동두천중앙</p>
                    <p id='지행'>지행</p>
                    <p id='덕정'>덕정</p>
                    <p id='덕계'>덕계</p>
                    <p id='양주'>양주</p>
                    <p id='녹양'>녹양</p>
                    <p id='가능'>가능</p>
                    <p id='의정부'>의정부</p>
                    <p id='회룡'>회룡</p>
                    <p id='망월사'>망월사</p>
                    <p id='도봉산'>도봉산</p>
                    <p id='도봉'>도봉</p>
                    <p id='방학'>방학</p>
                    <p id='도화'>도화</p>
                    <p id='중동'>중동</p>
                    <p id='온수(성공회대입구)'>온수(성공회대입구)</p>
                    <p id='도원'>도원</p>
                    <p id='간석'>간석</p>
                    <p id='부개'>부개</p>
                    <p id='소사'>소사</p>
                    <p id='구일'>구일</p>
                    <p id='인천'>인천</p>
                    <p id='동인천'>동인천</p>
                    <p id='제물포'>제물포</p>
                    <p id='주안'>주안</p>
                    <p id='동암'>동암</p>
                    <p id='백운'>백운</p>
                    <p id='부평'>부평</p>
                    <p id='송내'>송내</p>
                    <p id='부천'>부천</p>
                    <p id='역곡'>역곡</p>
                    <p id='오류동'>오류동</p>
                    <p id='개봉'>개봉</p>
                    <p id='광명'>광명</p>
                    <p id='서동탄'>서동탄</p>
                    <p id='당정'>당정</p>
                    <p id='천안'>천안</p>
                    <p id='두정'>두정</p>
                    <p id='직산'>직산</p>
                    <p id='성환'>성환</p>
                    <p id='평택'>평택</p>
                    <p id='지제'>지제</p>
                    <p id='서정리'>서정리</p>
                    <p id='송탄'>송탄</p>
                    <p id='진위'>진위</p>
                    <p id='오산'>오산</p>
                    <p id='오산대'>오산대</p>
                    <p id='세마'>세마</p>
                    <p id='병점'>병점</p>
                    <p id='세류'>세류</p>
                    <p id='독산'>독산</p>
                    <p id='수원'>수원</p>
                    <p id='화서'>화서</p>
                    <p id='성균관대'>성균관대</p>
                    <p id='의왕'>의왕</p>
                    <p id='군포'>군포</p>
                    <p id='금정'>금정</p>
                    <p id='명학'>명학</p>
                    <p id='안양'>안양</p>
                    <p id='관악'>관악</p>
                    <p id='석수'>석수</p>
                    <p id='금천구청'>금천구청</p>
                    <p id='가산디지털단지'>가산디지털단지</p>
                    <p id='구로'>구로</p>
                    <p id='신창(순천향대)'>신창(순천향대)</p>
                    <p id='온양온천'>온양온천</p>
                    <p id='배방'>배방</p>
                    <p id='탕정'>탕정</p>
                    <p id='아산'>아산</p>
                    <p id='쌍용(나사렛대)'>쌍용(나사렛대)</p>
                    <p id='봉명'>봉명</p>
                    <p id='신길'>신길</p>
                    <p id='창동'>창동</p>
                    <p id='녹천'>녹천</p>
                    <p id='월계'>월계</p>
                    <p id='광운대'>광운대</p>
                    <p id='석계'>석계</p>
                    <p id='신이문'>신이문</p>
                    <p id='외대앞'>외대앞</p>
                    <p id='청량리(서울시립대입구)'>청량리(서울시립대입구)</p>
                    <p id='신도림'>신도림</p>
                    <p id='영등포'>영등포</p>
                    <p id='대방'>대방</p>
                    <p id='노량진'>노량진</p>
                    <p id='용산'>용산</p>
                    <p id='남영'>남영</p>
                    <p id='서울역'>서울역</p>
                    <p id='동묘앞'>동묘앞</p>
                    <p id='청량리(서울시립대입구)'>청량리(서울시립대입구)</p>
                    <p id='제기동'>제기동</p>
                    <p id='신설동'>신설동</p>
                    <p id='동대문'>동대문</p>
                    <p id='종로5가'>종로5가</p>
                    <p id='종로3가'>종로3가</p>
                    <p id='종각'>종각</p>
                    <p id='시청'>시청</p>
                    <p id='서울역'>서울역</p>
                </section>
            `
        }
        else if (lineNum === '2'){
            popUp2.innerHTML = `
                <section>
                    <p id='용두(동대문구청)'>용두(동대문구청)</p>
                    <p id='신정네거리'>신정네거리</p>
                    <p id='양천구청'>양천구청</p>
                    <p id='도림천'>도림천</p>
                    <p id='신설동'>신설동</p>
                    <p id='신답'>신답</p>
                    <p id='용답'>용답</p>
                    <p id='충정로(경기대입구)'>충정로(경기대입구)</p>
                    <p id='아현'>아현</p>
                    <p id='이대'>이대</p>
                    <p id='신촌'>신촌</p>
                    <p id='홍대입구'>홍대입구</p>
                    <p id='합정'>합정</p>
                    <p id='당산'>당산</p>
                    <p id='영등포구청'>영등포구청</p>
                    <p id='문래'>문래</p>
                    <p id='신도림'>신도림</p>
                    <p id='대림(구로구청)'>대림(구로구청)</p>
                    <p id='구로디지털단지'>구로디지털단지</p>
                    <p id='신대방'>신대방</p>
                    <p id='신림'>신림</p>
                    <p id='봉천'>봉천</p>
                    <p id='서울대입구(관악구청)'>서울대입구(관악구청)</p>
                    <p id='낙성대'>낙성대</p>
                    <p id='사당'>사당</p>
                    <p id='방배'>방배</p>
                    <p id='서초'>서초</p>
                    <p id='교대(법원.검찰청)'>교대(법원.검찰청)</p>
                    <p id='강남'>강남</p>
                    <p id='역삼'>역삼</p>
                    <p id='선릉'>선릉</p>
                    <p id='삼성(무역센터)'>삼성(무역센터)</p>
                    <p id='종합운동장'>종합운동장</p>
                    <p id='잠실새내'>잠실새내</p>
                    <p id='잠실(송파구청)'>잠실(송파구청)</p>
                    <p id='잠실나루'>잠실나루</p>
                    <p id='강변(동서울터미널)'>강변(동서울터미널)</p>
                    <p id='구의(광진구청)'>구의(광진구청)</p>
                    <p id='건대입구'>건대입구</p>
                    <p id='성수'>성수</p>
                    <p id='뚝섬'>뚝섬</p>
                    <p id='한양대'>한양대</p>
                    <p id='왕십리(성동구청)'>왕십리(성동구청)</p>
                    <p id='상왕십리'>상왕십리</p>
                    <p id='신당'>신당</p>
                    <p id='동대문역사문화공원'>동대문역사문화공원</p>
                    <p id='을지로4가'>을지로4가</p>
                    <p id='을지로3가'>을지로3가</p>
                    <p id='을지로입구'>을지로입구</p>
                    <p id='시청'>시청</p>
                </section>
            `
        }
        else if (lineNum === '3'){
            popUp2.innerHTML = `
                <section>
                                    
                </section>
            `
        }
        else if (lineNum === '4'){
            popUp2.innerHTML = `
                <section>
                                        
                </section>
            `
        }
        else if (lineNum === '5'){
            popUp2.innerHTML = `
                <section>
                                        
                </section>
            `
        }
        else if (lineNum === '6'){
            popUp2.innerHTML = `
                <section>
                                        
                </section>
            `
        }
        else if (lineNum === '7'){
            popUp2.innerHTML = `
                <section>
                                        
                </section>
            `
        }
        else if (lineNum === '8'){
            popUp2.innerHTML = `
                <section>
                                        
                </section>
            `
        }
        else if (lineNum === '9'){
            popUp2.innerHTML = `
                <section>
                                        
                </section>
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