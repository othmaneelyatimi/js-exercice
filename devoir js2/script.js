//EX 1

document.getElementById('username')
.insertAdjacentHTML('beforebegin','<label for="username">Username: </label>');

document.getElementById('pass')
.insertAdjacentHTML('beforebegin','<label for="pass">Password: </label>');

document.getElementById('re-pass')
.insertAdjacentHTML('beforebegin','<label for="re-pass">confirm Password: </label>');

//EX 2

const check = (event) =>{
    const err = Array.from(event.target.parentNode.queryselectorAll('span'));
    if(event.target.value === ''){
        event.target.insertAdjacentHTML('afterEnd','<span class="red">Required</span>')
    }
};

document.getElementById('username')
    .addEventListener('blur',check);
document.getElementById('pass')
    .addEventListener('blur',check);
document.getElementById('re-pass')
    .addEventListener('blur',check);
