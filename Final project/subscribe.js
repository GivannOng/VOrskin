function validateSubscribe(){
    if (!validateUserName()){
        return
    }else if (!validateEmail()){
        return
    }else if (!validatePhone()){
        return
    }else if (!validateAgree()){
        return
    }else{
        alert(document.getElementById('fullName').value + ", Welcome to the VOrskin community!")
    }
}
function validateUserName(){
    var name = document.getElementById('fullName').value
    if(name.length < 5){
        alert("Your name must be more than 5 characters")
        return false
    }else if(name.length==0){
        alert("Please fill your Name")
    }
    return true   
}
function validateEmail(){
    var email = document.getElementById('email').value
    if (!email.endsWith('.com')){
        alert("Please fill a correct email!!")
        return false
    }
    return true   
}
function validatePhone(){
    var phoneNum = document.getElementById('phoneNum').value
    if (!phoneNum.startsWith('0')){
        alert("Please input a correct number!!")
        return false
    }
    return true 
}
function validateAgree(){
    var agree = document.getElementById('agree')
    if(!agree.checked){
        alert("Please check the user agreement")
        return false
    }
    return true   
}
