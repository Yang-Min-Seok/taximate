import axios from 'axios';

const serverApi = axios.create({
    headers: {
      'Content-Type': 'application/json',
    },
});

// 카카오 로그인
export const kakaoLogin = async (navigate, code) => {
  await serverApi.get(`https://port-0-server-2rrqq2blmoc3kpx.sel5.cloudtype.app/member/login/${code}/`).then((response) => {
    
    // in case of new user
    if (response.data.code === 'm-S001'){
      const gender = response.data.data.gender;
      const kakaoId = response.data.data.kakao_id;
      const nickname = response.data.data.nickname;
      const profileImage = response.data.data.profile_image;
      const grade = response.data.data.grade;
      const userInfo = [nickname, kakaoId, gender, profileImage, grade];
      const userInfoAsString = JSON.stringify(userInfo);
      sessionStorage.setItem('login', true);
      sessionStorage.setItem('userInfo', userInfoAsString);
      navigate('/option');
    }

    // in case of existed user
    else if (response.data.code === 'm-S002'){
      const gender = response.data.data.gender;
      const kakaoId = response.data.data.kakao_id;
      const nickname = response.data.data.nickname;
      const profileImage = response.data.data.profile_image;
      const grade = response.data.data.grade;
      const userInfo = [nickname, kakaoId, gender, profileImage, grade];
      const userInfoAsString = JSON.stringify(userInfo);
      sessionStorage.setItem('login', true);
      sessionStorage.setItem('userInfo', userInfoAsString);
      navigate('/option');
    }
  })
}