jQuery(function($){
    //ajax送信
    // **********************
    // URLをajax.phpにすること
    // **********************
    $.ajax({
        url : "common/ajax.php",
        type : "POST",
        data : {post_data_1:"hoge", post_data_2:"piyo"},
        error : function(XMLHttpRequest, textStatus, errorThrown) {
            console.log("ajax通信に失敗しました");
        },
        success : function(response) {
            console.log("ajax通信に成功しました");
            console.log(response[0]);
            console.log(response[1]);


            var $html = "<div>HAPPY BIRTHDAY</div>";
            $(".callAjax").html($html);
        }
    });
});