const hamburger = document.querySelector('.hamburger');
const navUl = document.querySelector('nav ul');
const carSearch = document.querySelector('input');

hamburger.addEventListener('click', function () {
    navUl.classList.toggle('show');
    hamburger.classList.toggle('active');
});

const carNames = document.querySelectorAll('.names'); // Assuming each car has a class 'car-name'
console.log(carNames);
carSearch.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    
    carNames.forEach(name => {
        const carName = name.textContent.toLowerCase();
        const carCard = name.closest('.product'); // Assuming each car is in a 'car-card' container
        
        if (carName.includes(searchTerm)) {
            carCard.style.display = 'block';
        } else {
            carCard.style.display = 'none';
        }
    });
});