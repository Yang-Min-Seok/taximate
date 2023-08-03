import { BodyDiv } from "./style";
import logout from "../../../assets/images/logout.svg";
function Body() {
    
    // 로그인 확인
    const getLoginInfo = () => {
        const profileImage = sessionStorage.getItem('profileImage');
        // 로그인 되었으면,
        if (profileImage){
            console.log(profileImage);
            // 프로필 이미지 띄워주기
            const logInProfile = document.getElementById('logInProfile');
            logInProfile.style.backgroundImage = `url(${profileImage})`;
            logInProfile.style.backgroundSize = `cover`;
            logInProfile.style.borderRadius = `10%`;
            
            // 로그아웃 버튼 만들어주기
            const logOut = document.getElementById('logOut');
            logOut.style.backgroundImage = `url(${logout})`;
        }
    }
    getLoginInfo();

    return (
        <BodyDiv>
            <div id="logout"></div>
            <div>
                <p></p>
            </div>
            <div id="logInProfile"></div>
        </BodyDiv>
    );
}

export default Body;