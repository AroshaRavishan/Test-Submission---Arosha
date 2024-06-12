
// Top bar js

function closeTopBar() {
    var topBar = document.getElementById('topBar');
    topBar.style.opacity = '0';
    setTimeout(function () {
        topBar.style.display = 'none';
    }, 500);
}

// menu js

document.getElementById('user-menu').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    var arrowIcon = document.getElementById('arrow-icon');
    
    if (menu.style.display === 'none') {
        menu.style.display = 'block';
        arrowIcon.classList.remove('fa-angle-down');
        arrowIcon.classList.add('fa-angle-up');
    } else {
        menu.style.display = 'none';
        arrowIcon.classList.remove('fa-angle-up');
        arrowIcon.classList.add('fa-angle-down');
    }
});

