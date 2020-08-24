;(function(){
    var i = document.getElementById('block-jiubanrukou').firstElementChild.firstElementChild;
    i.firstElementChild.href="#";
    i.addEventListener('click', addFavorite);
})();

function addFavorite() {
    window.external.AddFavorite(location.href, document.title);
}
