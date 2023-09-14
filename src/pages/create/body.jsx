import { BodyDiv } from "./style";
function Body() {
    return(
        <BodyDiv>
            <form>
                <p>출발역 : <input type="text" placeholder="출발역 추가하기"/></p>
                <p>도착역 : <input type="text" placeholder="도착역 추가하기"/></p>
                <p>출발 시각 : <input type="time" name="" id="" /></p>
                <p>최대 인원
                    <input type="radio" name="max" id="two" />
                    <input type="radio" name="max" id="three" />
                    <input type="radio" name="max" id="four" />
                </p>
                <p>
                    <label htmlFor="two">2명</label>
                    <label htmlFor="three">3명</label>
                    <label htmlFor="four">4명</label>
                </p>
                <button type="submit">작성하기</button>
            </form>
        </BodyDiv>
    )
}

export default Body;