import { BodyDiv } from "./style";
import { useNavigate } from "react-router-dom";
function Body() {
    
    // click on search Btn
    const navigate = useNavigate();
    const handleOnSubmit = (e) => {
        e.preventDefault();
        const startStationListAsString = e.target[0].value;
        const startStationList = startStationListAsString.split(' ');
        const endStationListAsString = e.target[1].value;
        const endStationList = endStationListAsString.split(' ');
        
        if (startStationListAsString.length === 0){
            alert('출발지를 최소 하나 이상 설정해주세요!');
        }
        else if (endStationListAsString.length === 0){
            alert('도착지를 최소 하나 이상 설정해주세요!');
        }
        else{
            navigate(`/path`, {state: {'startStationList': startStationList, 'endStationList': endStationList}});
        }
    }

    return(
        <BodyDiv>
            <form onSubmit={handleOnSubmit}>
                <h3>키워드 검색 <span>(다중 선택 가능)</span></h3>
                <div>
                    <p>출발지</p>
                    <input type="text" placeholder="ex) 서울 용산 시청"/>
                </div>
                <div>
                    <p>도착지</p>
                    <input type="text" placeholder="ex) 강남 신논현 교대"/>
                </div>
                <p>* 여러 키워드로 검색 시 <span>공백(' ')</span> 으로 구분</p>
                <button>검색하기</button>
            </form>
        </BodyDiv>
    )
}

export default Body;