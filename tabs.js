function openPlayer(cityName) {
    var i;
    var x = document.getElementsByClassName("player_tab");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(cityName).style.display = "block";
}

window.onload = function() {
    var navRefer = document.getElementById('nav_refer');
    var header = document.querySelector('header');

    navRefer.addEventListener('mouseover', function() {
        header.classList.add('shadow');
    });

    navRefer.addEventListener('mouseout', function() {
        header.classList.remove('shadow');
    });
}