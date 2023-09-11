import Wrapper from "../../style/wrapper";
import Header from "../../style/global/header";
import Body from "./body";
import Footer from "../../style/global/footer";

function MakeTeam() {
    return(
        <Wrapper>
            <Header></Header>
            <Body></Body>
            <Footer></Footer>
        </Wrapper>
    );
}

export default MakeTeam;
