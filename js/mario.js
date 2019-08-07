function navigate(event){
    let button = event.keyCode
    let mario = document.getElementById('mario')

    mario.style.left = 100+'px'
    mario.style.top = -100+'px'

    
}

function jump(event){
    var space = event.keyCode

    let mario = document.getElementById('mario')
    let marioCss = getComputedStyle(mario)

    let curH = parseInt(marioCss.top, 10)
    let dist = 0

    if (space == 32){
        let j = setInterval(toJump, 0)
    }

    function toJump(){
        if (dist < 100){
            curH--
            mario.style.top = curH + 'px'
        } else if (dist < 200) {
            curH++
            mario.style.top = curH + 'px'
        } else if (dist == 200) {
            clearInterval(j)
        }
        dist++
    }


}

function move(event) {
    var k = event.keyCode
    chrId = document.getElementById('mario')
    chr = {
        leftright: function () {
            var x = parseInt(getComputedStyle(chrId).left);
            if (k == 65 || k == 33) {
                x-=10;
            } else if (k == 68 || k == 34) {
                x+=10;
            }
            
            return x;
        }
    };

    // chrId.style.top = (chr.updown()) + "px";
    chrId.style.left = (chr.leftright()) + "px";
}

document.addEventListener('keydown', jump);
document.addEventListener('keydown', move);
