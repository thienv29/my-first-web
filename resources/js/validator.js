function inputError (objectForm){
    const formElement = document.querySelector(objectForm.form)
    if (formElement){
        objectForm.rule.forEach( function (rule) {
            let inputElement = formElement.querySelector(rule.selector)
            if (inputElement){
                inputElement.onblur = function(){
                    if (rule.test(inputElement.value)){
                        inputElement.parentElement.querySelector(".input-error").innerHTML = `${rule.test(inputElement.value)}`
                    }
                    else{
                        
                        inputElement.parentElement.querySelector(".input-error").innerHTML = ""
                    }
                }
                inputElement.oninput = function(){
                    inputElement.parentElement.querySelector(".input-error").innerHTML = ""

                }
            }
            
        })
    }
    
}
inputError.isEmail = function (selector){
    return {
        selector: selector,
        test: function (value) {
            if (value.includes(".") && value.includes("@") ){
            }
            else{
                
                return "This is not an email. Please re-enter";
            }
        }
    }; 
}

inputError.isPassword = function (selector){
    lowerCase = /[a-z]/g;
    upperCase = /[A-Z]/g;
    numbers = /[0-9]/g;
    
    return {
        selector: selector,
        test: function (value) {
            if (value.match(upperCase)) {
                
            } else {
                return "Password must have uppercase characters"
            }if (value.match(lowerCase)) {
                
            } else {
                return "Password must have lowercase characters"
                
            }if (value.match(numbers)) {
                
            } else {
                return "Password must have number"
                
            }if (value.length >= 8) {
                
            } else {
                
                return "Password must be more than 8 characters"
            }
        }
    };
}
inputError.confirmPass = function (selector,getconfirm){
    return{
        selector : selector,
        test: function (value){
            if (value === getconfirm()) {

            } else {
                return "Incorrect Password"
            }
        }
    }
    
}

