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
    document.querySelector('#rgb').innerText = `RGB Values: (${r}, ${g}, ${b})`;
    document.querySelector('.colorBox').style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

document.querySelector('#colorBtn').addEventListener('click', randomClr);