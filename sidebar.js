var menuBtn = document.querySelector('#menu-btn');
var sidebar = document.querySelector('.sidebar');

var flag = 0;
menuBtn.addEventListener('click', function () {
    if (flag == 0) {
        sidebar.style.transform = 'translateX(0px)';
        flag = 1;
    }
    else {
        sidebar.style.transform = 'translateX(-100%)';
        flag = 0;
    }
})
