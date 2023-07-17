import { BodyDiv } from "./style";
import { useState } from "react";

function Body() {

    // 팝업 구현
    const [popUp, setPopUp] = useState(true);

    const handleOnClick = (e) => {
        const order = e.target.id;

        if (order==='popUpLayout' || order==='closeBtn'){
            setPopUp(false);
        }

        else if(order === 'kakaoLogin'){
            console.log(order);
        }
    }
    return (
        <BodyDiv>
            {popUp && 
            <div id="popUpLayout" onClick={handleOnClick}>
                <div id="popUp">
                    <p>간편하게 카카오 계정으로</p>
                    <p>로그인 하세요!</p>
                    <div id="kakaoLogin"></div>
                    <p id="closeBtn">닫기</p>
                </div>
            </div>
            }
        </BodyDiv>
    );
}

export default Body;