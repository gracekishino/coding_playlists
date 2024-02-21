function openPlayer(playerName) {
    var i;
    var x = document.getElementsByClassName("player_tab");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(playerName).style.display = "block";
}
