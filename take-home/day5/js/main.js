

function validatePassword(password){

    if (password.length < 6 || password.length > 20) {
        return alert('not the correct length');
    }

    // regex for first character is a letter
    if (!password.match(/^[a-zA-Z]/)) {
       return alert('no letter first');
    }

    const firstCharCode = password.charCodeAt(0);

    if (firstCharCode < 65 || firstCharCode > 122) {
        return alert('no letter first');
    }


    
    console.log(firstCharCode);
    
    alert('password is valid');
}

validatePassword('1bcdef');

console.log('don\'t')
