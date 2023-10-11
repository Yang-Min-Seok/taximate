import { BodyDiv } from "./style";
import { getTeamInfo } from "../../apis/mateApis";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
function Body() {
    
    // set team information
    const teamId = useParams().teamId;
    const setTeamInfo = async() => {
        
        // get team information through api
        const userInfoAsString = sessionStorage.getItem('userInfo');
        const userInfo = JSON.parse(userInfoAsString);
        const accessToken = userInfo[5];
        const teamInfo = await getTeamInfo(teamId, accessToken);
        
        // set team information
        const startStation = teamInfo[0];
        const startStationSpan = document.getElementById('startStationSpan');
        startStationSpan.innerText = startStation;
        
        const endStation = teamInfo[1];
        const endStationSpan = document.getElementById('endStationSpan');
        endStationSpan.innerText = endStation;
        
        const startDate = teamInfo[2].split('T')[0];
        const tempStartDate = startDate.replace('-', '년 ');
        const trimmedStartDate = tempStartDate.replace('-', '월 ');
        const startTime = teamInfo[2].split('T')[1];
        const startTimeP = document.getElementById('startTimeP');
        startTimeP.innerText = `${trimmedStartDate}일 ${startTime}`;
        
        const masterMemberInfo = teamInfo[3];
        let masterMemberGender = '';
        if(masterMemberInfo[1] === 'male'){
            masterMemberGender = '남';
        }
        else{
            masterMemberGender = '여';
        }
        const memberInfoTbody = document.getElementById('memberInfoTbody');
        memberInfoTbody.innerHTML = `
            <tr>
                <td><p></p></td>
                <td>${masterMemberInfo[0]}</td>
                <td>${masterMemberInfo[3]}</td>
                <td>${masterMemberGender}</td>
                <td id="exit">Ⓧ</td>
            </tr>
        `;
        const masterMemberProfileP= memberInfoTbody.childNodes[1].childNodes[1].firstChild;
        masterMemberProfileP.style.backgroundImage = `url(${masterMemberInfo[2]})`
        
        const usualMemberInfoList = teamInfo[5];
        const numOfUsualMember = usualMemberInfoList.length;
        for (let i=0; i<numOfUsualMember; i++){
            const prevMember =  memberInfoTbody.innerHTML;

            // usual member info
            const profileImage = usualMemberInfoList[i].profile_image;
            const nickname = usualMemberInfoList[i].nickname;
            const grade = usualMemberInfoList[i].grade;
            let gender = usualMemberInfoList[i].gender;
            if(gender === 'female'){
               gender = '여'; 
            }
            else{
                gender = '남';
            }

            memberInfoTbody.innerHTML = prevMember + `
                <tr>
                    <td><p style="background-image : url(${profileImage})"></p></td>
                    <td>${nickname}</td>
                    <td>${grade}</td>
                    <td>${gender}</td>
                    <td id="exit">Ⓧ</td>
                </tr>   
            `
        }
    }

    // 멤버 리스트 클릭 시
    const handleOnClickMemberList = (e) => {
        console.log(e.target.id);
    }

    useEffect(() => {
        setTeamInfo();
    }, [])

    return(
        <BodyDiv>
            <p>
                <span id="startStationSpan"></span>
                ⇢
                <span id="endStationSpan"></span>
            </p>
            
            <p id="startTimeP"></p>
            
            <table border="1" onClick={handleOnClickMemberList}>
                <thead>
                    <tr>
                        <th>사진</th>
                        <th>이름</th>
                        <th>등급</th>
                        <th>성별</th>
                        <th>퇴장</th>
                    </tr>
                </thead>
                <tbody id="memberInfoTbody">
                </tbody>
            </table>
            
            <div>
                <p>출발</p>
                <p>도착</p>
            </div>

            <p>댓글 <span>(약속장소 등을 조정해요!)</span></p>
            
            <form>
                <p><input type="text" name="" id="" placeholder="내용을 입력해주세요."/><button type="submit">작성</button></p>
            </form>
            
            <p id="commentRefreshBtn"></p>

            <div id="commentDiv">
                <div>
                    <div>
                        <p></p>
                        <p>양민석</p>
                    </div>
                    <div>
                        <p>안녕하세요</p>
                        <p>20:30</p>
                    </div>
                </div>
                <div>
                    <div>
                        <p></p>
                        <p>정원준</p>
                    </div>
                    <div>
                        <p>안녕하세요</p>
                        <p>20:35</p>
                    </div>
                </div>
            </div>
        </BodyDiv>
    )
}

export default Body;