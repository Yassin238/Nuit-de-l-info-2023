document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}
function ouvrirIndex() {
    // Ouvrir l'index.html dans un nouvel onglet
    window.open('index2.html', '_blank');
}