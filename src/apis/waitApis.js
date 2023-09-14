import axios from 'axios';

const serverApi = axios.create({
    headers: {
      'Content-Type': 'application/json',
    },
});

// 카카오 로그인
export const kakaoLogin = async (navigate, code) => {
        await serverApi.get(`http://54.180.81.103:8000/kakao?code=${code}`).then((response) => {
          console.log(response);
          const nickname = response.data.properties.nickname;
          const profileImage = response.data.properties.profile_image;
          navigate(`/option`, {state: {'nickname':nickname, 'profileImage':profileImage}});
        })
}