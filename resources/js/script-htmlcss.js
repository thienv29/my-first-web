window.addEventListener('scroll', function () {
    const logo = document.querySelector('.header-logo img')
    const head = document.querySelector('.header-container')
    const head1 = document.querySelector('.header')
    const sticky = document.querySelector('.to-top-sticky')
    const svg = document.querySelector('#ght')
    const courseParent = document.querySelectorAll('.course-parents')
    if (window.pageYOffset > 70) {
        head1.style.backgroundColor = "var(--header-color)"
        head1.style.boxShadow = "5px 5px 10px rgba(0,0,0,0.4)"
        logo.style.width = "30%"
        head.style.height = "60px"
        sticky.style.width = "50px"
        sticky.style.height = "50px"

        for (let index = 0; index < courseParent.length; index++) {
            courseParent[index].style.display = "flex"
        }
    } else {

        head1.style.boxShadow = "none"
        head1.style.backgroundColor = "none"
        logo.style.width = "40%"
        head.style.height = "80px"
        sticky.style.width = "0px"
        sticky.style.height = "0px"
        for (let index = 0; index < courseParent.length; index++) {
            courseParent[index].style.display = "none"
        }
    }
})

window.addEventListener('load', function () {
    document.querySelector('#loading').className += " loading-hiden"
})
const listRd = document.querySelectorAll('input[name="r"]')
const listlb = document.querySelectorAll('.bar')
const slideShow = document.querySelector('.slideshow-category')
const slide = document.querySelectorAll('.slide-img')


for (let i = 0; i < listRd.length; i++) {
    listRd[i].onclick = function () {
        listlb[i].style.backgroundColor = "#fff"
        string = slide[i].getAttribute("src")
        c = string.split('.')
        c[0] += "blur"
        c[0] += "." + c[1]
        string = c[0];
        console.log(string)
        slideShow.style.backgroundImage = `url(${string})`

        for (let index = 0; index < listRd.length; index++) {
            if (index == i) index++;
            listlb[index].style.backgroundColor = "transparent"

        }
    }
}
const es = document.querySelector('.category-menu-sort-select')
const categorySort = document.querySelectorAll('.category-menu-sort-btn')
const productBox = document.querySelectorAll('.course-home-box.category-product')
for (let index = 0; index < categorySort.length; index++) {
    categorySort[index].onclick = function () {
        if (index == 0) {
            es.style.left = "0%"
            categorySort[0].classList.add('active')
            categorySort[1].classList.remove('active')
            categorySort[2].classList.remove('active')
            for (let i = 0; i < productBox.length; i++) {
                const element = productBox[i];
                element.style.display = "block"
            }
        } else if (index == 1) {
            es.style.left = "33.333%"
            categorySort[1].classList.add('active')
            categorySort[0].classList.remove('active')
            categorySort[2].classList.remove('active')
            for (let i = 0; i < productBox.length; i++) {
                const element = productBox[i];
                if (element.getAttribute("data-sort") == "fit") {
                    element.style.display = "none"
                } else {
                    element.style.display = "block"
                }
            }

        } else {
            es.style.left = "66.67%"
            categorySort[2].classList.add('active')
            categorySort[0].classList.remove('active')
            categorySort[1].classList.remove('active')
            for (let i = 0; i < productBox.length; i++) {
                const element = productBox[i];
                if (element.getAttribute("data-sort") == "popular") {
                    element.style.display = "none"
                } else {
                    element.style.display = "block"
                }
            }

        }
    }
    

}
const contactSticky  = document.querySelector('.contact-sticky-head')
const listContact = document.querySelector('.contact-sticky')

contactSticky.onclick = function () {
    listContact.classList.toggle('contact-hide')
}
window.addEventListener('scroll', function () {
    const cmt = document.querySelector('.cmt')
    const lenghtreac=document.querySelectorAll('.cmt-avatar')
    if (window.pageYOffset > 140) {
        cmt.style.display="block";
        document.getElementById("SL-reaction").innerHTML=lenghtreac.length-1+" đánh giá"
    } else {
        cmt.style.display="none"; 
    }
})

window.addEventListener('scroll', function () {
    const temp = document.querySelector('.box-right1-cover')
    if (window.pageYOffset >500 ) {
        temp.style.display="none";
    }
    else {
        temp.style.position="fixed"
        temp.style.width="23%"
        temp.style.display="block"
    }
})
function play(){
    document.getElementById("play").style.display="none";
    document.getElementById("playvideo").style.display="block";
    
}
function insertcmt(){
    var t1='<div class="cmt-avatar">'
    var t2='<i class="avt fas fa-user-circle"></i>'
    var t3=' </div>'
    var t4='<div class="cmt-body">'
    var t5=`<span class="cmt-name">${document.querySelector('.logged-user-coin').innerHTML}</span>`
    var t6='<div class="cmt-detail">'
    var t7=document.getElementById('input').value
    var t8='</div></div>'
    var t9='<div class="cmt-like-cmt">'
    var t10='<button id="like" class="thich" onclick="like(this);">Thích</button>'
    var t11='<button id="cmt" onclick="cmt(this);">Trả lời</button></div>'
    var temp= ' <div id="re-cmt" class="cmt" >  </div>'
    var t12='<div id="insert" class="insert"></div></div>'
    const last=document.querySelectorAll('.insert')
    const lenghtreac=document.querySelectorAll('.cmt-avatar')

    
    if(document.getElementById("input").value !=''){
        last[last.length-1].innerHTML=t1 +t2 +t3+t4+t5+t6+t7+t8+t9+t10+t11+temp+t12
        document.getElementById("SL-reaction").innerHTML=lenghtreac.length+" đánh giá"
    }
}
function like(obj){
    obj.innerHTML="Đã thích"
    obj.style.color="blue"
    obj.style.textDecoration="underline"
}
function cmt(obj){
  
    document.getElementById("re-cmt").style.display="block"
    document.getElementById("re-cmt").innerHTML=
    ' <input type="text" name="Trả lời comment" id="input-re-cmt" class="input"><span type="button" id="insertcmt" onclick="recmt(this);">Gửi</span>'
}
function recmt(obj){
    var t0='<div style="width:110%;margin-left:100px"">'
    var t1='<div class="cmt-avatar">'
    var t2='<i class="avt fas fa-user-circle"></i>'
    var t3=' </div>'
    var t4='<div class="cmt-body" style="text-align:left;">'
    var t5='<span class="cmt-name" >Nguyễn Văn B</span>'
    var t6='<div class="cmt-detail" style="max-width:500px;">'
    var t7=document.getElementById('input-re-cmt').value
    var t8='</div></div>'
    var t9='<div class="cmt-like-cmt" style="width:auto;">'
    var t10='<button id="like" class="thich" onclick="like(this);">Thích</button>'
    var t11='<button id="cmt" onclick="cmt(this);">Trả lời</button></div>'
    var temp=  ' <div id="re-cmt" class="cmt" ></div>'
    var t12='</div></div>'
    if(t7 !=""){
    obj.innerHTML=t0+t1 +t2 +t3+t4+t5+t6+t7+t8+t9+t10+t11+t12
    document.getElementById("input-re-cmt").style.display="none"
    const length=window.querySelectorAll('.cmt-avatar')
    document.getElementById("SL-reaction").innerHTML=(lenghtreac.length+1)+" đánh giá"
    }
}
