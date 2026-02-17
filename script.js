console.log("ЭТО ВЕДРО ЗАПУЩЕНО, УРА");

// Переменные
let knopka = document.querySelector('.js_button');
let fon = document.querySelector('.backgound');
let frazy = ["АХАХА!", "ЕЩЁ!", "ХВАТИТ УЖЕ!", "ТЫ МОНСТР!"];
let emoji = ["💥", "🔥", "⚡", "🍆", "😈", "🤘", "💀"]; 
let glitchOn = false;
let timer = null;


//Функции

function traska(){
    return Math.floor(Math.random() * 180 - 85);
}

function randomColor(){
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function spawnEmoji(){
    let newDiv = document.createElement('div');
    let ranX = Math.floor(Math.random() * window.innerWidth);
    let ranY = Math.floor(Math.random() * window.innerHeight);
    let num = Math.floor(Math.random() * emoji.length);
    
    newDiv.textContent = emoji[num];
    newDiv.style.position = 'fixed';
    newDiv.style.left = ranX + 'px';
    newDiv.style.top = ranY + 'px';
    newDiv.style.fontSize = '40px';
    document.body.appendChild(newDiv);

}

function startGlitch(){
    document.body.style.transition = 'transform 0.6s, background 1.8s';
    timer = setInterval(function(){
        document.body.style.background = randomColor();
        document.body.style.transform = 'translate(' + traska() + 'px, ' + traska() + 'px)';
    }, 500)
}

function stopGlitch(){
    clearInterval(timer);
    document.body.style.transform = 'translate(0px, 0px)';
}

//Клик

knopka.onclick = function(){
    document.body.style.background = randomColor();

    for (let i = 0; i < 50; i++){
        spawnEmoji();
    }

}

fon.onclick = function(){
    if (glitchOn === false){
        startGlitch();
        glitchOn = true;
    } else {
        stopGlitch();
        glitchOn = false;
    }
}