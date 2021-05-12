function remove_func() {
    // $('div').removeClass('myStyle')
}

function my_func() {
    // $('div').css('color','red')
    // $('div').css('background-color','yellow')
    //$('div').addClass('myStyle')
    //$('input[type=button]:first').removeAttr('disabled')
    // $('div.myStyle').remove()
    // $('div.myStyle').empty()  // 자신은 삭제하지 말고 자신의 후손을 모두 삭제
    // 그럼 없는 element를 만들려면 어떻게 해야 하나요??

    // <div>소리없는 아우성</div>
    // let my_div = $('<div></div>').text('소리없는 아우성')
    // 위와 같은 방법으로 없는 element를 새롭게 생성할 수 있어요|!!
    // let my_img = $('<img />').attr('src','img/car.jpg')
    // <img src=img/car.jpg>
    // 이렇게 새로운 element를 만들었으면 내가 원하는 위치에 가져다 붙여야 해요!
    // 4종류의 함수를 이용해서 element를 원하는 위치에 가져다 붙일 수 있어요!
    // 1. append() : 자식으로 붙이고 맨 마지막 자식으로 붙여요!
    // 2. prepend() : 자식으로 붙이고 맨 처음 자식으로 붙여요!
    // 3. after() : 형제로 붙이고 바로 다음 형제로 붙여요!
    // 4. before() : 형제로 붙이고 바로 이전 형제로 붙여요!

    // 새로운  li를 생성할 꺼예요!
    let my_li = $('<li></li>').text('아이유')          // <li>아이유</li>
    // $('ul').append(my_li)
    // $('ul').prepend(my_li)
    // $('ul > li:eq(1)').after(my_li)
    // $('ul > li:last').before(my_li)
}