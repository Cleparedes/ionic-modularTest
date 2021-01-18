function toggle_color() {
    var card = document.getElementById('card');
    var text = document.getElementById('text');
    var toggle = document.getElementById('toggle');
    if (toggle.checked) {
        card.color = "dark";
        text.color = "light";
    }
    else {
        card.color = "light";
        text.color = "dark";
    }
}