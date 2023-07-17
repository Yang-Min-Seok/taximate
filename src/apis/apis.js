import axios from 'axios';

const serverApi = axios.create({
    headers: {
      'Content-Type': 'application/json',
    },
});

// 카카오 로그인
export const kakaoLogin = async (code) => {
    serverApi.post(`http://34.229.178.111:8000`, {"AuthCode": code}).then((response) => {
        console.log(response);
    })
}