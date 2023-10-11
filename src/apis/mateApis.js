import axios from 'axios';

const serverApi = axios.create({
    headers: {
      'Content-Type': 'application/json',
    },
});

export const getTeamInfo = async (teamId, accessToken) => {
    
    serverApi.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    let startStation = '';
    let endStation = '';
    let startTime = '';
    let masterMemberInfo = [];
    let state = '';
    let usualMemberInfo = [];
    let memberClass = '';
    
    await serverApi.get(`https://port-0-server-2rrqq2blmoc3kpx.sel5.cloudtype.app/team/detail/${teamId}`).then((response)=> {

        if(response.data.code === 't-S005'){
            startStation = response.data.data.start_station;
            endStation = response.data.data.arrival_station;
            startTime = response.data.data.start_time;
            masterMemberInfo = [response.data.data.master_member.nickname, response.data.data.master_member.gender, response.data.data.master_member.profile_image, response.data.data.master_member.grade];
            state = response.data.data.state;
            usualMemberInfo = response.data.data.usual_member;
            memberClass = response.data.data.member_class;
        }

    })
    
    return [startStation, endStation, startTime, masterMemberInfo, state, usualMemberInfo, memberClass];

}