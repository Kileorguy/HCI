const crausel = document.querySelector(".carausel"),
firstImg = document.querySelectorAll(".carausel img")[0];
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false,prevPageX,prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 500; 

arrowIcons.forEach(icon => {
    icon.addEventListener("click",() => {
        crausel.scrollLeft += icon.id == "kiri" ? -firstImgWidth : firstImgWidth;
    });
})

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = crausel.scrollLeft;
}
const dragging = (e) => {
    if(!isDragStart)return;
    e.preventDefault();
    let positionDiff = e.pageX - prevPageX; 
    crausel.scrollLeft = prevScrollLeft -positionDiff;
}

const dragStop = (e) => {
    isDragStart = false;
}
crausel.addEventListener("mousedown",dragStart);
crausel.addEventListener("mousemove",dragging);
crausel.addEventListener("mouseup",dragStop);

// kedua

const crausel1 = document.querySelector(".carausel2"),
firstImg1 = document.querySelectorAll(".carausel2 img")[0];
arrowIcons1 = document.querySelectorAll(".wrapper2 i");

let isDragStart1 = false,prevPageX1,prevScrollLeft1;
let firstImgWidth1 = firstImg.clientWidth + 500; 

arrowIcons1.forEach(icon1 => {
    icon1.addEventListener("click",() => {
        crausel1.scrollLeft += icon1.id == "kiri" ? -firstImgWidth1 : firstImgWidth1;
    });
})

const dragStart1 = (e) => {
    isDragStart1 = true;
    prevPageX1 = e.pageX;
    prevScrollLeft1 = crausel1.scrollLeft;
}
const dragging1 = (e) => {
    if(!isDragStart1)return;
    e.preventDefault();
    let positionDiff1 = e.pageX - prevPageX1; 
    crausel1.scrollLeft = prevScrollLeft1 -positionDiff1;
}

const dragStop1 = (e) => {
    isDragStart1 = false;
}
crausel1.addEventListener("mousedown",dragStart1);
crausel1.addEventListener("mousemove",dragging1);
crausel1.addEventListener("mouseup",dragStop1);