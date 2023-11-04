import { BodyDiv } from "./style";
import { useState, useEffect } from "react";
import { getRateForm } from "../../apis/rateApis";
import { useParams, useNavigate } from "react-router-dom";
function Body() {
    
    // teamId
    const teamId = useParams().teamId;
    
    // accessToken
    const userInfoAsString = sessionStorage.getItem('userInfo');
    const userInfo = JSON.parse(userInfoAsString);
    const accessToken = userInfo[5];

    // currRateList
    const [currRateList, setCurrRateList] = useState([]);

    // set form
    const navigate = useNavigate();
    const setRateForm = async () => {
        const memberList = await getRateForm(accessToken, teamId);
        const lenOfMemberList = memberList.length;
        const memberBox = document.getElementById('memberBox');
        memberBox.innerHTML = ``;

        for (let i=0; i<lenOfMemberList; i++) {
            const prevMember = memberBox.innerHTML;
            
            const newMemberKakaoId = memberList[i].kakao_id;
            const newMemberNickname = memberList[i].nickname;
            const newMemberProfileImage = memberList[i].profile_image;

            // 이미 currRateList에 해당 멤버가 있는지 확인
            const memberExists = currRateList.some(item => item.memberKakaoId === newMemberKakaoId);

            if (!memberExists) {
                // setCurrRateList for the new member
                setCurrRateList(prevRateList => [
                    ...prevRateList,
                    { memberKakaoId: newMemberKakaoId, rate: 0 }
                ]);
            }

            // fill the memberBox
            memberBox.innerHTML = prevMember + `
                <div>
                    <div>
                        <div style="background-image:url(${newMemberProfileImage})"></div>
                        <p>${newMemberNickname}</p>
                    </div>
                    <div>
                        <input type="radio" name="1" id="1star${newMemberKakaoId}" />
                        <input type="radio" name="1" id="2star${newMemberKakaoId}" />
                        <input type="radio" name="1" id="3star${newMemberKakaoId}" />
                        <input type="radio" name="1" id="4star${newMemberKakaoId}" />
                        <input type="radio" name="1" id="5star${newMemberKakaoId}" />
                        <label htmlFor="1star1" id="1star${newMemberKakaoId}Label">☆</label>
                        <label htmlFor="2star1" id="2star${newMemberKakaoId}Label">☆</label>
                        <label htmlFor="3star1" id="3star${newMemberKakaoId}Label">☆</label>
                        <label htmlFor="4star1" id="4star${newMemberKakaoId}Label">☆</label>
                        <label htmlFor="5star1" id="5star${newMemberKakaoId}Label">☆</label>
                    </div>
                </div>
            `
        }
    }
    
    // click on stars
    const handleOnChangeStar = (e) => {
        try{
            const selectedStarLabelId = e.target.id.split('star')[1];
            const selectedMemberId = selectedStarLabelId.split('Label')[0];
            const selectedStar = e.target.id.split('star')[0];

            // 업데이트할 새 currRateList 배열 생성
            const newRateList = currRateList.map(item => {
                if (item.memberKakaoId === Number(selectedMemberId)) {
                    // 선택한 멤버에 대한 rate를 업데이트
                    return { memberKakaoId: item.memberKakaoId, rate: selectedStar };
                } else {
                    return item;
                }
            });

            for(let i=1; i<=5; i++){
                const target = document.getElementById(`${i}star${selectedStarLabelId}`);
                target.style.color = '#000';
            }
            for(let i=1; i<=selectedStar; i++){
                const target = document.getElementById(`${i}star${selectedStarLabelId}`);
                target.style.color = 'gold';
            }

            // 새로운 currRateList로 상태 업데이트
            setCurrRateList(newRateList);
        }

        catch(err){
            
        }
    }
    console.log(currRateList);
    // click on 평가완료 Btn
    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(e);
    }

    useEffect(() => {
        setRateForm();
    }, [])

    return(
        <BodyDiv>
            <h3>함께한 메이트를 평가해주세요 !</h3>
            <form onSubmit={handleOnSubmit}>
                <div id="memberBox" onClick={handleOnChangeStar}></div>
                <button type="submit">평가완료</button>
            </form>
        </BodyDiv>
    )
}

export default Body;