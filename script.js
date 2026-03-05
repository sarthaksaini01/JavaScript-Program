const typingtext = document.querySelector('typing text p');
const input = document.querySelector('.wrapper .inputfield');
const time = document.querySelector('.time span b');
const mistake  = document.querySelector('.mistake span');
const wpm = document.querySelector('.wpm span');
const cpm = document.querySelector('.cpm span');
const Btn = document.querySelector('button');

function loadparagraph(){
    const paragraph=["The sun dipped below the horizon", "painting the sky in shades of orange and pink", "A cool breeze rustled the trees", "and the city lights began to twinkle one by one", "People hurried home", "some laughing", "some lost in thought", "as another peaceful evening settled in"];

const randomparagraph = paragraph[Math.floor(Math.random() * paragraph.length)];
typingtext.innerHTML = '';  
for(const char of randomparagraph[randompindex]){
    console.log(char);
    typingtext.innerHTML+=`<span>${char}</span>`; 
}
}
loadparagraph();
