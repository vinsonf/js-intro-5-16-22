const nav = document.createElement('nav');
nav.classList.add('navbar');

document.body.append(nav);

nav.addEventListener('click', function() {
    console.log('clicked');
    sidebar.classList.toggle('open');

})

const sidebar = document.createElement('aside');
sidebar.classList.add('sidebar');
document.body.append(sidebar);

sidebar.addEventListener('click', function() {
    console.log('clicked');
    nav.classList.toggle('open');  
})