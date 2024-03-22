const faqs=document.querySelectorAll('.faq-text');
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle("active")
    })
})
window.onload = (e) => {
    // $(selector).countMe(delay,speed) 
    $("#count1").countMe(0,25);
    $("#count2").countMe(0,25);
    $("#count3").countMe(0,25);
    $("#count4").countMe(0,25);

  };
  var swiper = new Swiper(".mySwiper", {
    slidesPerView:1,
    spaceBetween: 50,
    loop: true,
    pagination:{
        el:".swiper-pagination",
        clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  const hamburger= document.querySelector(".hamburger");
const navMenu= document.querySelector(".mobile-nav");
hamburger.addEventListener("click",() => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
window.onload=function(){
    window.addEventListener('scroll', function (e){
        if (window.scrollY >100){
            document.querySelector("header").classList.add('scroll');
        }
        else{
            document.querySelector("header").classList.remove('scroll');
        }
    })
}
    