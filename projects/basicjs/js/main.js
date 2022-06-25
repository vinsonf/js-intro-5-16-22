document.querySelectorAll('.trigger-modal')[0].addEventListener('click', function() {
    document.querySelector('#login-modal').classList.remove('hidden');
});
document.querySelectorAll('.trigger-modal')[1].addEventListener('click', function() {
    document.querySelector('#register-modal').classList.remove('hidden');
});
console.log(document.querySelectorAll('.trigger-modal'));


document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', function(e) {
        e.preventDefault();
        if (e.target === this) {
            this.classList.add('hidden');
            document.querySelector('img').classList.add('running');
            setTimeout(()=> {
                document.querySelector('img').classList.remove('running');
            }, 5000);
        }
    
    })
});

document.addEventListener('mousemove', function(e) {
    console.log(e);
    const x = e.clientX;
    const y = e.clientY;
     document.querySelector('#pointer');
    pointer.style.left = x - 7 + 'px';
    pointer.style.top = y - 20+ 'px';
    pointer.style.position = 'absolute';
    document.querySelector('h1').style.color = `rgb(${x%255}, ${y%255}, ${x%255})`;
})



