let sky = document.getElementsByClassName('sky')[0]

let mario = document.getElementById('mario')
let marioX = parseInt(getComputedStyle(mario).left, 10)
let marioY = parseInt(getComputedStyle(mario).bottom, 10)

let koin = document.getElementsByClassName('koin')[0]
let koinAttribute = getComputedStyle(koin)
koinList = [koin]


function newKoin(x, y){
    let newKoin = koin.cloneNode(true)
    newKoin.className += koinList.length.toString()
    for (let i=0; i<koinAttribute.length; i++ ){
        attrName = koinAttribute[i]
        newKoin.style[attrName] = koinAttribute[attrName]
    }
    
    newKoin.style.left=x+'px'
    newKoin.style.top=445-y-30+'px'
    
    sky.appendChild(newKoin)
    koinList.push(newKoin)
}

newKoin(1200,100)
newKoin(100,200)
newKoin(800,0)

console.log(445-parseInt(getComputedStyle(koinList[1]).top,10))


function isCollide(a, b){
    if ( (a > 160 && a < 240) && b>60){
        return true
    }

    if ((a>460 && a<550) && b<100) {
        return true
    }

    return false
}

function getCoin(a, b){
    if ( (a>760 && a< 820) && b<30 ){
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

        if (getCoin(marioX, marioY)) {
            koinList[3].style.opacity = 0
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

            if (getCoin(marioX, marioY)){
                koinList[3].style.opacity = 0  
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
