import axios from 'axios';

const serverApi = axios.create({
    headers: {
      'Content-Type': 'application/json',
    },
});

// 카카오 로그인
export const kakaoLogin = async (code) => {
    let nickname;
    let profileImage;
    try{
        await serverApi.get(`http://3.38.150.62:8000/kakao?code=${code}`).then((response) => {
            nickname = response.data.properties.nickname;
            profileImage = response.data.properties.profile_image;
        })
    }
    catch(err){
        console.log(err);
    }
    return [nickname, profileImage];
}