 window.addEventListener("load",()=>{
  new Glider(document.querySelector(".carousel__list"), {
    slidesToShow: 1,
    dots: '.carousel-indicators',
    draggable: true,
    arrows: {
      prev: '.prev',
      next: '.next'
    }
  });
});