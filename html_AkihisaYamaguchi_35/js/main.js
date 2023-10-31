// jsを記述する際はここに記載していく

// アンカーリンク　

$(function () {
  var headH = $("header").outerHeight();
  var animeSpeed = 600;
  $("a[href^='#']").on({
      "click": function () {
          var href = $(this).attr("href");
          var target = $(href == "#" || href === "" ? "html" : href);
          var position;
          position = target.offset().top - headH;
          $("body,html").stop().animate({
              scrollTop: position
          }, animeSpeed);
          return false;
      }
  });
});

// slick slider

const swiper = new Swiper(".swiper", {
  loop: true,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 3,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true
  },
  speed: 1000,
  autoplay: {
    delay: 1500,
  },
});

// cursor 

$(function(){
  
  //カーソル要素の指定
  var cursor=$("#cursor");
  //ちょっと遅れてついてくるストーカー要素の指定  
  var stalker=$("#stalker");
  
  //mousemoveイベントでカーソル要素を移動させる
  $(document).on("mousemove",function(e){
    //カーソルの座標位置を取得
    var x=e.clientX;
    var y=e.clientY;
    //カーソル要素のcssを書き換える用
    cursor.css({
      "opacity":"1",
      "top":y+"px",
      "left":x+"px"
    });
    //ストーカー要素のcssを書き換える用    
    setTimeout(function(){
      stalker.css({
        "opacity":"1",
        "top":y+"px",
        "left":x+"px"
      });
    },200);//カーソルより遅れる時間を指定
    
  });
});