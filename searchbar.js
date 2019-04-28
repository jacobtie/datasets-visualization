const searchBtn = document.getElementById('search-btn');
const search = document.getElementById('search');
const tip = document.getElementById('tip')
var i = 0;
var message = '  Search A Keyword';
var speed = 40;

window.onload = function () {
searchBtn.addEventListener('click', () =>{
    search.style.width = '50vh';
    search.style.paddingLeft = '50px';
    search.style.cursor = 'text';
    search.focus();
    typewriter();

})
}
function typewriter() {
    if (i < message.length) {
        msg = search.getAttribute('placeholder') + message.charAt(i);
        search.setAttribute('placeholder', msg); 
        i++;
        setTimeout(typewriter, speed);
    }
    
}
search.addEventListener('keydown', () => {
    tip.style.visibility = 'visible';
    tip.style.opacity = '1';
})
search.addEventListener('keypress', (e) => {
    if(e.keyCode === 13) {
    var input = document.getElementById('search').value;
   selectKeyword(input);
    //selectKeyword(input);
    
    }
})