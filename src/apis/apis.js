import axios from 'axios';

const serverApi = axios.create({
    headers: {
      'Content-Type': 'application/json',
    },
});

// 카카오 로그인
export const kakaoLogin = async (code) => {
    serverApi.get(`http://3.38.150.62:8000/kakao?code=${code}`).then((response) => {
        console.log(response);
    })
}