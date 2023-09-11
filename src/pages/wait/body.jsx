import { BodyDiv } from "./style";
import { kakaoLogin } from "../../apis/waitApis";

function Body() {
    // 개인 식별 코드
    const code = new URL(window.location.href).searchParams.get('code');
    kakaoLogin(code);

    return(
        <BodyDiv>
            <div></div>
            <p>잠시만 기다려주세요...</p>
        </BodyDiv>
    )
}

export default Body;