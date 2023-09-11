import axios from 'axios';

const serverApi = axios.create({
    headers: {
      'Content-Type': 'application/json',
    },
});

// 카카오 로그인
export const kakaoLogin = async (code) => {
        await serverApi.get(`http://3.38.150.62:8000/kakao?code=${code}`).then((response) => {
            const nickname = response.data.properties.nickname;
            const profileImage = response.data.properties.profile_image;
            console.log(nickname, profileImage);
        })
}