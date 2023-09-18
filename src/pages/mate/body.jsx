import { BodyDiv } from "./style";
function Body() {
    return(
        <BodyDiv>
            <p>
                <span>서울역</span>
                ⇢
                <span>용산역</span>
            </p>
            
            <p>출발시각 <span>21</span>:<span>30</span></p>
            
            <table border="1">
                <thead>
                    <tr>
                        <th>사진</th>
                        <th>이름</th>
                        <th>온도</th>
                        <th>성별</th>
                        <th>퇴장</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>양민석</td>
                        <td>50</td>
                        <td>남</td>
                        <td>Ⓧ</td>
                    </tr>
                </tbody>
            </table>
            
            <div>
                <p>출발</p>
                <p>도착</p>
            </div>

            <p>댓글 <span>(약속장소 등을 조정해요!)</span></p>
            
            <form>
                <p><input type="text" name="" id="" placeholder="내용을 입력해주세요."/><button type="submit">작성</button></p>
            </form>
            
            <p></p>

            <div>
                <div>
                    <div>
                        <p></p>
                        <p>양민석</p>
                    </div>
                    <div>
                        <p>안녕하세요</p>
                        <p>20:30</p>
                    </div>
                </div>
                <div>
                    <div>
                        <p></p>
                        <p>정원준</p>
                    </div>
                    <div>
                        <p>안녕하세요</p>
                        <p>20:35</p>
                    </div>
                </div>
            </div>
        </BodyDiv>
    )
}

export default Body;