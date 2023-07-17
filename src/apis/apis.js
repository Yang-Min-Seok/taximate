import axios from 'axios';

const serverApi = axios.create({
    headers: {
      'Content-Type': 'application/json',
    },
});

// 카카오 로그인
const kakaoLogin = async () => {
    serverApi.post(`서버주소`, {}).then((response) => {
        console.log(response);
    })
}