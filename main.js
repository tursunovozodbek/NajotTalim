var elLightThemeButton = document.querySelector('.js-light-theme-button');
var elDarkThemeButton = document.querySelector('.js-dark-theme-button');

elLightThemeButton.addEventListener('click', function (){
    document.body.classList.remove('dark-mode');
});

elDarkThemeButton.addEventListener('click', function (){
    document.body.classList.add('dark-mode');
});
