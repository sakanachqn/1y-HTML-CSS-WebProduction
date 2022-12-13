.hideClass {
    transform: translateY(-60px);
  }
  $(function(){
  
    var pos = 0;
    var header = $('header');
    var hideClass = 'hideClass';
  
    $(window).on('scroll', function(){
      if($(this).scrollTop() < pos ){
        //上スクロール時ヘッダーのhideClassを削除
        header.removeClass(hideClass);
      }else{
        //下スクロール時ヘッダーにhideClassを追加
        header.addClass(hideClass);
      }
      pos = $(this).scrollTop();
    });
  
  });