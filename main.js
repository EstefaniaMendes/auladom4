let ibagemList = [
  'imagemGif.gif',
  'imagem.jpg',
  'imagem2.jpg',
  'imagem3.jpg',
  'imagem4.jpg',
  'imagem5.jpg',
]

let counter = 0;

function setIbagem() {

}

let corpin = document.querySelector('body');

let before = document.createElement('h1');
let beforeText = document.createTextNode('<')
before.appendChild(beforeText);


let ibagem = document.createElement('img');
ibagem.setAttribute ('src', ibagemList[counter])


let next = document.createElement('h1')
let nextText = document.createTextNode('>')
next.appendChild(nextText);

function init() {
  console.log(before,next);
  corpin.appendChild(before);
  corpin.appendChild(ibagem);
  corpin.appendChild(next);
}

before.addEventListener('click', function() {
   if ( counter > 0) {
     counter = counter -1;
     ibagem.setAttribute ('src', ibagemList[counter])
   } 
})

next.addEventListener('click', function() {
  if ( counter < 5) {
    counter = counter + 1;
    ibagem.setAttribute ('src', ibagemList[counter])
  } else { counter = 0}
})

init();