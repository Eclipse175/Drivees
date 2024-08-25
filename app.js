const hamburger = document.querySelector('.hamburger');
const navUl = document.querySelector('nav ul');
const carSearch = document.getElementById('search-car');
const detailsButtons = document.querySelectorAll('.product button');
const modalOne = document.getElementById('modal-one');
const modalOneContent = document.getElementById('content-one');
const carNames = document.querySelectorAll('.names'); // Assuming each car has a class 'car-name'
const closeButton = document.getElementById('close');

const carList = document.querySelectorAll('.product')
const carDetails = document.querySelector('.car-details');

hamburger.addEventListener('click', function () {

    navUl.classList.toggle('show');
    hamburger.classList.toggle('active');
});

detailsButtons.forEach(button => {
    button.addEventListener('click', function () {
        modalOne.style.display = 'flex';
    });
});

closeButton.addEventListener('click', function () {
    modalOne.style.display = 'none';
});

const carData = [
    car1 = {
        name: 'Mercedes AMG GT',
        price: '$25,000',
        image: 'https://images.pexels.com/photos/26563758/pexels-photo-26563758/free-photo-of-black-mercedes-amg-gt-on-road.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'Mercedes-Benz AMG GT S is the top model in the AMG GT lineup and the price of AMG GT top model is Rs. 2.16 Crore. Mercedes-Benz AMG GT S is available in Automatic transmission and offered in 9 colours: Magnetite Black, Brilliant Blue, Selenite Grey, Designo Selenite Grey Magno, Designo Hyacinth Red Metallic, Designo Iridium Silver Magno, Iridium Silver, Designo Diamond White Bright and AMG Solarbeam.',
    },
    car2 = {
        name: 'Chevrolet Corvette C8',
        price: '$22,000',
        image: 'https://images.pexels.com/photos/8980830/pexels-photo-8980830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'The C8-generation Chevrolet Corvette represents the most innovative iteration of the American sports car. Not only did the Corvette finally make the move from a front- to a mid-engine layout, the C8 is the first version of Chevrolet`s performance flagship to be offered as a hybrid and with all-wheel drive. The extreme Z06 model uses a flat-plane crank V-8 engine, positioning it as a formidable contender against the Porsche 911 and legitimately challenging Italian supercars such as the Ferrari 296 GTB and the Lamborghini Huracan.',
    },
    car3 = {
        name: 'Lamborghini Aventador',
        price: '$35,000',
        image: 'https://images.pexels.com/photos/5058350/pexels-photo-5058350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'With a raucous 769-hp V-12 engine and an exotic exterior, the 2022 Lamborghini Aventador is the definition of a hyper car. While competitors such as the Ferrari SF90 embrace an electrified future, the Lambos 12-cylinder mill swills fuel like a frat bro chugs a beer. Its scissor doors, wide and low proportions, and heavily vented bodywork double as a theater on wheels thats perpetually playing the Fast and Furious movies. Inside, its highly customizable cabin has room for two riders, but theres very little space to store loose items. Behind the wheel, the driver can activate the Aventadors shrieking soundtrack with a stab of their right foot or experience the massive machines surprising agility by twirling the tiller. While its obsolete automatic transmission is almost as frustrating as the roadsters cumbersome roof removal, those are but a small penance for the 2022 Aventadors otherwise awesome powers and unmistakable style.',
    },
    car4 = {
        name: 'Nissan GTR',
        price: '$60,000',
        image: 'https://images.pexels.com/photos/11941023/pexels-photo-11941023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'Since 2007 the Nissan GT-R Car has helped Nissan earn the respect and adulation of the racing world thanks to its fastest production car lap time record set at the Nürburgring. Since then the Nissan Skyline GT-R has not once slowed down and thanks to its revolutionary Twin Turbo V6 it can do 0 – 100km/h in under 3 seconds.',
    },
]
carList.forEach((carElement, index) => {
    carElement.addEventListener('click', () => {
        const car = carData[index];
        const carBrand = document.querySelector('.car-name');
        const carDescription = document.querySelector('.car-details');
        carBrand.innerText = car.name;
        carDescription.innerText = car.description;
    });
});


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
