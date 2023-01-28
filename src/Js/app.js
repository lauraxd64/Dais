const intro = document.querySelector(".intro");
const video = intro.querySelector("#VideoIntro");
const text = intro.querySelector("h1");
const image = intro.querySelector("img");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
  duration: 100000,
  triggerElement: intro,
  triggerHook: 0
})

  .setPin(intro)
  .addTo(controller);

//Img Animation
const ImgAnim = TweenMax.fromTo(image, 3, { opacity: 1 }, { opacity: 0 });

let scene1 = new ScrollMagic.Scene({
  duration: 800,
  triggerElement: intro,
  triggerHook: 0
})

  .setTween(ImgAnim)
  .addTo(controller);

//Video Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  
  //video2P.currentTime = delay;
  video.currentTime = delay;
}, 33.3);