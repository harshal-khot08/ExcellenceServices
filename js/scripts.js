$(document).ready(function(){
    $(window).scroll(function(){
      if(this.scrollY > 20) 
        $(".navbar").addClass("sticky");
      else
        $(".navbar").removeClass("sticky");
    });
  
    $('.menu-toggler').click(function(){
      $(this).toggleClass("active");
      $(".navbar-menu").toggleClass("active");
    });

    const links=document.querySelectorAll(".lin");
    links.forEach((item)=>{
      item.addEventListener("click",()=>
      {
        let el=document.getElementById(item.getAttribute("data-link"));
        el.scrollIntoView({behavior:"smooth",block:"start"});
      })
    })
  
    $(".works").magnificPopup({
      delegate: 'a',
      type: 'image',
      gallery:{enabled:true}
    });
  });
  