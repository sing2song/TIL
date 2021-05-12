function hello() {
    alert('버튼이 클릭되었어요!!')
    user_key = $('#userKey').val()
    // 629d53a9d31fcd5c14481b3797a7f22f
    user_date = $('#userDate').val()
    open_api = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json'
    my_url = open_api + '?key=' + user_key + '&targetDt=' + user_date
    location.href= my_url
}
