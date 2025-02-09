// Play background music
window.onload = function() {
    document.getElementById('bgMusic').play();
};

// Countdown Timer to Valentine's Day
function countdown() {
    let valentineDate = new Date("February 14, 2025 00:00:00").getTime();
    let now = new Date().getTime();
    let distance = valentineDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "Happy Valentine's Day!";
    }
}
setInterval(countdown, 1000);

// Yes/No Button Actions
document.getElementById('yesBtn').onclick = function() {
    document.getElementById('loveLetter').style.display = 'block';
    document.getElementById('quotes').style.display = 'none';
    document.getElementById('bgMusic').play();
};

document.getElementById('noBtn').onclick = function() {
    document.getElementById('quotes').style.display = 'block';
    document.getElementById('loveLetter').style.display = 'none';
};
