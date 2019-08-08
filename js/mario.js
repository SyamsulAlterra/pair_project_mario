var lagu = document.getElementById('bg-music')
function playAudio(){
    lagu.play()
}

let sky = document.getElementsByClassName('sky')[0]

let mario = document.getElementById('mario')
let marioX = parseInt(getComputedStyle(mario).left, 10)
let marioY = parseInt(getComputedStyle(mario).bottom, 10)

let musuh = document.getElementsByClassName('musuh')[0]
let musuhAttribute = getComputedStyle(musuh)
musuhList=[musuh]


let koin = document.getElementsByClassName('koin')[0]
let koinAttribute = getComputedStyle(koin)
koinList = [koin]

function newMusuh(){
    let newMusuh = musuh.cloneNode(true)
    newMusuh.className += musuhList.length.toString()
    for (let i=0; i<musuhAttribute.length; i++ ){
        attrName = musuhAttribute[i]
        newMusuh.style[attrName] = musuhAttribute[attrName]
    }
    
    newMusuh.style.left=0+'px'
    newMusuh.style.bottom=0+'px'
    
    sky.appendChild(newMusuh)
    musuhList.push(newMusuh)
}


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
newKoin(900,300)

console.log(445-parseInt(getComputedStyle(koinList[1]).top,10))


function isCollide(a, b){
    if (b<0){
        return true
    }

    if ( (a > 160 && a < 240) && b>60){
        return true
    }

    if ((a>450 && a<560) && b<100) {
        return true
    }

    if ((a>980 && a<1020) && (b>30 && b<170)){
        return true
    }

    
    return false
}

function getCoin(a, b){
    if ((a>880 && a<920) && (b>280 && b<320)){
        return koinList[4]
    }
    if ( (a>760 && a< 820) && b<30 ){
        return koinList[3]
    }
    
    if ((a>1180 && a<1220) && (b>80 && b<120) ){
        return koinList[1]
    }

    if ((a>80 && a<120) && (b>180 && b<220)){
        return koinList[2]
    }

    if ( (a>980 && a<1020) && b<30){
        return koinList[0]
    }
    return undefined
}

function launchEnemy(){
    console.log('tes1')
    let dummy = setInterval(enemy,10000)
    
    function enemy(){
        newMusuh()
        let musuhIndex = musuhList.length-1
        let nM = musuhList[musuhIndex]
        let h = Math.floor(Math.random()*400)
        nM.style.top = h + 'px'
        nM.style.opacity = 1
        console.log(nM.style.bottom)
        let curPos = 0
        
        let a = setInterval(tembak, 10)
        
        function tembak(){
            if (curPos == 1900){
                console.log(nM.style.left)
                clearInterval(a)
            } else {
                nM.style.left = curPos+20+'px'
            }
            curPos++
        }
    }
}



function jumping(){
    let dist = 0
    let a = setInterval(jump,0)
        
    function jump(){
        if (getCoin(marioX, marioY) != undefined){
            let tangkep = getCoin(marioX, marioY)
            tangkep.style.opacity = 0
        }

        if (isCollide(marioX, marioY)){
            alert('game over')
            location.reload()
        }
        if (dist < 100){
            marioY+=2
            mario.style.bottom = marioY + 'px'
        } else if (dist < 200) {
            marioY-=2
            mario.style.bottom = marioY + 'px'
        } else if (dist == 200) {
            clearInterval(a)
        }
        dist++
    }
}
    
function leftright(event){
    let space = event.keyCode

    if (getCoin(marioX, marioY) != undefined){
        let tangkep = getCoin(marioX, marioY)
        tangkep.style.opacity = 0
    }

    if (isCollide(marioX, marioY)){
        alert('game over')
        location.reload()
    }

    if (space == 65) {
        console.log(marioY)
        marioX-=10;
        mario.style.left = marioX + 'px'
    }

    if (space == 68){
        marioX+=10
        mario.style.left = marioX + 'px'
    }
}

document.addEventListener('keydown', leftright)
// document.addEventListener('keydown', jumping);

// var mario;

// function startGame() {
//     myGameArea.start();
//     mario = new component(40, 40, 'red', 0 , 220)
//     land = new component(500, 40, 'green', 0, 260)
// }

// var myGameArea = {
//     canvas : document.createElement("canvas"),
//     start : function() {
//         this.canvas.width = 500;
//         this.canvas.height = 300;
//         this.context = this.canvas.getContext("2d");
//         document.body.insertBefore(this.canvas, document.body.childNodes[0]);
//     }
// }

// function component(width, height, color, x, y) {
//   this.width = width;
//   this.height = height;
//   this.x = x;
//   this.y = y;
//   ctx = myGameArea.context;
//   ctx.fillStyle = color;
//   ctx.fillRect(this.x, this.y, this.width, this.height);
//   this.update = function(){
//     ctx = myGameArea.context;
//     ctx.fillStyle = color;
//     ctx.fillRect(this.x, this.y, this.width, this.height);
//   }
// }