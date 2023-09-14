import { BodyDiv } from "./style";
function Body() {
    
    // 카카오 로그인 구현
    const handleLogin = () => {
        const Rest_api_key = 'd679f25e59dbc97619baf1256489b449';
        const redirect_uri = `http://localhost:3000/wait`;
        const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`
        window.location.href = kakaoURL;
    }

    return(
        <BodyDiv>
            <h1>지금 <span>30</span>팀이 택시를 같이 타고 싶어해요!</h1>
            <div></div>
            <div onClick={handleLogin}></div>
        </BodyDiv>
    )
}

export default Body;