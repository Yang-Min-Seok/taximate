import axios from 'axios';

const serverApi = axios.create({
    headers: {
      'Content-Type': 'application/json',
    },
});

export const searchTeam = async(accessToken, startStationList, endStationList, navigate) => {
    
    let result;

    serverApi.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

    await serverApi.post(`https://port-0-server-2rrqq2blmoc3kpx.sel5.cloudtype.app/team/search/`, {'start_station':startStationList, 'arrival_station':endStationList}).then((response)=>{
        
        // team exists 
        if (response.data.code === 't-S008'){
            result = response.data.data;
        }

        // team doesn't exist
        else if (response.data.code === 't-S010'){
            const check = window.confirm('조건에 맞는검색 결과가 없어요. 직접 팀을 만들어 보시겠어요?');
            if (check){
                navigate('/create');
            }
            else {
                navigate('/option');
            }
        }
    })

    return result;

}