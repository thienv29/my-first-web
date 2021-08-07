var switchForm = document.querySelector('.switch-form-btn')
const containerLogin =document.querySelector('.container-login')
const svgLogin1 = document.querySelector('.svg-login1')
const svgLogin2 = document.querySelector('.svg-login2')
switchForm.onclick = function(){
    svgLogin1.classList.toggle('opacityNone')
    svgLogin2.classList.toggle('opacityNone')
    containerLogin.classList.toggle('sw-form')
    containerLogin.classList.toggle('sw-form1')
}




