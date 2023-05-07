$(document).ready(function(){

    // 햄버거메뉴
    
    let click_num=0;
    $(".all_menu").click(function(){
      
      if(click_num==0){
        $(".menu_wrap").css({
          display: "block"
      })
      $(".all_menu_but:nth-child(1)").css({
          display: "none"
      })
      $(".all_menu_but:nth-child(2)").css({
          display: "block"
      })
      click_num++;
      }else{
        $(".menu_wrap").css({
          display: "none"
      })
      $(".all_menu_but:nth-child(1)").css({
          display: "block"
      })
      $(".all_menu_but:nth-child(2)").css({
          display: "none"
      })
      click_num--;
      }   
    });
    
    $(".main_menu").click(function(){
        let ck=$(this).index();
        $(".sub_menu_con").css({
            display: "none"
        })
        $(".sub_menu_con").eq(ck).css({
            display: "block"
        })
        $(".main_menu").css({
          background: "none"
      })
      $(".main_menu").eq(ck).css({
          background : "rgba(135, 206, 235, 0.6)"
      })
    });

// art1
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      loop : true,   // 슬라이드 반복 여부
      loopAdditionalSlides : 1,
      slidesPerView: 1,
      // breakpoints:{
      //   980: {
      //     slidesPerView :2
      //   }
      // }
    });


    // 안전기능성, app
let num=0;

setInterval(function(){
    num++;
    if(num>2){
        num=0;
    }
    $(".article_2_list_item").fadeOut(500);
    $(".article_2_list_item").eq(num).fadeIn(500);

    $(".app_img").fadeOut(500);
    $(".app_img").eq(num).fadeIn(500);


},3000)

//news 슬라이드
width_n=$(".item_box").outerWidth(true);
$(".art_4_left_but").click(function(){
  $(".item_box").last().prependTo(".article_4_items");
      $(".article_4_items").css({
          left:-width_n
      }).animate({
          left:0
      },1000)
});

$(".art_4_right_but").click(function(){
  $(".article_4_items").animate({
      left: -width_n
  },1000,function(){
      $(".item_box").first().appendTo(".article_4_items");
      $(".article_4_items").css({
          left:0
      })
  })
});























    });//지우지말기