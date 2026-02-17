console.log("ЭТО ВЕДРО ЗАПУЩЕНО, УРА");

// Переменные
let knopka = document.querySelector('.js_button');
let frazy = ["АХАХА!", "ЕЩЁ!", "ХВАТИТ УЖЕ!", "ТЫ МОНСТР!"];
let emoji = ["💥", "🔥", "⚡", "🍆", "😈", "🤘", "💀"]; 
let glitchOn = false;
let timer = null;

//Функции
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
    timer = setInterval(function(){
        document.body.style.background = randomColor();
    }, 100)
}

function stopGlitch(){
    clearInterval(timer);
}

//Клик

knopka.onclick = function(){
    document.body.style.background = randomColor();

    for (let i = 0; i < 50; i++){
        spawnEmoji();
    }

    if (glitchOn === false){
        startGlitch();
        glitchOn = true;
    } else {
        stopGlitch();
        glitchOn = false;
    }
}