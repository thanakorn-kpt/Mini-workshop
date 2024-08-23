const productImg = document.getElementById('productImg');
const productName = document.getElementById('productName');
const productPrice = document.getElementById('productPrice')
const bluecolor = document.getElementById('bluecolor');
const redcolor = document.getElementById('redcolor');
const greencolor = document.getElementById('greencolor');
const productBrand = document.getElementById('productBrand');
const limited = document.getElementById('limited');


redcolor.addEventListener('click',() =>{
    productImg.src = 'img/nike-red.png';
    productName.textContent = 'Red Nike Dunk High By You'
    productPrice.innerHTML = '<strong>$150.00</strong>';
    productBrand.style.backgroundColor = 'red';
    limited.style.display = 'block';
})
bluecolor.addEventListener('click',() =>{
    productImg.src = 'img/nike-blue.png';
    productName.textContent = 'Blue Nike Dunk High By You'
    productPrice.innerHTML = '<strong>$100.00</strong>';
    productBrand.style.backgroundColor = 'blue';
    limited.style.display = 'none';
})
greencolor.addEventListener('click',() =>{
    productImg.src = 'img/nike-green.png';
    productName.textContent = 'Green Nike Dunk High By You'
    productPrice.innerHTML = '<strong>$99.99</strong>';
    productBrand.style.backgroundColor = 'green';
    limited.style.display = 'none';
})