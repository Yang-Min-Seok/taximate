import { BodyDiv } from "./style";
function Body() {
    const handleOnClick = (e) => {
        e.preventDefault();
        console.log('search');
    }
    return(
        <BodyDiv>
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
            <button onClick={handleOnClick}>검색하기</button>
        </BodyDiv>
    )
}

export default Body;