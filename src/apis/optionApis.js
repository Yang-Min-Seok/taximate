import axios from 'axios';

const serverApi = axios.create({
    headers: {
      'Content-Type': 'application/json',
    },
});

export const selectGender = async (gender, accessToken) => {
    // add accesstoken to header
    serverApi.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

    let result = false;
    await serverApi.post(`https://port-0-server-2rrqq2blmoc3kpx.sel5.cloudtype.app/member/gender/${gender}/`).then((response) => {
        if (response.data.code === 'm-S004' || response.data.code === 'm-S005'){
            result = true;
        }    
    });
    
    return result;
}