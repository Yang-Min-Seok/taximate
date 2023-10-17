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

export const getTeamComments = async (accessToken, teamId) => {
    
    serverApi.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

    let commentList ;

    await serverApi.get(`https://port-0-server-2rrqq2blmoc3kpx.sel5.cloudtype.app/team/detail/comments/${teamId}/`).then((response)=> {
        if(response.data.code === 't-S006'){
            commentList = response.data.data.comments;
        }
    })

    return commentList;
}

export const addComment = async (accessToken, teamId, comment) => {

    serverApi.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

    await serverApi.post(`https://port-0-server-2rrqq2blmoc3kpx.sel5.cloudtype.app/team/detail/comments/create/${teamId}/`, {'comment': comment}).then((response) => {
        if (response.data.code === 't-S007'){

        }
        else{
            alert('댓글 작성 실패 잠시 후 다시 시도해주세요');
        }
    })

}

export const switchToStart = async (accessToken, teamId, navigate) => {
    
    serverApi.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

    await serverApi.put(`https://port-0-server-2rrqq2blmoc3kpx.sel5.cloudtype.app/team/start/${teamId}/`).then((response)=> {
        if(response.data.code === 't-S009'){

        }
        else{
            alert('출발 변경 실패 잠시 후 다시 시도해 주세요');
        }
    })

}

export const switchToArrive = async (accessToken, teamId, navigate) => {
    
    serverApi.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

    await serverApi.put(`https://port-0-server-2rrqq2blmoc3kpx.sel5.cloudtype.app/team/arrive/${teamId}/`).then((response)=> {
        if(response.data.code === 't-S018'){
            navigate(`/rate/${teamId}`);
        }
        else{
            alert('도착 변경 실패 잠시 후 다시 시도해 주세요');
        }
    })

}

export const participate = async (accessToken, teamId, navigate) => {

    serverApi.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

    await serverApi.put(`https://port-0-server-2rrqq2blmoc3kpx.sel5.cloudtype.app/team/participate/${teamId}/`).then((response) => {
        
        // join
        if (response.data.code === 't-S015'){
            alert('참가되었습니다!');
            window.location.reload();
        }
        else if (response.data.code === 't-F004'){
            alert('팀 인원이 초과되었습니다 ㅠㅠ');
        }
        else if (response.data.code === 't-F003'){
            alert('이미 속한 팀이 있습니다!');
            const existedTeamId = response.data.data.team_id;
            navigate(`/mate/${existedTeamId}`);
        }

        // exit
        else if (response.data.code === 't-S003'){
            alert('팀이 해체되었습니다.');
            navigate(`/option`);
        }
        else if (response.data.code === 't-S004'){
            alert('성공적으로 퇴장처리되었습니다!');
            navigate(`/option`);
        }
        
    })
}