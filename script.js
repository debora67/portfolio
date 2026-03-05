// CURSOR

const cursor = document.querySelector(".cursor")

document.addEventListener("mousemove", e => {

cursor.style.left = e.clientX + "px"
cursor.style.top = e.clientY + "px"

})


// DARK MODE

const toggle = document.getElementById("darkToggle")

toggle.onclick = () => {

document.body.classList.toggle("dark")

if(document.body.classList.contains("dark")){
toggle.textContent="☀️"
}else{
toggle.textContent="🌙"
}

}


// MODAL VIDEO

const cards = document.querySelectorAll(".video-card")
const modal = document.getElementById("modal")
const modalVideo = document.getElementById("modalVideo")
const closeBtn = document.querySelector(".close")

cards.forEach(card => {

const video = card.querySelector("video")

card.addEventListener("mouseenter", () => video.play())

card.addEventListener("mouseleave", () => {

video.pause()
video.currentTime = 0

})

card.addEventListener("click", () => {

modal.style.display = "flex"
modalVideo.src = card.dataset.video
modalVideo.play()

})

})


closeBtn.onclick = () => {

modal.style.display = "none"
modalVideo.pause()
modalVideo.src=""

}

window.onclick = e => {

if(e.target === modal){

modal.style.display = "none"
modalVideo.pause()
modalVideo.src=""

}

}


// SLIDER

const slider = document.querySelector(".projects-slider")

document.querySelector(".right").onclick = () => {

slider.scrollBy({
left:350,
behavior:"smooth"
})

}

document.querySelector(".left").onclick = () => {

slider.scrollBy({
left:-350,
behavior:"smooth"
})

}