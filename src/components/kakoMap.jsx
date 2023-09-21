const { kakao } = window;

export default function KakaoMapScript() {
    // 카카오 맵 초기화
    const container = document.getElementById('map');

    // 초기 설정
    const options = {
        center: new kakao.maps.LatLng(37.5956, 127.063441), // 초기 중심 좌표
        level: 3 // 초기 확대 정도
    };
    const map = new kakao.maps.Map(container, options);
    
    // 마커 생성
    const markers = [
        { lat: 37.5665, lng: 126.9780, title: '서울' },
        { lat: 37.4979, lng: 127.0276, title: '강남' },
        { lat: 37.5642, lng: 127.0016, title: '종로' },
    ];

    // 마커 띄우기
    markers.forEach((markerInfo) => {
        const marker = new window.kakao.maps.Marker({
            map: map,
            position: new window.kakao.maps.LatLng(markerInfo.lat, markerInfo.lng),
            title: markerInfo.title,
        });
        // 각 마커를 클릭했을 때 이벤트 핸들러 추가
        window.kakao.maps.event.addListener(marker, 'click', function () {
            // 클릭한 마커의 정보를 표시
            alert(`마커: ${markerInfo.title}(${markerInfo.lat}, ${markerInfo.lng})이(가) 클릭되었습니다.`);
        });
    });
}