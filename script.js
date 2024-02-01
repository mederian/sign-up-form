const password = document.querySelector('#password');
const confirmPass = document.querySelector('#confirm');
const passwrodStrength = document.querySelector('#passwordstrength');
const passwordInstruction = document.querySelector('#passwordinstruction');

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
        passwordInstruction.style.visibility = 'hidden';
    }
    else{
        password.setCustomValidity("Invalid Field");
        passwordInstruction.style.visibility = 'visible';
    }
});


function validateStrength(password){
    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(password);
}
