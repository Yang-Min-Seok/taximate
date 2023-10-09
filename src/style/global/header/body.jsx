import { BodyDiv } from "./style";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
function Body() {

    // 로그인 여부
    const login = sessionStorage.getItem('login');
    
    // 프로필 이미지 띄우기
    const [profileImage, setProfileImage] = useState(''); 
    useEffect(() => {
        if (login) {
            const userInfoAsString = sessionStorage.getItem('userInfo');
            const userInfo = JSON.parse(userInfoAsString);
            const profileImageUrl = userInfo[3];

            if (profileImageUrl) {
                setProfileImage(profileImageUrl);
            }
        }
    }, [login]);
    if(profileImage){
        const profileImageBox = document.getElementById('profileImageBox');
        profileImageBox.style.backgroundImage = `url(${profileImage})`;
    }

    // 로고 클릭 시
    const navigate = useNavigate();
    const handleOnClickLogo = () => {
        // 로그인 상태라면
        if(login){
            navigate('/option');
        }
    }

    // 프로필 이미지 클릭 시
    const handleOnClickProfile = () => {
        navigate(`/mypage`);
    }

    return (
        <BodyDiv>
            <div id="back"></div>
            <div id="logo" onClick={handleOnClickLogo}></div>
            <div id="profileImageBox" onClick={handleOnClickProfile}></div>
        </BodyDiv>
    );
}

export default Body;