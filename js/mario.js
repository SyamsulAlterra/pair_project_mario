let mario = document.getElementById('mario')
let marioX = parseInt(getComputedStyle(mario).left, 10)
let marioY = parseInt(getComputedStyle(mario).bottom, 10)

// function navigate(event){
//     let button = event.keyCode
//     let mario = document.getElementById(mario)

//     mario.style.left = 100+'px'
//     mario.style.top = -100+'px'
// }

function isCollide(a, b){
    if ( (a > 160 && a < 240) && b>60){
        return true
    }

    if (a>460){
        return true
    }

    return false
}

function jump(event){
    var space = event.keyCode
    let dist = 0
    let j
    console.log('X',marioX)
    console.log('Y',marioY)
    if (space == 32){
        let j = setInterval(toJump, 0)
    }
    
    
    function toJump(){
        if (isCollide(marioX, marioY)){
            alert('game over')
            location.reload()
        }
        
        if (dist < 100){
            marioY++
            mario.style.bottom = marioY + 'px'
        } else if (dist < 200) {
            marioY--
            mario.style.bottom = marioY + 'px'
        } else if (dist == 200) {
            clearInterval(j)
        }
        dist++
    }


}

function move(event) {
    var k = event.keyCode
   
    chr = {
        leftright: function () {
            if (isCollide(marioX, marioY)){
                alert('game over')
                location.reload()
            }

            if (k == 65 || k == 33) {
                marioX-=10;
            } else if (k == 68 || k == 34) {
                marioX+=10;
            } else if ( k == 87) {
                marioY+=5;
            } else if (k == 83) {
                marioY-=5;
            }

            console.log('X', marioX)
            console.log('Y',marioY)            
            
            return [marioX, marioY];
        }
    };

    // mario.style.top = (chr.updown()) + "px";
    mario.style.left = (chr.leftright()[0]) + "px";
    mario.style.bottom = (chr.leftright()[1]) + "px";

}

document.addEventListener('keydown', jump);
document.addEventListener('keydown', move);
