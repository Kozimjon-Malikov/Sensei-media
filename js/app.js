window.addEventListener("DOMContentLoaded", () => {
  function navbar() {
    const header = document.querySelector("header"),
      toTop = document.querySelector(".toTop");
    window.addEventListener("scroll", () => {
      if (
        document.documentElement.scrollTop > 20 ||
        document.body.scrollTop > 20
      ) {
        header.classList.add("fixed");
        toTop.style.display = "flex";
      } else {
        header.classList.remove("fixed");
        toTop.style.display = "none";
      }
    });
  }
  function navBar_Menu() {
    const navigation = document.querySelector(".navigation");
    navbar_menus = document.querySelector(".navbar");
    navigation.addEventListener("click", () => {
      navbar_menus.classList.toggle("active__navigation");
      navigation.classList.toggle("closeMenu");
    });
    document.addEventListener("click", (event) => {
      if (!event.target.clossest(".navbar")) {
        let navbar = document.querySelector(".navbar");
        if (navbar) {
          navbar.style.display = "none";
        }
      }
    });
  }
  // chancess
  function my_accessibility() {
    const yurak = document.querySelector(".yurak"),
      chance__items = document.querySelector(".chance__items"),
      inc=document.querySelector('.inc'),
      dec=document.querySelector('.dec'),
      access__o=document.querySelectorAll('.access__o'),
      blackker = document.querySelector(".blackker");
    yurak.addEventListener("click", () => {
      chance__items.classList.toggle("activeChance");
    });
    blackker.addEventListener("click", () => {
      document.querySelector('.body__wrapper').classList.toggle('bodyDark');
    });
    let fsize=16;
    inc.addEventListener('click',()=>{
      fsize+=2;
      document.body.style.fontSize=fsize+'px';
    })
    dec.addEventListener('click',()=>{
      fsize-=2;
      document.body.style.fontSize=fsize+'px';
    })

  }

  function slider() {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 18,
      slidesPerGroup: 1,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".b-button-next",
        prevEl: ".b-button-prev",
      },
      breakpoints: {
        576: {
          slidesPerView: 1,
        },
        992: {
          slidesPerView: 2,
        },
      },
    });
  }
  navbar();
  navBar_Menu();
  my_accessibility();
  slider();
});
