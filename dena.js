let mainColors = localStorage.getItem("color_option");
if(mainColors !==null){
  document.documentElement.style.setProperty('--main--color', localStorage.getItem("color_option"));
}

//start setting
document.querySelector(".fa-gear").onclick = function () {
  document.querySelector(".settings-box").classList.toggle("open");
};
//end setting



//swich color
const colorsLi=document.querySelectorAll(".color-list li");
 colorsLi.forEach(li=>{
  li.addEventListener("click",(e)=>{

    // console.log();
    document.documentElement.style.setProperty("--main--color",e.target.dataset.color);
  localStorage.setItem("color_option",e.target.dataset.color);
  })
 })
//swich color




// let landingpage = document.querySelector("landing-page");
// let arrayImage=["image-1.jpg","image-3.jpg","image-3.jpg"]

// let random;

// setInterval(() => {
//     random = Math.floor(Math.random() *arrayImage.length);
//     landingpage.style.backgroundImage='url("images/image-1.jpg")'
// }, 600);
let landingpage = document.querySelector(".landing-page");
let arrayImage = ["image-1.jpg", "image-2.jpg", "image-3.jpg"];
setInterval(() => {
  let randomIndex = Math.floor(Math.random() * arrayImage.length);
  landingpage.style.backgroundImage = `url("images/${arrayImage[randomIndex]}")`;
}, 2000);
