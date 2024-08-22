const hamburger = document.querySelector('.hamburger');
const navUl = document.querySelector('nav ul');
const carSearch = document.getElementById('search-car');
const detailsButtons = document.querySelectorAll('.product button');
console.log(detailsButtons);

hamburger.addEventListener('click', function () {

    navUl.classList.toggle('show');
    hamburger.classList.toggle('active');
});

const carNames = document.querySelectorAll('.names'); // Assuming each car has a class 'car-name'
carSearch.addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase();

    carNames.forEach(name => {
        const carName = name.textContent.toLowerCase();
        const carCard = name.closest('.product'); // Assuming each car is in a '.product' container

        if (carName.includes(searchTerm)) {
            carCard.style.display = 'block';
        } else {
            carCard.style.display = 'none';
        }
    });
});

detailsButtons.forEach(button => {
    button.addEventListener('click', toggleModalOne());
});

const modalOne = document.getElementById('modal-one');
const modalOneContent = document.getElementById('content-one');
const closeModal = document.querySelector('.close-button');
console.log(closeModal);