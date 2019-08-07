function move(){
    let mario = document.getElementById('mario')

    mario.style.left = 100+'px'
    mario.style.top = -100+'px'

    
}

function jump(){
    let mario = document.getElementById('mario')
    let marioCss = getComputedStyle(mario)
    let curH = parseInt(marioCss.top, 10)
    let dist = 0
    let j = setInterval(toJump, 0)

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