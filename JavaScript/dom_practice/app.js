const heading2 = document.querySelector('h2');
heading2.onclick = () => (heading2.innerText = 'HAHAHA');

const hoverEffect = () => console.log('boo');
document.querySelector('#heading').onmouseover = hoverEffect;

document.querySelector('h3').addEventListener('click', function() {
    alert("This works as well");
})

document.querySelector('#hello').addEventListener('click', () => alert('hello'));
document.querySelector('#goodbye').addEventListener('click', () => alert('goodbye'));

const blehBtn = document.querySelector('#bleh');

blehBtn.addEventListener('click', () => alert('bleh'), { once: true });
blehBtn.addEventListener('click', () => alert('BLEH'));

const randomClr = () => {
    const r = Math.floor(Math.random() * 255) + 1;
    const g = Math.floor(Math.random() * 255) + 1;
    const b = Math.floor(Math.random() * 255) + 1;
    return `(${r}, ${g}, ${b})`;
}

document.querySelector('#colorBtn').addEventListener('click', () => {
    document.querySelector('#rgb').innerText = `RGB Values: ${randomClr()}`;
    document.querySelector('.colorBox').style.backgroundColor = `rgb${randomClr()}`;
});

const commentSection = document.querySelector('#commentSection');
commentSection.addEventListener('submit', function(a) {
    a.preventDefault();
    const userName = document.querySelector('#username');
    const comment = document.querySelector('#commentBox');
    const newItem1 = document.createElement("li");
    const newItem2 = document.createElement("li");
    newItem1.innerText = userName.value;
    newItem2.innerText = comment.value;
    document.querySelector('#comment').append(newItem1);
    document.querySelector('#comment').append(newItem2);
    document.querySelector('#comment').append(document.createElement("br"));
    userName.value = "";
    comment.value = "";
})

//Event Bubbling Practice:

const redDiv = document.querySelector('#red');
const greenDiv = document.querySelector('#green');
const blueDiv = document.querySelector('#blue');


