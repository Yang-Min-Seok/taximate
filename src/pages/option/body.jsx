import { BodyDiv } from "./style";
import { useNavigate } from "react-router-dom"; 
function Body() {
    
    // option 클릭 시
    const navigate = useNavigate();
    const handleOnClick = (e) => {
        const order = e.target.id;
        if (order) {
            navigate(`/${order}`);
        }
    }

    return(
        <BodyDiv onClick={handleOnClick}>
            <div id="create">
                <p>내가 만들기</p>
                <p>함께 탈 사람들을 모아요!</p>
            </div>
            <div id="map">
                <p>지도에서 찾기</p>
                <p>가까운 출발지를 지도에서 확인해요!</p>
            </div>
            <div id="name">
                <p>역 이름으로 찾기</p>
                <p>지하철역 이름을 기준으로 검색해요!</p>
            </div>
        </BodyDiv>
    )
}

export default Body;