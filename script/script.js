const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


function showError(input, message){

    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;

}

function showSuccess(input){

    const formControl = input.parentElement;
    formControl.className = 'form-control success';

}

function isEmailValidate(email)
{
        const re = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
        return re.test(email);
 }



 function checkRequired(inpArr){
    inpArr.forEach(function(input){

        if(input.value.trim() === ''){
            showError(input,`${input.id} is required`)
        }
        else{
            
            showSuccess(input);
        }
    })
 }



form.addEventListener('submit', function(e){

    e.preventDefault();

    checkRequired([username,email,password,password2]);


})

