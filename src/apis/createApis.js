import axios from 'axios';

const serverApi = axios.create({
    headers: {
      'Content-Type': 'application/json',
    },
});

// 팀생성
export const createTeam = async (navigate, startStation, endStation, newStartTime, maxPeople, accessToken) => {
    // add accesstoken to header
    serverApi.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

    await serverApi.post(`https://port-0-server-2rrqq2blmoc3kpx.sel5.cloudtype.app/team/create/`, {'start_station':startStation, 'arrival_station':endStation, 'start_time':newStartTime, 'maximum_member':maxPeople}).then((response) => {
      // success
      if(response.data.code === 't-S002'){
        const teamId = response.data.data.team_id;
        navigate(`/mate/${teamId}`);
      }
      // already belongs to another team
      else if(response.data.code === 't-F005'){
        alert('이미 소속된 팀이 있어요!');
        const teamId = response.data.data.team_id;
        navigate(`/mate/${teamId}`);
      }
      // inproper time
      else if (response.data.code === 't-F009'){
        alert('출발 날짜와 시각이 올바르지 않아요!');
      }
    })

}