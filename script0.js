console.log("Скрипт подключен, ебана народ погнали нахуй!!!");

let knopka = document.querySelector('.js_button');
let frazy = ["АХАХА!", "ЕЩЁ!", "ХВАТИТ УЖЕ!", "ТЫ МОНСТР!"];
let emoji = ["💥", "🔥", "⚡", "🍆", "😈", "🤘", "💀"];

console.log(knopka);

let glitchOn = false;
let timer = null;
// Событие на клик
knopka.onclick = function(){
    let color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.background = color;

    let nomer = Math.floor(Math.random() * frazy.length);
    
    console.log(frazy[nomer]);
    console.log("КНОПКА НАЖАТА, СУЧАРА!");

    knopka.textContent = frazy[nomer];
    for (let i = 0; i < 50; i++){
    
    let newDiv = document.createElement('div');
    let ranX = Math.floor(Math.random() * window.innerWidth);
    let num = Math.floor(Math.random() * emoji.length);
    let ranY = Math.floor(Math.random() * window.innerHeight);
    newDiv.textContent = emoji[num];
    newDiv.style.position = 'fixed';
    newDiv.style.left = ranX + 'px';
    newDiv.style.top = ranY + 'px';
    newDiv.style.fontSize = '40px';
    document.body.appendChild(newDiv);
    }
  if (glitchOn === false){
    glitchOn = true;
    timer = setInterval(function(){
        
    })
  }  else {
    glitchOn = false;
    clearInterval(timer);
  }
}
