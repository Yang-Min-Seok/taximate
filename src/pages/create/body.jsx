import { BodyDiv } from "./style";
import { useState } from "react";
import { createTeam } from "../../apis/createApis";
import { useNavigate } from "react-router-dom";
function Body() {
    
    // 폼 내의 정보
    const [startStation, setStartStation] = useState('');
    const [endStation, setEndStation] = useState('');
    const [startDate, setStartDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [maxPeople, setMaxPeople] = useState('');

    // popUp
    const [popUp, setPopUp] = useState(false);
    const [popUp2, setPopUp2] = useState(false);
    const [startOrEnd, setStartOrEnd] = useState('');
    // 출발, 도착 역 선택 시
    const handleOnClickStation = (e) => {
        const order = e.target.id;
        if (order === 'selectStartStation'){
            setStartOrEnd('start');
        }
        else if (order === 'selectEndStation'){
            setStartOrEnd('end');
        }
        setPopUp(true);
    }
    // popUp 클릭 시
    const handleOnClickPopup = async(e) => {
        const order = e.target.id;
        if(order === 'popUpLayout'){
            setPopUp(false);
        }
        else if (order.slice(0,4) === 'line'){
            const lineNum = order.slice(4);
            await setPopUp(false);
            await setPopUp2(true);
            fillPopUp2(lineNum);
        }
    }
    // popUp 2 클릭 시
    const handleOnClickPopup2 = (e) => {
        const order = e.target.id;
        if(order === 'popUpLayout2'){
            setPopUp2(false);
        }
        else if (order === 'popUp2'){
            // 무시
        }
        else if (order) {
            if (startOrEnd === 'start'){
                setStartStation(order);
                const startStationSpan = document.getElementById('startStationSpan');
                startStationSpan.innerText = order;
            }
            else if (startOrEnd === 'end'){
                setEndStation(order);
                const endStationSpan = document.getElementById('endStationSpan');
                endStationSpan.innerText = order;
            }
            setPopUp2(false);
        }
    }
    // popUp2 채우기
    const fillPopUp2 = (lineNum) => {
        const popUp2 = document.getElementById('popUp2');
        if (lineNum === '1'){
            popUp2.innerHTML = `
                <section>
                    <p id='가능'>가능</p>
                    <p id='가산디지털단지'>가산디지털단지</p>
                    <p id='간석'>간석</p>
                    <p id='개봉'>개봉</p>
                    <p id='관악'>관악</p>
                    <p id='광명'>광명</p>
                    <p id='광운대'>광운대</p>
                    <p id='구로'>구로</p>
                    <p id='구일'>구일</p>
                    <p id='군포'>군포</p>
                    <p id='금정'>금정</p>
                    <p id='금천구청'>금천구청</p>
                    <p id='남영'>남영</p>
                    <p id='노량진'>노량진</p>
                    <p id='녹양'>녹양</p>
                    <p id='녹천'>녹천</p>
                    <p id='당정'>당정</p>
                    <p id='대방'>대방</p>
                    <p id='덕계'>덕계</p>
                    <p id='덕정'>덕정</p>
                    <p id='도봉'>도봉</p>
                    <p id='도봉산'>도봉산</p>
                    <p id='도원'>도원</p>
                    <p id='도화'>도화</p>
                    <p id='독산'>독산</p>
                    <p id='동대문'>동대문</p>
                    <p id='동두천'>동두천</p>
                    <p id='동두천중앙'>동두천중앙</p>
                    <p id='동묘앞'>동묘앞</p>
                    <p id='동암'>동암</p>
                    <p id='동인천'>동인천</p>
                    <p id='두정'>두정</p>
                    <p id='망월사'>망월사</p>
                    <p id='명학'>명학</p>
                    <p id='방학'>방학</p>
                    <p id='배방'>배방</p>
                    <p id='백운'>백운</p>
                    <p id='병점'>병점</p>
                    <p id='보산'>보산</p>
                    <p id='봉명'>봉명</p>
                    <p id='부개'>부개</p>
                    <p id='부천'>부천</p>
                    <p id='부평'>부평</p>
                    <p id='서동탄'>서동탄</p>
                    <p id='서울역'>서울역</p>
                    <p id='서정리'>서정리</p>
                    <p id='석계'>석계</p>
                    <p id='석수'>석수</p>
                    <p id='성균관대'>성균관대</p>
                    <p id='성환'>성환</p>
                    <p id='세류'>세류</p>
                    <p id='세마'>세마</p>
                    <p id='소사'>소사</p>
                    <p id='소요산'>소요산</p>
                    <p id='송내'>송내</p>
                    <p id='송탄'>송탄</p>
                    <p id='수원'>수원</p>
                    <p id='시청'>시청</p>
                    <p id='신길'>신길</p>
                    <p id='신도림'>신도림</p>
                    <p id='신설동'>신설동</p>
                    <p id='신이문'>신이문</p>
                    <p id='신창(순천향대)'>신창(순천향대)</p>
                    <p id='쌍용(나사렛대)'>쌍용(나사렛대)</p>
                    <p id='아산'>아산</p>
                    <p id='안양'>안양</p>
                    <p id='양주'>양주</p>
                    <p id='역곡'>역곡</p>
                    <p id='영등포'>영등포</p>
                    <p id='오류동'>오류동</p>
                    <p id='오산'>오산</p>
                    <p id='오산대'>오산대</p>
                    <p id='온수(성공회대입구)'>온수(성공회대입구)</p>
                    <p id='온양온천'>온양온천</p>
                    <p id='외대앞'>외대앞</p>
                    <p id='용산'>용산</p>
                    <p id='월계'>월계</p>
                    <p id='의왕'>의왕</p>
                    <p id='의정부'>의정부</p>
                    <p id='인천'>인천</p>
                    <p id='제기동'>제기동</p>
                    <p id='제물포'>제물포</p>
                    <p id='종각'>종각</p>
                    <p id='종로3가'>종로3가</p>
                    <p id='종로5가'>종로5가</p>
                    <p id='주안'>주안</p>
                    <p id='중동'>중동</p>
                    <p id='지제'>지제</p>
                    <p id='지행'>지행</p>
                    <p id='직산'>직산</p>
                    <p id='진위'>진위</p>
                    <p id='창동'>창동</p>
                    <p id='천안'>천안</p>
                    <p id='청량리(서울시립대입구)'>청량리(서울시립대입구)</p>
                    <p id='평택'>평택</p>
                    <p id='화서'>화서</p>
                    <p id='회기'>회기</p>
                    <p id='회룡'>회룡</p>                
                </section>
            `
        }
        else if (lineNum === '2'){
            popUp2.innerHTML = `
                <section>
                    <p id='강남'>강남</p>
                    <p id='강변(동서울터미널)'>강변(동서울터미널)</p>
                    <p id='건대입구'>건대입구</p>
                    <p id='교대(법원.검찰청)'>교대(법원.검찰청)</p>
                    <p id='구로디지털단지'>구로디지털단지</p>
                    <p id='구의(광진구청)'>구의(광진구청)</p>
                    <p id='낙성대'>낙성대</p>
                    <p id='당산'>당산</p>
                    <p id='대림(구로구청)'>대림(구로구청)</p>
                    <p id='도림천'>도림천</p>
                    <p id='동대문역사문화공원'>동대문역사문화공원</p>
                    <p id='뚝섬'>뚝섬</p>
                    <p id='문래'>문래</p>
                    <p id='방배'>방배</p>
                    <p id='봉천'>봉천</p>
                    <p id='사당'>사당</p>
                    <p id='삼성(무역센터)'>삼성(무역센터)</p>
                    <p id='상왕십리'>상왕십리</p>
                    <p id='서울대입구(관악구청)'>서울대입구(관악구청)</p>
                    <p id='서초'>서초</p>
                    <p id='선릉'>선릉</p>
                    <p id='성수'>성수</p>
                    <p id='시청'>시청</p>
                    <p id='신답'>신답</p>
                    <p id='신당'>신당</p>
                    <p id='신대방'>신대방</p>
                    <p id='신도림'>신도림</p>
                    <p id='신림'>신림</p>
                    <p id='신설동'>신설동</p>
                    <p id='신정네거리'>신정네거리</p>
                    <p id='신촌'>신촌</p>
                    <p id='아현'>아현</p>
                    <p id='양천구청'>양천구청</p>
                    <p id='역삼'>역삼</p>
                    <p id='영등포구청'>영등포구청</p>
                    <p id='왕십리(성동구청)'>왕십리(성동구청)</p>
                    <p id='용답'>용답</p>
                    <p id='용두(동대문구청)'>용두(동대문구청)</p>
                    <p id='을지로3가'>을지로3가</p>
                    <p id='을지로4가'>을지로4가</p>
                    <p id='을지로입구'>을지로입구</p>
                    <p id='이대'>이대</p>
                    <p id='잠실(송파구청)'>잠실(송파구청)</p>
                    <p id='잠실나루'>잠실나루</p>
                    <p id='잠실새내'>잠실새내</p>
                    <p id='종합운동장'>종합운동장</p>
                    <p id='충정로(경기대입구)'>충정로(경기대입구)</p>
                    <p id='한양대'>한양대</p>
                    <p id='합정'>합정</p>
                    <p id='홍대입구'>홍대입구</p>
                </section>
            `
        }
        else if (lineNum === '3'){
            popUp2.innerHTML = `
                <section>
                    <p id='가락시장'>가락시장</p>
                    <p id='경복궁(정부서울청사)'>경복궁(정부서울청사)</p>
                    <p id='경찰병원'>경찰병원</p>
                    <p id='고속터미널'>고속터미널</p>
                    <p id='교대(법원.검찰청)'>교대(법원.검찰청)</p>
                    <p id='구파발'>구파발</p>
                    <p id='금호'>금호</p>
                    <p id='남부터미널(예술의전당)'>남부터미널(예술의전당)</p>
                    <p id='녹번'>녹번</p>
                    <p id='대곡'>대곡</p>
                    <p id='대청'>대청</p>
                    <p id='대치'>대치</p>
                    <p id='대화'>대화</p>
                    <p id='도곡'>도곡</p>
                    <p id='독립문'>독립문</p>
                    <p id='동대입구'>동대입구</p>
                    <p id='마두'>마두</p>
                    <p id='매봉'>매봉</p>
                    <p id='무악재'>무악재</p>
                    <p id='백석'>백석</p>
                    <p id='불광'>불광</p>
                    <p id='삼송'>삼송</p>
                    <p id='수서'>수서</p>
                    <p id='신사'>신사</p>
                    <p id='안국'>안국</p>
                    <p id='압구정'>압구정</p>
                    <p id='약수'>약수</p>
                    <p id='양재(서초구청)'>양재(서초구청)</p>
                    <p id='연신내'>연신내</p>
                    <p id='오금'>오금</p>
                    <p id='옥수'>옥수</p>
                    <p id='원당'>원당</p>
                    <p id='원흥'>원흥</p>
                    <p id='을지로3가'>을지로3가</p>
                    <p id='일원'>일원</p>
                    <p id='잠원'>잠원</p>
                    <p id='정발산'>정발산</p>
                    <p id='종로3가'>종로3가</p>
                    <p id='주엽'>주엽</p>
                    <p id='지축'>지축</p>
                    <p id='지축'>지축</p>
                    <p id='충무로'>충무로</p>
                    <p id='학여울'>학여울</p>
                    <p id='홍제'>홍제</p>
                    <p id='화정'>화정</p>                         
                </section>
            `
        }
        else if (lineNum === '4'){
            popUp2.innerHTML = `
                <section>
                    <p id='경마공원'>경마공원</p>
                    <p id='고잔'>고잔</p>
                    <p id='과천'>과천</p>
                    <p id='금정'>금정</p>
                    <p id='길음'>길음</p>
                    <p id='남태령'>남태령</p>
                    <p id='노원'>노원</p>
                    <p id='당고개'>당고개</p>
                    <p id='대공원'>대공원</p>
                    <p id='대야미'>대야미</p>
                    <p id='동대문'>동대문</p>
                    <p id='동대문역사문화공원'>동대문역사문화공원</p>
                    <p id='동작(현충원)'>동작(현충원)</p>
                    <p id='명동'>명동</p>
                    <p id='미아(서울사이버대학)'>미아(서울사이버대학)</p>
                    <p id='미아사거리'>미아사거리</p>
                    <p id='반월'>반월</p>
                    <p id='범계'>범계</p>
                    <p id='별내별가람'>별내별가람</p>
                    <p id='사당'>사당</p>
                    <p id='산본'>산본</p>
                    <p id='삼각지'>삼각지</p>
                    <p id='상계'>상계</p>
                    <p id='상록수'>상록수</p>
                    <p id='서울역'>서울역</p>
                    <p id='선바위'>선바위</p>
                    <p id='성신여대입구(돈암)'>성신여대입구(돈암)</p>
                    <p id='수리산'>수리산</p>
                    <p id='수유(강북구청)'>수유(강북구청)</p>
                    <p id='숙대입구(갈월)'>숙대입구(갈월)</p>
                    <p id='신길온천'>신길온천</p>
                    <p id='신용산'>신용산</p>
                    <p id='쌍문'>쌍문</p>
                    <p id='안산'>안산</p>
                    <p id='오남'>오남</p>
                    <p id='오이도'>오이도</p>
                    <p id='이촌(국립중앙박물관)'>이촌(국립중앙박물관)</p>
                    <p id='인덕원'>인덕원</p>
                    <p id='정부과천청사'>정부과천청사</p>
                    <p id='정왕'>정왕</p>
                    <p id='중앙'>중앙</p>
                    <p id='진접'>진접</p>
                    <p id='창동'>창동</p>
                    <p id='초지'>초지</p>
                    <p id='총신대입구(이수)'>총신대입구(이수)</p>
                    <p id='충무로'>충무로</p>
                    <p id='평촌'>평촌</p>
                    <p id='한대앞'>한대앞</p>
                    <p id='한성대입구(삼선교)'>한성대입구(삼선교)</p>
                    <p id='혜화'>혜화</p>
                    <p id='회현(남대문시장)'>회현(남대문시장)</p>
                </section>
            `
        }
        else if (lineNum === '5'){
            popUp2.innerHTML = `
                <section>
                <p id='강동'>강동</p>
                <p id='강일'>강일</p>
                <p id='강일'>강일</p>
                <p id='개롱'>개롱</p>
                <p id='개화산'>개화산</p>
                <p id='거여'>거여</p>
                <p id='고덕'>고덕</p>
                <p id='공덕'>공덕</p>
                <p id='광나루(장신대)'>광나루(장신대)</p>
                <p id='광화문(세종문화회관)'>광화문(세종문화회관)</p>
                <p id='군자(능동)'>군자(능동)</p>
                <p id='굽은다리(강동구민회관앞)'>굽은다리(강동구민회관앞)</p>
                <p id='길동'>길동</p>
                <p id='김포공항'>김포공항</p>
                <p id='까치산'>까치산</p>
                <p id='답십리'>답십리</p>
                <p id='동대문역사문화공원'>동대문역사문화공원</p>
                <p id='둔촌동'>둔촌동</p>
                <p id='마곡'>마곡</p>
                <p id='마장'>마장</p>
                <p id='마천'>마천</p>
                <p id='마포'>마포</p>
                <p id='명일'>명일</p>
                <p id='목동'>목동</p>
                <p id='미사'>미사</p>
                <p id='미사'>미사</p>
                <p id='발산'>발산</p>
                <p id='방이'>방이</p>
                <p id='방화'>방화</p>
                <p id='상일동'>상일동</p>
                <p id='서대문'>서대문</p>
                <p id='송정'>송정</p>
                <p id='신금호'>신금호</p>
                <p id='신길'>신길</p>
                <p id='신정(은행정)'>신정(은행정)</p>
                <p id='아차산(어린이대공원후문)'>아차산(어린이대공원후문)</p>
                <p id='애오개'>애오개</p>
                <p id='양평'>양평</p>
                <p id='여의나루'>여의나루</p>
                <p id='여의도'>여의도</p>
                <p id='영등포구청'>영등포구청</p>
                <p id='영등포시장'>영등포시장</p>
                <p id='오금'>오금</p>
                <p id='오목교(목동운동장앞)'>오목교(목동운동장앞)</p>
                <p id='올림픽공원(한국체대)'>올림픽공원(한국체대)</p>
                <p id='왕십리(성동구청)'>왕십리(성동구청)</p>
                <p id='우장산'>우장산</p>
                <p id='을지로4가'>을지로4가</p>
                <p id='장한평'>장한평</p>
                <p id='종로3가'>종로3가</p>
                <p id='천호(풍납토성)'>천호(풍납토성)</p>
                <p id='청구'>청구</p>
                <p id='충정로(경기대입구)'>충정로(경기대입구)</p>
                <p id='하남검단산'>하남검단산</p>
                <p id='하남시청(덕풍-신장)'>하남시청(덕풍-신장)</p>
                <p id='하남풍산'>하남풍산</p>
                <p id='행당'>행당</p>
                <p id='화곡'>화곡</p>                
                </section>
            `
        }
        else if (lineNum === '6'){
            popUp2.innerHTML = `
                <section>
                <p id='고려대(종암)'>고려대(종암)</p>
                <p id='공덕'>공덕</p>
                <p id='광흥창(서강)'>광흥창(서강)</p>
                <p id='구산'>구산</p>
                <p id='녹사평(용산구청)'>녹사평(용산구청)</p>
                <p id='대흥(서강대앞)'>대흥(서강대앞)</p>
                <p id='독바위'>독바위</p>
                <p id='돌곶이'>돌곶이</p>
                <p id='동묘앞'>동묘앞</p>
                <p id='디지털미디어시티'>디지털미디어시티</p>
                <p id='마포구청'>마포구청</p>
                <p id='망원'>망원</p>
                <p id='버티고개'>버티고개</p>
                <p id='보문'>보문</p>
                <p id='봉화산(서울의료원)'>봉화산(서울의료원)</p>
                <p id='불광'>불광</p>
                <p id='삼각지'>삼각지</p>
                <p id='상수'>상수</p>
                <p id='상월곡(한국과학기술연구원)'>상월곡(한국과학기술연구원)</p>
                <p id='새절(신사)'>새절(신사)</p>
                <p id='석계'>석계</p>
                <p id='신내'>신내</p>
                <p id='신당'>신당</p>
                <p id='안암(고대병원앞)'>안암(고대병원앞)</p>
                <p id='약수'>약수</p>
                <p id='역촌'>역촌</p>
                <p id='연신내'>연신내</p>
                <p id='월곡(동덕여대)'>월곡(동덕여대)</p>
                <p id='월드컵경기장(성산)'>월드컵경기장(성산)</p>
                <p id='응암'>응암</p>
                <p id='이태원'>이태원</p>
                <p id='증산(명지대앞)'>증산(명지대앞)</p>
                <p id='창신'>창신</p>
                <p id='청구'>청구</p>
                <p id='태릉입구'>태릉입구</p>
                <p id='한강진'>한강진</p>
                <p id='합정'>합정</p>
                <p id='화랑대(서울여대입구)'>화랑대(서울여대입구)</p>
                <p id='효창공원앞'>효창공원앞</p>                                
                </section>
            `
        }
        else if (lineNum === '7'){
            popUp2.innerHTML = `
                <section>
                <p id='가산디지털단지'>가산디지털단지</p>
                <p id='강남구청'>강남구청</p>
                <p id='건대입구'>건대입구</p>
                <p id='고속터미널'>고속터미널</p>
                <p id='공릉(서울과학기술대)'>공릉(서울과학기술대)</p>
                <p id='광명사거리'>광명사거리</p>
                <p id='군자(능동)'>군자(능동)</p>
                <p id='굴포천'>굴포천</p>
                <p id='까치울'>까치울</p>
                <p id='남구로'>남구로</p>
                <p id='남성'>남성</p>
                <p id='내방'>내방</p>
                <p id='노원'>노원</p>
                <p id='논현'>논현</p>
                <p id='대림(구로구청)'>대림(구로구청)</p>
                <p id='도봉산'>도봉산</p>
                <p id='뚝섬유원지'>뚝섬유원지</p>
                <p id='마들'>마들</p>
                <p id='먹골'>먹골</p>
                <p id='면목'>면목</p>
                <p id='반포'>반포</p>
                <p id='보라매'>보라매</p>
                <p id='부천시청'>부천시청</p>
                <p id='부천종합운동장'>부천종합운동장</p>
                <p id='부평구청'>부평구청</p>
                <p id='사가정'>사가정</p>
                <p id='산곡'>산곡</p>
                <p id='삼산체육관'>삼산체육관</p>
                <p id='상도'>상도</p>
                <p id='상동'>상동</p>
                <p id='상봉(시외버스터미널)'>상봉(시외버스터미널)</p>
                <p id='석남(거북시장)'>석남(거북시장)</p>
                <p id='수락산'>수락산</p>
                <p id='숭실대입구(살피재)'>숭실대입구(살피재)</p>
                <p id='신대방삼거리'>신대방삼거리</p>
                <p id='신중동'>신중동</p>
                <p id='신풍'>신풍</p>
                <p id='어린이대공원(세종대)'>어린이대공원(세종대)</p>
                <p id='온수(성공회대입구)'>온수(성공회대입구)</p>
                <p id='용마산'>용마산</p>
                <p id='이수'>이수</p>
                <p id='장승배기'>장승배기</p>
                <p id='장암'>장암</p>
                <p id='중계'>중계</p>
                <p id='중곡'>중곡</p>
                <p id='중화'>중화</p>
                <p id='천왕'>천왕</p>
                <p id='철산'>철산</p>
                <p id='청담'>청담</p>
                <p id='춘의'>춘의</p>
                <p id='태릉입구'>태릉입구</p>
                <p id='하계'>하계</p>
                <p id='학동'>학동</p>                   
                </section>
            `
        }
        else if (lineNum === '8'){
            popUp2.innerHTML = `
                <section>
                <p id='가락시장'>가락시장</p>
                <p id='강동구청'>강동구청</p>
                <p id='남위례'>남위례</p>
                <p id='남한산성입구(성남법원.검찰청)'>남한산성입구(성남법원.검찰청)</p>
                <p id='단대오거리'>단대오거리</p>
                <p id='모란'>모란</p>
                <p id='몽촌토성(평화의문)'>몽촌토성(평화의문)</p>
                <p id='문정'>문정</p>
                <p id='복정'>복정</p>
                <p id='산성'>산성</p>
                <p id='석촌'>석촌</p>
                <p id='송파'>송파</p>
                <p id='수진'>수진</p>
                <p id='신흥'>신흥</p>
                <p id='암사'>암사</p>
                <p id='잠실(송파구청)'>잠실(송파구청)</p>
                <p id='장지'>장지</p>
                <p id='천호(풍납토성)'>천호(풍납토성)</p>                               
                </section>
            `
        }
        else if (lineNum === '9'){
            popUp2.innerHTML = `
                <section>
                <p id='가양'>가양</p>
                <p id='개화'>개화</p>
                <p id='고속터미널'>고속터미널</p>
                <p id='공항시장'>공항시장</p>
                <p id='구반포'>구반포</p>
                <p id='국회의사당'>국회의사당</p>
                <p id='김포공항'>김포공항</p>
                <p id='노들'>노들</p>
                <p id='노량진'>노량진</p>
                <p id='당산'>당산</p>
                <p id='동작(현충원)'>동작(현충원)</p>
                <p id='둔촌오륜'>둔촌오륜</p>
                <p id='등촌'>등촌</p>
                <p id='마곡나루'>마곡나루</p>
                <p id='봉은사'>봉은사</p>
                <p id='사평'>사평</p>
                <p id='삼성중앙'>삼성중앙</p>
                <p id='삼전'>삼전</p>
                <p id='샛강'>샛강</p>
                <p id='석촌'>석촌</p>
                <p id='석촌고분'>석촌고분</p>
                <p id='선유도'>선유도</p>
                <p id='선정릉'>선정릉</p>
                <p id='송파나루'>송파나루</p>
                <p id='신논현'>신논현</p>
                <p id='신목동'>신목동</p>
                <p id='신반포'>신반포</p>
                <p id='신방화'>신방화</p>
                <p id='양천향교'>양천향교</p>
                <p id='언주'>언주</p>
                <p id='여의도'>여의도</p>
                <p id='염창'>염창</p>
                <p id='올림픽공원(한국체대)'>올림픽공원(한국체대)</p>
                <p id='종합운동장'>종합운동장</p>
                <p id='중앙보훈병원'>중앙보훈병원</p>
                <p id='증미'>증미</p>
                <p id='한성백제'>한성백제</p>
                <p id='흑석(중앙대입구)'>흑석(중앙대입구)</p>                         
                </section>
            `
        }
        else if (lineNum === '경강'){
            popUp2.innerHTML = `
                <section>
                <p id='경기광주'>경기광주</p>
                <p id='곤지암'>곤지암</p>
                <p id='부발'>부발</p>
                <p id='삼동'>삼동</p>
                <p id='세종대왕릉'>세종대왕릉</p>       
                <p id='신둔도예촌'>신둔도예촌</p>       
                <p id='여주'>여주</p>
                <p id='이매'>이매</p>
                <p id='이천'>이천</p>
                <p id='초월'>초월</p>
                <p id='판교'>판교</p>
                </section>
            `
        }
        else if (lineNum === '경의중앙'){
            popUp2.innerHTML = `
                <section>
                <p id='가좌'>가좌</p>
                <p id='곡산'>곡산</p>
                <p id='공덕'>공덕</p>
                <p id='구리'>구리</p>
                <p id='국수'>국수</p>
                <p id='금릉'>금릉</p>
                <p id='금촌'>금촌</p>
                <p id='능곡'>능곡</p>
                <p id='대곡'>대곡</p>
                <p id='덕소'>덕소</p>
                <p id='도농'>도농</p>
                <p id='도심'>도심</p>
                <p id='디지털미디어시티'>디지털미디어시티</p>
                <p id='망우'>망우</p>
                <p id='문산'>문산</p>
                <p id='백마'>백마</p>
                <p id='상봉(시외버스터미널)'>상봉(시외버스터미널)</p>
                <p id='서강대'>서강대</p>
                <p id='서빙고'>서빙고</p>
                <p id='서울역'>서울역</p>
                <p id='수색'>수색</p>
                <p id='신원'>신원</p>
                <p id='신촌'>신촌</p>
                <p id='아신'>아신</p>
                <p id='야당'>야당</p>
                <p id='옥수'>옥수</p>
                <p id='왕십리(성동구청)'>왕십리(성동구청)</p>
                <p id='용문'>용문</p>
                <p id='운길산'>운길산</p>
                <p id='운정'>운정</p>
                <p id='원덕'>원덕</p>
                <p id='월롱'>월롱</p>
                <p id='응봉'>응봉</p>
                <p id='이촌(국립중앙박물관)'>이촌(국립중앙박물관)</p>
                <p id='일산'>일산</p>
                <p id='임진강'>임진강</p>
                <p id='중랑'>중랑</p>
                <p id='지평'>지평</p>
                <p id='청량리(서울시립대입구)'>청량리(서울시립대입구)</p>
                <p id='탄현'>탄현</p>
                <p id='파주'>파주</p>
                <p id='팔당'>팔당</p>
                <p id='풍산'>풍산</p>
                <p id='한남'>한남</p>
                <p id='행신'>행신</p>
                <p id='홍대입구'>홍대입구</p>
                <p id='화전'>화전</p>
                <p id='회기'>회기</p>
                <p id='효창공원앞'>효창공원앞</p>                
                </section>
            `
        }
        else if (lineNum === '경춘'){
            popUp2.innerHTML = `
                <section>
                <p id='가평'>가평</p>
                <p id='갈매'>갈매</p>
                <p id='강촌'>강촌</p>
                <p id='굴봉산'>굴봉산</p>
                <p id='금곡'>금곡</p>
                <p id='김유정'>김유정</p>
                <p id='남춘천'>남춘천</p>
                <p id='대성리'>대성리</p>
                <p id='마석'>마석</p>
                <p id='망우'>망우</p>
                <p id='백양리'>백양리</p>
                <p id='별내'>별내</p>
                <p id='사릉'>사릉</p>
                <p id='상봉(시외버스터미널)'>상봉(시외버스터미널)</p>
                <p id='상천'>상천</p>
                <p id='신내'>신내</p>
                <p id='중랑'>중랑</p>
                <p id='천마산'>천마산</p>
                <p id='청량리(서울시립대입구)'>청량리(서울시립대입구)</p>
                <p id='청평'>청평</p>
                <p id='춘천'>춘천</p>
                <p id='퇴계원'>퇴계원</p>
                <p id='평내호평'>평내호평</p>
                <p id='회기'>회기</p>                
                </section>
            `
        }
        else if (lineNum === '공항'){
            popUp2.innerHTML = `
                <section>
                <p id='검암'>검암</p>
                <p id='계양'>계양</p>
                <p id='공덕'>공덕</p>
                <p id='공항화물청사'>공항화물청사</p>
                <p id='김포공항'>김포공항</p>
                <p id='디지털미디어시티'>디지털미디어시티</p>
                <p id='마곡나루'>마곡나루</p>
                <p id='서울역'>서울역</p>
                <p id='영종'>영종</p>
                <p id='운서'>운서</p>
                <p id='인천공항1터미널'>인천공항1터미널</p>
                <p id='인천공항2터미널'>인천공항2터미널</p>
                <p id='청라국제도시'>청라국제도시</p>
                <p id='홍대입구'>홍대입구</p>                
                </section>
            `
        }
        else if (lineNum === '서해'){
            popUp2.innerHTML = `
                <section>
                <p id='김포공항'>김포공항</p>
                <p id='곡산'>곡산</p>
                <p id='능곡'>능곡</p>
                <p id='달미'>달미</p>
                <p id='대곡'>대곡</p>
                <p id='백마'>백마</p>
                <p id='부천종합운동장'>부천종합운동장</p>
                <p id='선부'>선부</p>
                <p id='소사'>소사</p>
                <p id='소새울'>소새울</p>
                <p id='시흥능곡'>시흥능곡</p>
                <p id='시흥대야'>시흥대야</p>
                <p id='시흥시청'>시흥시청</p>
                <p id='신천'>신천</p>
                <p id='신현'>신현</p>
                <p id='원곡'>원곡</p>
                <p id='원시'>원시</p>
                <p id='원종'>원종</p>
                <p id='일산'>일산</p>
                <p id='초지'>초지</p>
                <p id='풍산'>풍산</p>                
                </section>
            `
        }
        else if (lineNum === '수인분당'){
            popUp2.innerHTML = `
                <section>
                <p id='가천대'>가천대</p>
                <p id='강남구청'>강남구청</p>
                <p id='개포동'>개포동</p>
                <p id='고색'>고색</p>
                <p id='구룡'>구룡</p>
                <p id='구성'>구성</p>
                <p id='기흥'>기흥</p>
                <p id='남동인더스파크'>남동인더스파크</p>
                <p id='달월'>달월</p>
                <p id='대모산입구'>대모산입구</p>
                <p id='도곡'>도곡</p>
                <p id='망포'>망포</p>
                <p id='매교'>매교</p>
                <p id='매탄권선'>매탄권선</p>
                <p id='모란'>모란</p>
                <p id='미금'>미금</p>
                <p id='보정'>보정</p>
                <p id='복정'>복정</p>
                <p id='사리'>사리</p>
                <p id='상갈'>상갈</p>
                <p id='서울숲'>서울숲</p>
                <p id='서현'>서현</p>
                <p id='선릉'>선릉</p>
                <p id='선정릉'>선정릉</p>
                <p id='소래포구'>소래포구</p>
                <p id='송도'>송도</p>
                <p id='수내'>수내</p>
                <p id='수서'>수서</p>
                <p id='수원'>수원</p>
                <p id='수원시청'>수원시청</p>
                <p id='숭의'>숭의</p>
                <p id='신갈'>신갈</p>
                <p id='신포'>신포</p>
                <p id='압구정로데오'>압구정로데오</p>
                <p id='야목'>야목</p>
                <p id='야탑'>야탑</p>
                <p id='어천'>어천</p>
                <p id='연수'>연수</p>
                <p id='영통'>영통</p>
                <p id='오리'>오리</p>
                <p id='오목천'>오목천</p>
                <p id='원인재'>원인재</p>
                <p id='월곶'>월곶</p>
                <p id='이매'>이매</p>
                <p id='인천'>인천</p>
                <p id='인천논현'>인천논현</p>
                <p id='인하대'>인하대</p>
                <p id='정자'>정자</p>
                <p id='죽전'>죽전</p>
                <p id='청량리(서울시립대입구)'>청량리(서울시립대입구)</p>
                <p id='청명'>청명</p>
                <p id='태평'>태평</p>
                <p id='한티'>한티</p>
                <p id='호구포'>호구포</p>                
                </section>
            `
        }
        else if (lineNum === '용인'){
            popUp2.innerHTML = `
                <section>
                <p id='강남대'>강남대</p>
                <p id='고진'>고진</p>
                <p id='기흥'>기흥</p>
                <p id='김량장'>김량장</p>
                <p id='동백'>동백</p>
                <p id='둔전'>둔전</p>
                <p id='명지대'>명지대</p>
                <p id='보평'>보평</p>
                <p id='삼가'>삼가</p>
                <p id='시청.용인대'>시청.용인대</p>
                <p id='어정'>어정</p>
                <p id='운동장.송담대'>운동장.송담대</p>
                <p id='전대.에버랜드'>전대.에버랜드</p>
                <p id='지석'>지석</p>
                <p id='초당'>초당</p>                
                </section>
            `
        }
        else if (lineNum === '신분당'){
            popUp2.innerHTML = `
                <section>
                <p id='강남'>강남</p>
                <p id='광교(경기대)'>광교(경기대)</p>
                <p id='광교중앙(아주대)'>광교중앙(아주대)</p>    
                <p id='논현'>논현</p>
                <p id='동천'>동천</p>
                <p id='미금'>미금</p>
                <p id='상현'>상현</p>
                <p id='성복'>성복</p>
                <p id='수지구청'>수지구청</p>
                <p id='신논현'>신논현</p>
                <p id='신사'>신사</p>
                <p id='양재(서초구청)'>양재(서초구청)</p>        
                <p id='양재시민의숲(매헌)'>양재시민의숲(매헌)</p>
                <p id='정자'>정자</p>
                <p id='청계산입구'>청계산입구</p>
                <p id='판교'>판교</p>                
                </section>
            `
        }
        else if (lineNum === '김포골드'){
            popUp2.innerHTML = `
                <section>
                <p id='걸포북변'>걸포북변</p>
                <p id='고촌'>고촌</p>
                <p id='구래'>구래</p>
                <p id='김포공항'>김포공항</p>
                <p id='마산'>마산</p>
                <p id='사우(김포시청)'>사우(김포시청)</p>
                <p id='양촌'>양촌</p>
                <p id='운양'>운양</p>
                <p id='장기'>장기</p>
                <p id='풍무'>풍무</p>                
                </section>
            `
        }
        else if (lineNum === '인천1'){
            popUp2.innerHTML = `
                <section>
                <p id='간석오거리'>간석오거리</p>
                <p id='갈산'>갈산</p>
                <p id='경인교대입구'>경인교대입구</p>
                <p id='계산'>계산</p>
                <p id='계양'>계양</p>
                <p id='국제업무지구'>국제업무지구</p>
                <p id='귤현'>귤현</p>
                <p id='동막'>동막</p>
                <p id='동수'>동수</p>
                <p id='동춘'>동춘</p>
                <p id='문학경기장'>문학경기장</p>
                <p id='박촌'>박촌</p>
                <p id='부평'>부평</p>
                <p id='부평구청'>부평구청</p>
                <p id='부평삼거리'>부평삼거리</p>
                <p id='부평시장'>부평시장</p>
                <p id='선학'>선학</p>
                <p id='센트럴파크'>센트럴파크</p>
                <p id='송도달빛축제공원'>송도달빛축제공원</p>
                <p id='신연수'>신연수</p>
                <p id='예술회관'>예술회관</p>
                <p id='원인재'>원인재</p>
                <p id='인천대입구'>인천대입구</p>
                <p id='인천시청'>인천시청</p>
                <p id='인천터미널'>인천터미널</p>
                <p id='임학'>임학</p>
                <p id='작전'>작전</p>
                <p id='지식정보단지'>지식정보단지</p>
                <p id='캠퍼스타운'>캠퍼스타운</p>
                <p id='테크노파크'>테크노파크</p>                
                </section>
            `
        }
        else if (lineNum === '인천2'){
            popUp2.innerHTML = `
                <section>
                <p id='가재울'>가재울</p>
                <p id='가정(루원시티)'>가정(루원시티)</p>
                <p id='가정중앙시장'>가정중앙시장</p>
                <p id='검단사거리'>검단사거리</p>
                <p id='검단오류(검단산업단지)'>검단오류(검단산업단지)</p>
                <p id='검바위'>검바위</p>
                <p id='검암'>검암</p>
                <p id='남동구청'>남동구청</p>
                <p id='독정'>독정</p>
                <p id='마전'>마전</p>
                <p id='만수'>만수</p>
                <p id='모래내시장'>모래내시장</p>
                <p id='서구청'>서구청</p>
                <p id='서부여성회관'>서부여성회관</p>
                <p id='석남(거북시장)'>석남(거북시장)</p>
                <p id='석바위시장'>석바위시장</p>
                <p id='석천사거리'>석천사거리</p>
                <p id='시민공원(문화창작지대)'>시민공원(문화창작지대)</p>
                <p id='아시아드경기장(공촌사거리)'>아시아드경기장(공촌사거리)</p>
                <p id='완정'>완정</p>
                <p id='왕길'>왕길</p>
                <p id='운연(서창)'>운연(서창)</p>
                <p id='인천가좌'>인천가좌</p>
                <p id='인천대공원'>인천대공원</p>
                <p id='인천시청'>인천시청</p>
                <p id='주안'>주안</p>
                <p id='주안국가산단'>주안국가산단</p>                
                </section>
            `
        }
        else if (lineNum === '신림'){
            popUp2.innerHTML = `
                <section>
                <p id='관악산(서울대)'>관악산(서울대)</p>
                <p id='당곡'>당곡</p>
                <p id='대방'>대방</p>
                <p id='보라매'>보라매</p>
                <p id='보라매공원'>보라매공원</p>
                <p id='보라매병원'>보라매병원</p>
                <p id='샛강'>샛강</p>
                <p id='서울대벤처타운'>서울대벤처타운</p>
                <p id='서울지방병무청'>서울지방병무청</p>
                <p id='서원'>서원</p>
                <p id='신림'>신림</p>                
                </section>
            `
        }
        else if (lineNum === '의정부'){
            popUp2.innerHTML = `
                <section>
                <p id='경기도청북부청사'>경기도청북부청사</p>
                <p id='경전철의정부'>경전철의정부</p>
                <p id='곤제'>곤제</p>
                <p id='동오'>동오</p>
                <p id='발곡'>발곡</p>
                <p id='범골'>범골</p>
                <p id='새말'>새말</p>
                <p id='송산'>송산</p>
                <p id='어룡'>어룡</p>
                <p id='의정부시청'>의정부시청</p>
                <p id='의정부중앙'>의정부중앙</p>
                <p id='탑석'>탑석</p>
                <p id='회룡'>회룡</p>
                <p id='효자'>효자</p>
                <p id='흥선'>흥선</p>                
                </section>
            `
        }
        else if (lineNum === '우이'){
            popUp2.innerHTML = `
                <section>
                <p id='4.19민주묘지'>4.19민주묘지</p>
                <p id='가오리'>가오리</p>
                <p id='보문'>보문</p>
                <p id='북한산보국문'>북한산보국문</p>
                <p id='북한산우이'>북한산우이</p>
                <p id='삼양'>삼양</p>
                <p id='삼양사거리'>삼양사거리</p>
                <p id='성신여대입구(돈암)'>성신여대입구(돈암)</p>
                <p id='솔밭공원'>솔밭공원</p>
                <p id='솔샘'>솔샘</p>
                <p id='신설동'>신설동</p>
                <p id='정릉'>정릉</p>
                <p id='화계'>화계</p>                
                </section>
            `
        }
    }

    // 출발 날짜 선택 시
    const handleOnChangeStartDate = (e) => {
        const startDate = e.target.value;
        setStartDate(startDate);
    }
    
    // 출발 시각 선택 시
    const handleOnChangeStartTime = (e) => {
        const startTime = e.target.value;
        setStartTime(startTime);
    }

    // 최대 인원 선택 시
    const onChangeMaxPeople = (e) => {
        const maxPeople = Number(e.target.id);
        setMaxPeople(maxPeople);

        for (let i=2; i<=4; i++){
            const target = document.getElementById(`${i}Label`);
            target.style.color = '#000';
            target.style.backgroundColor = '#fff';
        }

        const selectedLabel = document.getElementById(`${maxPeople}Label`);
        selectedLabel.style.color = '#fff';
        selectedLabel.style.backgroundColor = '#03588C';
    }

    // 작성하기 버튼 누를 시
    const navigate = useNavigate();
    const handleOnSubmit = (e) => {
        e.preventDefault();
        
        if(!startStation){
            alert('출발역을 지정해주세요!');
        }
        else if (!endStation) {
            alert('도착역을 지정해주세요!');
        }
        else if (!startDate) {
            alert('출발날짜를 지정해주세요!');
        }
        else if (!startTime) {
            alert('출발시각을 지정해주세요!');
        }
        else if (!maxPeople) {
            alert('최대인원을 지정해주세요!');
        }
        else{
            const userInfoAsString = sessionStorage.getItem('userInfo');
            const userInfo = JSON.parse(userInfoAsString);
            const accessToken = userInfo[5];
            const newStartTime = `${startDate}T${startTime}`;
            createTeam(navigate, startStation, endStation, newStartTime, maxPeople, accessToken);
        }
    }

    // 버튼 활성화 구현
    if (startStation && endStation && startDate && startTime && maxPeople){
        const writeBtn = document.getElementById('writeBtn');
        writeBtn.style.backgroundColor = '#6DD93B';
        writeBtn.style.color = ' #fff';
    }
    else if((startStation || endStation || startDate || startTime || maxPeople) && !(startStation && endStation && startDate && startTime && maxPeople)){
        const writeBtn = document.getElementById('writeBtn');
        writeBtn.style.backgroundColor = '#fff';
        writeBtn.style.color = '#eee';
    }

    return(
        <BodyDiv>
            <form onSubmit={handleOnSubmit}>
                <p>출발역 :<span id="startStationSpan">아직없음</span> <span onClick={handleOnClickStation} id="selectStartStation">선택하기</span></p>
                <p>도착역 :<span id="endStationSpan">아직없음</span> <span onClick={handleOnClickStation} id="selectEndStation">선택하기</span></p>
                <p>최대 1주일 이후까지만 설정 가능해요!</p>
                <p>출발 날짜 : <input type="date" name="" id="" onChange={handleOnChangeStartDate}/></p>
                <p>출발 시각 : <input type="time" name="" id="" onChange={handleOnChangeStartTime}/></p>
                <p>최대 인원
                    <input type="radio" name="max" id="2" onChange={onChangeMaxPeople}/>
                    <input type="radio" name="max" id="3" onChange={onChangeMaxPeople}/>
                    <input type="radio" name="max" id="4" onChange={onChangeMaxPeople}/>
                </p>
                <p>
                    <label htmlFor="2" id="2Label">2명</label>
                    <label htmlFor="3" id="3Label">3명</label>
                    <label htmlFor="4" id="4Label">4명</label>
                </p>
                <button type="submit" id="writeBtn">작성하기</button>
            </form>
            {popUp && 
            <div id="popUpLayout" onClick={handleOnClickPopup}>
                <section id="popUp">
                    <h3>먼저 호선부터 선택해요!</h3>
                    <section>
                        <p id="line1">1호선</p>
                        <p id="line2">2호선</p>
                        <p id="line3">3호선</p>
                        <p id="line4">4호선</p>
                        <p id="line5">5호선</p>
                        <p id="line6">6호선</p>
                        <p id="line7">7호선</p>
                        <p id="line8">8호선</p>
                        <p id="line9">9호선</p>
                        <p id="line경강">경강</p>
                        <p id="line경의중앙">경의중앙</p>
                        <p id="line경춘">경춘</p>
                        <p id="line공항">공항철도</p>
                        <p id="line서해">서해</p>
                        <p id="line수인분당">수인분당</p>
                        <p id="line용인">용인에버</p>
                        <p id="line신분당">신분당</p>
                        <p id="line김포골드">김포골드</p>
                        <p id="line인천1">인천1</p>
                        <p id="line인천2">인천2</p>
                        <p id="line신림">신림</p>
                        <p id="line의정부">의정부</p>
                        <p id="line우이">우이신설</p>
                    </section>
                </section>
            </div>}
            {popUp2 && 
            <div id="popUpLayout2" onClick={handleOnClickPopup2}>
                <section id="popUp2">

                </section>
            </div>}
        </BodyDiv>
    )
}

export default Body;