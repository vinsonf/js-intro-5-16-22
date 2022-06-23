console.log(document.forms[0][1])
console.log(document.forms.info.email)
console.log(document.forms.info.username)
console.log(document.forms[0][0])


document.forms.info.addEventListener('submit', (e) => {
    e.preventDefault();

    document.forms.info.classList.add('hidden');
    document.querySelector('#username').innerHTML = document.forms.info.username.value;
    document.querySelector('#email').innerHTML = document.forms.info.email.value;
    document.querySelector('#results').classList.remove('hidden');
})
