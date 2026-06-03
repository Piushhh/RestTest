/**
 * steps to implement the text counting limiting logic:
 * the first thing that needs to be done is when the user starts typing is to start counting the letters and dynamically update the count-char div in the bottom of the text area.
 * then as soon as the limit is reached the boreder of the text area turs red.
 * so i need to access the text area first and somehow link it to the div below so they work together.
 * then the css logic will be applied to stop the user from writing anymore
 */

const text = document.getElementById("textarea");
const textCount = document.getElementById('char-count');
const textWrapper = document.querySelector('.wrapper');

const maxChar = 5;

text.addEventListener('input', () => {
    
    const currentLength = text.value.length;
//when the user starts typing the count of character goes up
    textCount.textContent = `${currentLength} / ${maxChar}`;

    if(currentLength >= maxChar){
        textWrapper.classList.add('limit-reached');
    }else {
        textWrapper.classList.remove('limit-reached');
    }
});
