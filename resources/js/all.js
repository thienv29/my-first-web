const headerLogout = document.querySelector('.logout')
const c = document.querySelectorAll('.course-home-box')
console.log(headerLogout)
headerLogout.onclick = function () {
    document.querySelector('.header-user').classList.remove('has-logged')
    const continuteCourse = document.querySelectorAll('.btn-home-box-continue')
    if (document.querySelector('.header-user').className.includes('has-logged')==false){
        continuteCourse.forEach(function (element) {
            element.innerHTML = "Đăng nhập"
        })
        c.forEach(function (e) {
            e.querySelector('a').setAttribute("href","/webDesign/login.html")
        })
    }
}