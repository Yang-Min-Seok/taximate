import axios from 'axios';

const serverApi = axios.create({
    headers: {
      'Content-Type': 'application/json',
    },
});

export const selectGender = async (gender) => {
    console.log(gender);
    await serverApi.post(`https://port-0-server-2rrqq2blmoc3kpx.sel5.cloudtype.app/member/gender/${true}/`).then((response) => {
        console.log(response);
    })
}