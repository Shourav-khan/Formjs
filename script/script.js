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

function checkEmail(input)
{
        const re = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
        if(re.test(input.value.trim())){

            showSuccess(input);
            
        }else{
            showError(input, 'Email is not valid');
        }
        
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

 function checkLength(input, min , max) {

    if(input.value.length < min){

        showError(input,`${input.id} must be at least ${min} characters`);
    }

    else if(input.value.length > max)
    {

        showError(input,`${input.id} must be less than ${max} caharacters`);
    }

    else
    {
        showSuccess(input);
    }
 }

 
 function checkInputMatch(input1, input2)
 {

    if(input1.value!==input2.value){

        showError(input2, "password not match")
    }
 }





form.addEventListener('submit', function(e){

    e.preventDefault();

    checkRequired([username,email,password,password2]);
    checkLength(username, 3,10);
    checkLength(password, 5, 15);
    checkEmail(email);
    checkInputMatch(password, password2);


})


