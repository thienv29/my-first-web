window.addEventListener('scroll', function () {
    const logo = document.querySelector('.header-logo img')
    const head = document.querySelector('.header-container')
    const head1 = document.querySelector('.header')
    const sticky = document.querySelector('.to-top-sticky')
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
        head1.style.backgroundColor = "var(--header-hide)"
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
        var c = string.split('.')
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
const iconCourseHead = document.querySelector('.logged-icon-course')
iconCourseHead.onmouseover = function () {
    const percent = document.querySelectorAll('.course-percent .course-percent-circle:nth-child(2)')
    for (let index = 0; index < percent.length; index++) {
    const element = percent[index];
    const spanPercent = element.parentElement.parentElement.querySelector('.course-percent-text').innerHTML
    percentInt = parseInt(spanPercent.split("%")[0])
    element.style.strokeDasharray = "220"
    element.style.strokeDashoffset = `calc(220 - (220*${percentInt})/100`
}
}
const videoItem0 = document.querySelectorAll('.course-video-content input')
const videoItem = document.querySelectorAll('.course-video-content')
for (let index = 0; index < videoItem.length; index++) {
    const element = videoItem[index];
    const element0 = videoItem0[index];
    element.onclick = function () {
        if (element.querySelector('input').checked== true){
            element.querySelector('input').checked= false
        } else{
            element.querySelector('input').checked= true
        }
        var p = 0;


        for (let index = 0; index < videoItem.length; index++) {
            const element = videoItem[index];
            if (element.querySelector('input').checked == true){
                p++;
            }
            
        }
        var percent = Math.floor(p/videoItem.length*100) 
        const textPercent =  document.querySelector('.process-course-percent span')
        const scalePercent = document.querySelector('.process-scale')
        scalePercent.style.width = `${percent+"%"}`
        textPercent.innerHTML = percent + "%"
    }
    element0.onclick = function () {
        if (element0.checked== true){
            element0.checked= false
        } else{
            element0.checked= true
        }
        var p = 0;


        for (let index = 0; index < videoItem.length; index++) {
            const element = videoItem[index];
            if (element.querySelector('input').checked == true){
                p++;
            }
            
        }
        var percent = Math.floor(p/videoItem.length*100) 
        const textPercent =  document.querySelector('.process-course-percent span')
        const scalePercent = document.querySelector('.process-scale')
        scalePercent.style.width = `${percent+"%"}`
        textPercent.innerHTML = percent + "%"
    }
}
const iconFeeling = document.querySelectorAll('.icon-feeling')
iconFeeling.forEach(function(element){
    element.onclick = function () {
        element.classList.toggle('feeling-acctive')
        if (iconFeeling[0].className.includes("feeling-acctive")) {
            iconFeeling[1].className = "icon-feeling fas fa-heart-broken"
        }
        if (iconFeeling[1].className.includes("feeling-acctive")){

            iconFeeling[0].className = "icon-feeling fas fa-heart"
        }
    }
})



