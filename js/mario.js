  function move(event) {
    var k = event.keyCode,
        chrId = document.getElementById('mario'),
        chr = {
            leftright: function () {
                var x = parseInt(getComputedStyle(chrId).left);
                if (k == 65) {
                   x-=10;
                } else if (k == 68) {
                    x+=10;
                }
                
                return x;
            }
        };

    // chrId.style.top = (chr.updown()) + "px";
    chrId.style.left = (chr.leftright()) + "px";
}

document.addEventListener('keydown', move);