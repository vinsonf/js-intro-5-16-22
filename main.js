let currentPage = null;
currentPage?.style.display = 'none';

function matchRoute(route) {
    return window.location.href === window.location.origin + route;
}
if (matchRoute('/')) {
    currentPage = document.querySelector('my-homepage');
}
if (matchRoute('/about')) {
    currentPage = document.querySelector('my-about');
}

currentPage.style.display = 'block';