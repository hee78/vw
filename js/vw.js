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


// 안전기능성
let num=0;

setInterval(function(){
    num++;
    if(num>3){
        num=0;
    }
    $(".article_2_fade_page").fadeOut(500);
    $(".article_2_fade_page").eq(num).fadeIn(500);

},3000)



// app이미지
setInterval(function(){
  $(".app_img").first().appendTo(".app_move_box");
  $(".app_move_box").css({
    left: -270
  },3000)
},3000);


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

let end_time_2=setInterval(function(){
  $(".art_02_right_but").trigger("click");
},3000);

$(".but").hover(function(){
  clearInterval(end_time_2);
},function(){
  end_time_2=setInterval(function(){
      $(".art_02_right_but").trigger("click");
  },3000);
})

// 차량소개
$(".art_1_but").click(function(){
  width_w=$(".art_1_con").outerWidth(true);
  click_num=$(this).index();
  $(".art_1_move").animate({
      left: -width_w*click_num
  })
});


});//지우지말기