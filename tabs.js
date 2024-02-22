function openPlayer(playerName) {
  var i;
  var x = document.getElementsByClassName("player_tab");
  for (i = 0; i < x.length; i++) {
    console.log(x[i])
    x[i].style.display = "none";
  }
  document.getElementById(playerName).style.display = "block";

  const buttons = document.getElementsByTagName('button')
  
  Array.from(buttons).forEach(element => {
    if (element.id === `${playerName}Btn`) {
      element.style.backgroundColor = '#e54b4b'
      element.style.color = 'black'
    }
    else {
      element.style.backgroundColor = 'rgba(40, 40, 40, 0.7)'
      element.style.color = '#ff5e5e'
    }
  });
}