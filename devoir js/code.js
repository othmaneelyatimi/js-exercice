/*const text = document.querySelector('p');
text.innerHTML =  text.innerText
const highlights = word => {
  if (word.length > 6) {
    return '<span style=background-color:"teal">'${word}'</span>'
  } else {
    return word
  }
}
.split(' ')
.map(highlights)
join(' ');
*/

//qst 2

const link = document.createElement('a');
link.href = 'https://forcemipsum.com/';
link.innerText = 'link';
document.body.appendChild(link);

//qst 3

let text = document.querySelector('p');
let regExp = /(?<=[.]+)\s+/g;
text.innerText = text.innerText.replace(regExp, '\n');

//qst 4

const counter = paragraph.innerText.split('/\S+/').length
const words = document.createElement('h2')
words.innerText = `${words} words`;
document.body.insertBefore(words, paragraph);

//qst 5

paragraph.innerText = paragraph.innerText
  .split('')
  .map((word) => {
    if (word == '?') {
    return  word = '🤔';
    } else if (word == '!') {
    return  word = '😲';
    }else{
    return  word
    }
  })
  .join('');