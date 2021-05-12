function my_func() {
    // 적절한 코드를 작성하면 되요!!
    // console.log($('#apple').text())
    // $('#apple').text('소리없는 아우성!!')
    // console.log($('#pineapple').text())
    // console.log($('ul > .myList').text())
    // console.log($('#uId').val())
    // console.log($('input[type=text]').attr('id'))
    // $('input[type=text]').attr('size',10)
    // console.log($('ol > li:first').text())
    // console.log($('ol > li:last').text())
    // console.log($('ol > li:first + li').text())
    // console.log($('ol > li:eq(1)').text())
    // console.log($('ol > li').text())
    $('ol > li').each(function(idx,item) {
        console.log(idx + '번째 ' + $(item).text() + '입니다.')
    })
}

// 이름이 없는 함수 => 묵시적 함수 => lambda 함수
// 결국 함수를 독립적으로 선언하지 못하고 변수같은곳에 저장해서 사용
// 함수를 어떻게 취급한다는 의미냐하면 ==> 함수를 하나의 값으로 인식
// 함수가 하나의 값으로 사용되기 때문에 함수를 다른 함수의 인자로 활용이 가능
// let kaka = function() { }
