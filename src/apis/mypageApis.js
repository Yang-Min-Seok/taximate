import axios from 'axios';

const serverApi = axios.create({
    headers: {
      'Content-Type': 'application/json',
    },
});

export const getMemberInfo = async(accessToken) => {
  
  serverApi.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

  await serverApi.get(`https://port-0-server-2rrqq2blmoc3kpx.sel5.cloudtype.app/member/information/`).then((response)=> {
    console.log(response);
  })
  
}

export const kakaoLogout = async (navigate, accessToken) => {
  
  serverApi.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

  await serverApi.post(`https://port-0-server-2rrqq2blmoc3kpx.sel5.cloudtype.app/member/logout/`).then((response)=> {
    if(response.data.code === 'm-S003'){
      sessionStorage.removeItem('userInfo');
      sessionStorage.removeItem('login');
      navigate('/');
    }
  })
}