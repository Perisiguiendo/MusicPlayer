var index = 0;

function start() {
    var start = document.getElementById("btn_play");
    var cartridge = document.getElementById("cartridge");
    var rainbow = document.getElementById("rainbow");
    if (start.onclick) {
        if (index == 1) {
            cartridge.style.transform = "rotate(-30deg)";
            rainbow.style.animation = "0 rainbow";

            index = 0;
        } else {
            index = 1;
            cartridge.style.transform = "rotate(0deg)";
            rainbow.style.animation = "20s rainbow infinite linear";
        }
    }
}

function btn_collect() {
    var collect = document.getElementById("collection");
    if (collect.onclick) {
        if (index == 1) {
            collect.style.backgroundColor = "red";
            index = 0;
        } else {
            index = 1; 
        }
    }
}