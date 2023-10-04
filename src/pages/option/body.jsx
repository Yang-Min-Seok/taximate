import { BodyDiv } from "./style";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { selectGender } from "../../apis/optionApis";
function Body() {
    
    // option 클릭 시
    const navigate = useNavigate();
    const handleOnClick = async (e) => {
        const order = e.target.id;
        // popUP
        // popUpLayout 클릭 시
        if (order === 'popUpLayout'){
            alert('성별을 선택해주세요!');
        }
        // 남자 클릭 시
        else if(order === 'male'){
            const male = document.getElementById('male');
            const female = document.getElementById('female');
            male.style.backgroundColor = '#eee';
            female.style.backgroundColor = '#fff';
            setSelectedGender('male');
        }
        // 여자 클릭 시
        else if (order === 'female'){
            const male = document.getElementById('male');
            const female = document.getElementById('female');
            male.style.backgroundColor = '#fff';
            female.style.backgroundColor = '#eee';
            setSelectedGender('female');
        }
        // 제출 클릭 시
        else if(order === 'submit'){
            const accessToken = userInfo[5];
            const result = await selectGender(selectedGender, accessToken);
            if (result) {
                // update selectedGender
                userInfo[2] = selectedGender;
                const userInfoAsString = JSON.stringify(userInfo);
                sessionStorage.setItem('userInfo', userInfoAsString);
                // close popUp
                setPopUp(false);
            }
        }
        // non popUp
        // 버튼 클릭 시
        else if (order === 'map' || order === 'create' || order === 'name') {
            navigate(`/${order}`);
        }
    }

    // popUp 구현 (성별 미입력 유저 방문 시)
    const [popUp, setPopUp] = useState(false);
    const userInfoAsString = sessionStorage.getItem('userInfo');
    const userInfo = JSON.parse(userInfoAsString);
    const gender = userInfo[2];
    const [ selectedGender, setSelectedGender ] = useState(null);
    const getGender = () => {
        setPopUp(true);
    }
    useEffect(() => {
        if(!gender){
            getGender();
        }
    }, [gender])

    return(
        <BodyDiv onClick={handleOnClick}>
            <div id="create">
                <p>내가 만들기</p>
                <p>함께 탈 사람들을 모아요!</p>
            </div>
            <div id="map">
                <p>지도에서 찾기</p>
                <p>가까운 출발지를 지도에서 확인해요!</p>
            </div>
            <div id="name">
                <p>역 이름으로 찾기</p>
                <p>지하철역 이름을 기준으로 검색해요!</p>
            </div>
            {popUp && 
            <div id="popUpLayout">
                <section id="popUp">
                    <h3>성별을 입력해주세요! <span>(필수)</span></h3>
                    <section>
                        <p id="male">남자</p>
                        <p id="female">여자</p>
                    </section>
                    <button id="submit">입력완료</button>
                </section>
            </div>}
        </BodyDiv>
    )
}

export default Body;