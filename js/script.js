let funcObj={
  f_0:function(){
    const tl = gsap.timeline();
    tl.to("#section0 .tit_wrap > *", {
      opacity: 1,
      stagger: 0.3,
    });
  },
  f_1:function(){
    const tl = gsap.timeline();
    tl.to("#section1 h2.tit", {
      opacity: 1,
      y: -30,
    });
    tl.to(".s1_list", {
      opacity: 1,
      stagger: 0.3,
      y: -30,
    });
  },
  f_2:function(){
    const tl = gsap.timeline();
    tl.to("#section2 h2.tit", {
      opacity: 1,
      y: -30,
    });
    tl.to(".s2_list", {
      opacity: 1,
      y: -30,
    });
  },
  f_3:function(){
    const tl = gsap.timeline();
    tl.to("#section3 h2.tit", {
      opacity: 1,
      stagger: 0.3,
      y: -30,
    });
    tl.to(".s3_list img", {
      opacity: 1,
      y: -30,
    });
    tl.to(".s3_list p", {
      opacity: 1,
      stagger: 0.3,
      y: -30,
    });
  },
  f_4:function(){
    const tl = gsap.timeline();
    tl.to("#section4 h2.tit", {
      opacity: 1,
      y: -30,
    });
    tl.to("#section4 p", {
      opacity: 1,
      y: -30,
    });
    tl.to(".s4_list img", {
      opacity: 1,
      y: -30,
    });
    tl.to(".s4_list .btn", {
      opacity: 1,
      y: -30,
    });
  },
  f_5:function(){
    const tl = gsap.timeline();
    tl.to("#section5 .dsk_only>div .ss1", {
      opacity: 1,
      y: -30,
    });
    tl.to("#section5 .dsk_only>div .ss1 span", {
      opacity: 1,
      stagger: 0.3,
      y: -30,
    });
    tl.to("#section5 .dsk_only .ms1", {
      opacity: 1,
      y: -30,
    });

    tl.to("#section5 .dsk_only>div .ss2", {
      opacity: 1,
      y: -30,
    });
    
    tl.to(".mySwiper1", {
      opacity: 1,
      y: -30,
    });
    tl.to(".ss1 div span", {
      opacity: 1,
      // stagger: 0.3,
      y: -30,
    });

    tl.to("#section5 .dsk_only .ms2", {
      opacity: 1,
      y: -30,
    });

    tl.to(".s5_list img", {
      opacity: 1,
      y: -30,
    });

    tl.to("#section5 .dsk_only>div .ss3", {
      opacity: 1,
      y: -30,
    });

    tl.to(".s5_list p", {
      opacity: 1,
      y: -30,
    });

    $(function(){
      $('.count').each(function(){
        let crt = $(this);
        let countTo = crt.attr('data-count');
        //console.log(countTo);

        $({
          countNum:crt.text()
        }).animate({
          countNum:countTo
        },{
          duration:3000,
          easing:'linear',
          step:function(){
            crt.text(Math.floor(this.countNum))
          },
          complete:function(){
            crt.text(this.countNum)
          }
        })
      });
    });
  },
  f_6:function(){
    const tl = gsap.timeline();
    tl.to("#section6 .tit_wrap > *", {
      opacity: 1,
      y: -30,
    });
    tl.to(".s6_list .swiper", {
      opacity: 1,
      y: -30,
    });
    tl.to(".s6_list .cards", {
      opacity: 1,
      y: -30,
    });
  },
  f_7:function(){
    const tl = gsap.timeline();
    tl.to("#section7 .tit_wrap h2", {
      opacity: 1,
      x: -30,
    });
    tl.to("#section7 .tit_wrap .btn", {
      opacity: 1,
      x: -30,
    });
    tl.to(".s7_list img", {
      opacity: 1,
      stagger:0.2,
      y: -30,
    });
  },
  f_8:function(){
    const tl = gsap.timeline();
    tl.to("#section8 .tit_wrap h2", {
      opacity: 1,
      x: 30,
    });
    tl.to("#section8 .tit_wrap .btn", {
      opacity: 1,
      x: 30,
    });
    tl.to(".s8_list img", {
      opacity: 1,
      stagger:0.2,
      y: -30,
    });
    tl.to(".s8_list span", {
      opacity: 1,
      y: -30,
    });
  },
  f_9:function(){
    const tl = gsap.timeline();
    tl.to("#section9 .tit_wrap h2", {
      opacity: 1,
      x: -30,
    });
    tl.to("#section9 .tit_wrap .btn", {
      opacity: 1,
      x: -30,
    });
    tl.to(".s9_list img", {
      opacity: 1,
      stagger:0.2,
      y: -30,
    });
  },
  f_10:function(){
    const tl = gsap.timeline();
    tl.to("#section10 .tit_wrap h2", {
      opacity: 1,
      x: 30,
    });
    tl.to("#section10 .tit_wrap .btn", {
      opacity: 1,
      x: 30,
    });
    tl.to(".s10_list img", {
      opacity: 1,
      stagger:0.2,
      y: -30,
    });
  },
  f_11:function(){
    const tl = gsap.timeline();
    tl.to("#section11 .rel", {
      opacity: 1,
      stagger: 0.3,
      y: -30,
    });
  },


};

let section = document.querySelectorAll('section');

funcObj['f_0']();

window.addEventListener('scroll', function(){

  let scroll = document.scrollingElement.scrollTop;
  let outHeight = this.window.outerHeight;

  // console.log(scroll,outHeight);

  for(let i =0; i<section.length;i++){
    if(scroll > section[i].offsetTop - outHeight &&
      scroll < section[i].offsetTop - outHeight + section[i].offsetHeight){
        funcObj['f_'+i]();
        console.log(i);
    }
  };

});

var swiper = new Swiper(".mySwiper1", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 2,
  centeredSlides: true,
  spaceBetween: 30,
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

// jquery________________
$(document).ready(function(){

  const BODY = $("body");
  const mobBtn = $(".mob_btn");
  const scrollTopBtn = $('.scrollTop_btn');

  mobBtn.on("click", function () {
    BODY.toggleClass("mOpen");
  });

  $(window).on("scroll", function () {
    let scroll = $(this).scrollTop();
    //console.log(scroll);
    if (scroll > 60) {
      scrollTopBtn.addClass('On');
    }else{
      scrollTopBtn.removeClass('On');
    }
  });

  scrollTopBtn.on('click',function(){
    window.scrollTo({
      top:0,
      behavior:'smooth'
    });
  });
});