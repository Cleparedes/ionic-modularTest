function update_clock() {
    var dmy = document.getElementById('d-m-y');
    var hm = document.getElementById('h:m');
    var now = new Date();
    dmy.innerHTML = [pad_left(now.getDate()), pad_left(now.getMonth()+1), now.getFullYear()].join("-");
    hm.innerHTML = [pad_left(now.getHours()), pad_left(now.getMinutes())].join(":");
    setTimeout(update_clock, 1000);
}

function pad_left(nstr) {
    return ["0", nstr].join("").slice(-2);
}