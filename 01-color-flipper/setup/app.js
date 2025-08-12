const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025', 'cyan'];

const btn = document.getElementById('btn');

const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    const random_number = getRandomNumber()
    
    document.body.style.backgroundColor = colors[random_number];
    color.textContent = colors[random_number];
})

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}