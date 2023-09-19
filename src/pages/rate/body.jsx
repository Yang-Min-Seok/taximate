import { BodyDiv } from "./style";
function Body() {
    const handleOnChangeStar = (e) => {
        const selectedStarNum = e.target.id.split('star')[0];
        const selectedStarMemberId = e.target.id.split('star')[1];

        for(let i=1; i<=5; i++){
            const target = document.getElementById(`${i}star${selectedStarMemberId}Label`);
            target.style.color = '#000';
        }
        for(let i=1; i<=selectedStarNum; i++){
            const target = document.getElementById(`${i}star${selectedStarMemberId}Label`);
            target.style.color = 'gold';
        }

    }
    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(e);
    }
    return(
        <BodyDiv>
            <h3>함께한 메이트를 평가해주세요!</h3>
            <form onSubmit={handleOnSubmit}>
                <div>
                    <div>
                        <div></div>
                        <p>양민석</p>
                    </div>
                    <div>
                        <input type="radio" name="1" id="1star1" onChange={handleOnChangeStar}/>
                        <input type="radio" name="1" id="2star1" onChange={handleOnChangeStar}/>
                        <input type="radio" name="1" id="3star1" onChange={handleOnChangeStar}/>
                        <input type="radio" name="1" id="4star1" onChange={handleOnChangeStar}/>
                        <input type="radio" name="1" id="5star1" onChange={handleOnChangeStar}/>
                        <label htmlFor="1star1" id="1star1Label">☆</label>
                        <label htmlFor="2star1" id="2star1Label">☆</label>
                        <label htmlFor="3star1" id="3star1Label">☆</label>
                        <label htmlFor="4star1" id="4star1Label">☆</label>
                        <label htmlFor="5star1" id="5star1Label">☆</label>
                    </div>
                </div>
                <div>
                    <div>
                        <div></div>
                        <p>정원준</p>
                    </div>
                    <div>
                        <input type="radio" name="2" id="1star2" onChange={handleOnChangeStar}/>
                        <input type="radio" name="2" id="2star2" onChange={handleOnChangeStar}/>
                        <input type="radio" name="2" id="3star2" onChange={handleOnChangeStar}/>
                        <input type="radio" name="2" id="4star2" onChange={handleOnChangeStar}/>
                        <input type="radio" name="2" id="5star2" onChange={handleOnChangeStar}/>
                        <label htmlFor="1star2" id="1star2Label">☆</label>
                        <label htmlFor="2star2" id="2star2Label">☆</label>
                        <label htmlFor="3star2" id="3star2Label">☆</label>
                        <label htmlFor="4star2" id="4star2Label">☆</label>
                        <label htmlFor="5star2" id="5star2Label">☆</label>
                    </div>
                </div>
                <button type="submit">평가완료</button>
            </form>
        </BodyDiv>
    )
}

export default Body;