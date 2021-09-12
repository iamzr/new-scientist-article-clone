const nav = document.querySelector("nav");
const aside = document.querySelector("aside");

document.onscroll = () => {
  const scrollY = window.scrollY;
  if (scrollY > 135) {
    console.log("scrolled pas");
    nav.classList = "nav-sticky";
    aside.classList = "aside-sticky";
  } else if (scrollY < 135) {
    nav.classList = "";
    aside.classList = "";
  }
};
