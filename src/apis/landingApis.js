import axios from 'axios';

const serverApi = axios.create({
    headers: {
      'Content-Type': 'application/json',
    },
});

export const getTeamNumber = async() => {
    let teamNumber = 0;
    await serverApi.get(`https://port-0-server-2rrqq2blmoc3kpx.sel5.cloudtype.app/team/`).then((response)=> {
        if (response.data.code === 't-S001'){
            teamNumber = response.data.data.teams;
        }
    })
    return teamNumber;
}