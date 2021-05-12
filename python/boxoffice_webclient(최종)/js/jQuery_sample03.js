$(document).on('ready',function() {

    $('h1').on('click',function(event) {
        // alert('클릭되었어요!!')
        // 이벤트가 발생했을때 어떤 element에서 event가 발생했는지를 파악
        alert($(this).text())
    })

})

function my_func() {
    alert('클릭되었어요!!')
}

function set_style() {
    $('h1').addClass('myStyle')
}

function release_style() {
    $('h1').removeClass('myStyle')
}

function add_event() {
    // H1을 찾아서 해당 element에 event처리 능력을 부여.. (jQuery를 이용해서)
    $('h1').on('click',function(event) {
        alert('h1이 클릭되었어요!!')
    })
}