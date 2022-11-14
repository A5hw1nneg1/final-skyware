window.onscroll = function() {myFunction()
  faze()
faze1()
faze2()
faze3()};
function myFunction() {
  if (document.documentElement.scrollTop > 90) {
    document.getElementById("header").classList.add("scroll_header")
  } else {
    document.getElementById("header").classList.add("home_header")
    document.getElementById("header").classList.remove("scroll_header")
  }
}
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
document.getElementById("about").addEventListener('click',()=>{
    document.documentElement.scrollTo(0,750)
})
document.getElementById("product").addEventListener('click',()=>{
    document.documentElement.scrollTo(0,2950)
})

function faze(){
if (document.documentElement.scrollTop > 500) {
  document.getElementsByClassName("content_box")[0].classList.remove("fazeout")
  document.getElementsByClassName("content_box")[0].classList.add("fazein")
}
else{
  document.getElementsByClassName("content_box")[0].classList.remove("fazein")
  document.getElementsByClassName("content_box")[0].classList.add("fazeout")
}
}
function faze1(){
if (document.documentElement.scrollTop > 900) {
  document.getElementsByClassName("content_box")[1].classList.remove("fazeout")
  document.getElementsByClassName("content_box")[1].classList.add("fazein")
}
else{
  document.getElementsByClassName("content_box")[1].classList.remove("fazein")
  document.getElementsByClassName("content_box")[1].classList.add("fazeout")
}
}
function faze2(){
if (document.documentElement.scrollTop > 900) {
  document.getElementsByClassName("content_box")[2].classList.remove("fazeout")
  document.getElementsByClassName("content_box")[2].classList.add("fazein")
}
else{
  document.getElementsByClassName("content_box")[2].classList.remove("fazein")
  document.getElementsByClassName("content_box")[2].classList.add("fazeout")
}
}
function faze3(){
if (document.documentElement.scrollTop > 900){
  document.getElementsByClassName("content_box")[3].classList.remove("fazeout")
  document.getElementsByClassName("content_box")[3].classList.add("fazein")
}
else{
  document.getElementsByClassName("content_box")[3].classList.remove("fazein")
  document.getElementsByClassName("content_box")[3].classList.add("fazeout")
}
}
document.getElementById("scrollbtn").addEventListener("click",()=>{
  document.getElementById("features").scrollLeft+=120
})
document.getElementById("scrollbtnopp").addEventListener("click",()=>{
  document.getElementById("features").scrollLeft-=120
})