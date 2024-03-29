const password = document.querySelector('#password');
const confirmPass = document.querySelector('#confirm');
const passwrodStrength = document.querySelector('#passwordstrength');
const passwordInstruction = document.querySelector('#passwordinstruction');
const passwordmatch = document.querySelector('#passwordmatch');
const firstname = document.querySelector('#firstname');
const lastname = document.querySelector('#lastname');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');



const minPasswordLength = 6;

confirmPass.addEventListener('input', function(e){
    console.log(confirmPass.value);
    if(confirmPass.value === password.value){
        console.log("MATCH");
        confirmPass.setCustomValidity("");
        passwordmatch.style.visibility = 'hidden';
    }
    else{
        confirmPass.setCustomValidity("Invalid Field");
        passwordmatch.style.visibility = 'visible';
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
