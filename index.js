let fnameEle = document.getElementById("name")
let emailEle = document.getElementById("email")
let mobileEle = document.getElementById("mobile")
let cityEle = document.getElementById("city")

let fnameErrorEle = document.getElementById("nameerror")
let emailErrorEle = document.getElementById("emailerror")
let mobileErrorEle = document.getElementById("moberror")
let cityErrorEle = document.getElementById("cityerror")

let submitBtnEle = document.getElementById("submit-btn")

let successMessageEle = document.getElementById("success-message")

function name_vaidate() {
    var regexp = /^[a-zA-Z ]{2,50}$/;
    if (fnameEle.value === "") {
        fnameErrorEle.textContent = "*this field is required"
        fnameEle.style.border = "1px solid red"
        return false
    }else if (!regexp.test(fnameEle.value)){
        fnameErrorEle.textContent = "*please enter valid name"
        fnameEle.style.border = "1px solid red"
        return false
    } else {
        fnameErrorEle.textContent = ""
        fnameEle.style.border = "1px solid #F7F5F2"
        return true
    }
}

function email_validate() { 
    let index = emailEle.value.indexOf("@")
    if (emailEle.value == "") {
        emailErrorEle.textContent = "*this field is required"
        emailEle.style.border = "1px solid red"
        return false
    }else if(index==-1) {
        emailErrorEle.textContent = "*please enter valid email"
        emailEle.style.border = "1px solid red"
        return false
    }else {
        emailErrorEle.textContent = ""
        emailEle.style.border = "1px solid #F7F5F2"
        return true

    }
}

function  mobile_validate() {
    let regexp = /^[6-9][0-9]{9}$/
    if (mobileEle.value === "") {
        mobileErrorEle.textContent = "*this field is required"
        mobileEle.style.border = "1px solid red"
        return false
    }else if (!regexp.test(mobileEle.value)) {
        mobileErrorEle.textContent = "*please enter valid number, number starts with 6-9 and having 10 digits"
        mobileEle.style.border = "1px solid red"
        return false
    }else {
        mobileErrorEle.textContent = ""
        mobileEle.style.border = "1px solid #F7F5F2"
        return true
    }
}

function city_validate() {
    if (cityEle.value === "") {
        cityErrorEle.textContent = "*this field is required"
        cityEle.style.border = "1px solid red"
        return false
    }else {
        cityErrorEle.textContent = ""
        cityEle.style.border = "1px solid #F7F5F2"
        return true
    }
}

function successMessage() {
    successMessageEle.textContent = "Form submitted successfully"
    setTimeout(function() {
        successMessageEle.textContent = ""
    }, 2000)
}
function validation() {
    let v1 = name_vaidate()
    let v2 =  email_vaidate()
    let v3 = mobile_validate()
    let v4 = city_validate()

    console.log(v1 & v2 & v3 & v4);
    if (v1 & v2 & v3 & v4) {
        fnameEle.value = ""
        emailEle.value = ""
        mobileEle.value = ""
        cityEle.value = ""
        successMessage()
    }

    return v1 & v2 & v3 & v4
}
