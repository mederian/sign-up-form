const password = document.querySelector('#password');
const confirmPass = document.querySelector('#confirm');
const passwrodStrength = document.querySelector('#passwordstrength');

const minPasswordLength = 6;

confirmPass.addEventListener('input', function(e){
    console.log(confirmPass.value);
    if(confirmPass.value === password.value){
        console.log("MATCH");
        confirmPass.setCustomValidity("");
    }
    else{
        confirmPass.setCustomValidity("Invalid Field");
    }
});

password.addEventListener('input', function(e){
    if(validateStrength(password.value)){
        password.setCustomValidity("");
    }
    else{
        password.setCustomValidity("Invalid Field");
    }
});


function validateStrength(password){
    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(password);
}
