import axios from 'axios';

const serverApi = axios.create({
    headers: {
      'Content-Type': 'application/json',
    },
});

// 카카오 로그인
export const kakaoLogin = async (navigate, code) => {
  await serverApi.get(`https://port-0-server-2rrqq2blmoc3kpx.sel5.cloudtype.app/member/login/${code}/`).then((response) => {
    
    // login success
    if (response.data.code === 'm-S001' || response.data.code === 'm-S002'){
      
      // access token
      const accessToken = response.data.data.access_token;
      
      // user_data
      const gender = response.data.data.user_data.gender;
      const kakaoId = response.data.data.user_data.kakao_id;
      const nickname = response.data.data.user_data.nickname;
      const profileImage = response.data.data.user_data.profile_image;
      const grade = response.data.data.user_data.grade;
      const userInfo = [nickname, kakaoId, gender, profileImage, grade, accessToken];
      const userInfoAsString = JSON.stringify(userInfo);

      // save data to session storage
      sessionStorage.setItem('login', true);
      sessionStorage.setItem('userInfo', userInfoAsString);
      navigate('/option');
    }
  })
}