function recover_weekly_alerts() {
    var text = document.getElementById('alerts');
    var bell = '<ion-icon name="notifications"></ion-icon>'
    var alerts = 11; //ajax
    text.innerHTML = [alerts, bell].join(" ");
}