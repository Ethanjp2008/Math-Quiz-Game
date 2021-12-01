function adduser() {

    player1_user = document.getElementById("input1").value;
    player2_user = document.getElementById("input2").value;
    localStorage.setItem("player1_user", player1_user);
    localStorage.setItem("player2_user", player2_user);
    window.location = "game_page.html";

}