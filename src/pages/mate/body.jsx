import { BodyDiv } from "./style";
import { addComment, getTeamComments, getTeamInfo, switchToStart } from "../../apis/mateApis";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useInput from "../../hooks/useInput";
function Body() {
    
    // set team information
    const teamId = useParams().teamId;
    const navigate = useNavigate();
    const setTeamInfo = async() => {
        
        // get team information through api
        const userInfoAsString = sessionStorage.getItem('userInfo');
        const userInfo = JSON.parse(userInfoAsString);
        const accessToken = userInfo[5];
        const teamInfo = await getTeamInfo(teamId, accessToken);
        
        // check state
        const state = teamInfo[4];
        
        // before arriving
        if (state === 0){

        }
        // after start
        else if (state === 1){
            const startBtn = document.getElementById('startBtn');
            startBtn.style.backgroundColor = '#6DD93B';
            startBtn.style.color = '#03588C';
        }
        // after arriving
        else if (state === 2){
            navigate(`/rate`);
            return ;
        }

        // check memberClass
        // case 1 (master)
        const memberClass = teamInfo[6];
        if (memberClass === 2){
            setCommentList(accessToken, teamId);
        }
        // case 2 (usual member)
        else if (memberClass === 1){
            const btnBox = document.getElementById('btnBox');
            btnBox.style.display = 'none';
            setCommentList(accessToken, teamId);
        }
        // case 3 (not a member)
        else if (memberClass === 0) {
            const btnBox = document.getElementById('btnBox');
            btnBox.style.display = 'none';
            const commentGuide = document.getElementById('commentGuide');
            commentGuide.style.display = 'none';
            const commentForm = document.getElementById('commentForm');
            commentForm.style.display = 'none';
            const commentRefreshBtn = document.getElementById('commentRefreshBtn');
            commentRefreshBtn.style.display = 'none';
            const commentDiv = document.getElementById('commentDiv');
            commentDiv.style.display = 'none';
            const joinBtn = document.getElementById('joinBtn');
            joinBtn.style.display = 'block';
        }

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

    // set team Comments
    const setCommentList = async (accessToken, teamId) => {
        const commentList = await getTeamComments(accessToken, teamId);
        const lenOfCommentList = commentList.length;
        
        const commentDiv = document.getElementById('commentDiv');
        commentDiv.innerHTML = '';
        for (let i = lenOfCommentList - 1; i > 0; i--){
            
            const prevComment = commentDiv.innerHTML;

            const comment = commentList[i].comment;
            const time = commentList[i].created_at;
            const nickname = commentList[i].member.nickname;
            const profileImage = commentList[i].member.profile_image;

            commentDiv.innerHTML = prevComment + `
                <section>
                    <div>
                        <p style="background-image:url(${profileImage})"></p>
                        <p>${nickname}</p>
                    </div>
                    <div>
                        <p>${comment}</p>
                        <p>${time}</p>
                    </div>
                </section>
            `
        }
    }

    // 멤버 리스트 클릭 시
    const handleOnClickMemberList = (e) => {
        console.log(e.target.id);
    }

    // 참가하기 버튼 누를 시(논회원)
    const handleOnClickJoinBtn = () => {
        const check = window.confirm('정말 참가하시겠습니까?');
        if (check) {
            // 참가 api
        }
    }

    // 출발버튼 클릭 시
    const handleOnClickStart = async () => {
        const isStarted = document.getElementById('startBtn').style.color === 'rgb(3, 88, 140)';
        if (isStarted) {
            alert('이미 출발 상태에요! 도착 후 도착 버튼을 눌러주세요');
        }
        else{
            const check = window.confirm('한 번 출발 설정 후에는 되돌릴 수 없어요! 출발로 변경할까요?');
            if (check) {
                const userInfoAsString = sessionStorage.getItem('userInfo');
                const userInfo = JSON.parse(userInfoAsString);
                const accessToken = userInfo[5];
                await switchToStart(accessToken, teamId);
                setTeamInfo();
            }
        }
    }
    // 도착 버튼 클릭 시
    const handleOnClickEnd = () => {
        
    }

    // 댓글 작성 시
    const [comment, onChangeComment, setComment] = useInput('');
    const handleOnSubmitComment = async(e) => {
        if(!comment){
            alert('내용을 입력해주세요!');
        }
        else{
            e.preventDefault();
            const commentInput = document.getElementById('commentInput');
            commentInput.value = '';
            const userInfoAsString = sessionStorage.getItem('userInfo');
            const userInfo = JSON.parse(userInfoAsString);
            const accessToken = userInfo[5];
            await addComment(accessToken, teamId, comment);
            setCommentList(accessToken, teamId);
        }
    }

    // 댓글 새로고침
    const refreshEventOver = () => {
        const refreshBtn = document.getElementById('commentRefreshBtn');
        refreshBtn.style.transform = 'rotate(0deg)';
    }
    const handleOnClickCommentRefreshBtn = (e) => {
        const refreshBtn = e.target;
        refreshBtn.style.transition = 'all 0.3s';
        refreshBtn.style.transform = 'rotate(90deg)';
        setTimeout(refreshEventOver, 300);

        const userInfoAsString = sessionStorage.getItem('userInfo');
        const userInfo = JSON.parse(userInfoAsString);
        const accessToken = userInfo[5];
        setCommentList(accessToken, teamId);
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
            
            <div id="btnBox">
                <p id="startBtn" onClick={handleOnClickStart}>출발</p>
                <p id="endBtn" onClick={handleOnClickEnd}>도착</p>
            </div>

            <p id="commentGuide">댓글 <span>(약속장소 등을 조정해요!)</span></p>
            
            <form id="commentForm" onSubmit={handleOnSubmitComment}>
                <p><input type="text" name="" id="commentInput" placeholder="내용을 입력해주세요." onChange={onChangeComment}/><button type="submit">작성</button></p>
            </form>
            
            <p id="commentRefreshBtn" onClick={handleOnClickCommentRefreshBtn}></p>

            <div id="commentDiv">
            </div>

            <button id="joinBtn" onClick={handleOnClickJoinBtn}>참가하기</button>
        </BodyDiv>
    )
}

export default Body;