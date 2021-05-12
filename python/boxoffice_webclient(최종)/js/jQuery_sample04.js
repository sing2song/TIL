
function my_search() {
    // 버튼 누르면 호출되요
    let keyword = '건축학개론'
    // AJAX방식으로 서버프로그램을 호출해 보아요!
    // 우리가 호출할 서버프로그램은 Daum KAKAO의 이미지(키워드) 검색 프로그램이예요!
    $.ajax({
        url : 'https://dapi.kakao.com/v2/search/image',
        type : 'GET',
        dataType : 'json',
        data : {
            query : keyword
        },
        headers : {
            Authorization : 'KakaoAK fe9385cf939654f03afaad5ddc06411b'
        },
        success : function() {
            alert('호출에 성공했어요!!')
        },
        error : function() {
            alert('먼가 이상해요!!')
        }
    })
}