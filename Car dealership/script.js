import { statisticsReport, cusReview, listingsCars } from "./data/car-details.js";

document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.menu');
    const navBarUl = document.querySelector('.nav_bar ul');
    const navLinks = document.querySelectorAll('.nav_bar ul li a');



    if (window.innerWidth <= 940) {

        menuButton.addEventListener('click', function (event) {
            event.stopPropagation();
            if (navBarUl.style.display === 'block') {
                navBarUl.style.display = 'none';
            } else {
                navBarUl.style.display = 'block';
            }
        });
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                navBarUl.style.display = 'none';
            });
        });

        window.addEventListener('scroll', function () {
            navBarUl.style.display = 'none';
        });

        document.addEventListener('click', function (event) {
            if (!navBarUl.contains(event.target) && !menuButton.contains(event.target)) {
                navBarUl.style.display = 'none';
            }
        });
    }
    if (window.innerWidth <= 480) {

        window.addEventListener('scroll', function () {
            navBarUl.style.display = 'none';
        });

        document.addEventListener('click', function (event) {
            if (!navBarUl.contains(event.target) && !menuButton.contains(event.target)) {
                navBarUl.style.display = 'none';
            }
        });
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.scroll-link');

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offset = 100; // Adjust this value to your desired offset
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});






function checkInitialOffset() {
    const navbar = document.getElementById('nav-bar');
    if (window.pageYOffset >= 1) {
        navbar.classList.add('nav_shrink');
    } else {
        navbar.classList.remove('nav_shrink');
    }
}


checkInitialOffset();

document.addEventListener('scroll', () => {
    const navbar = document.getElementById('nav-bar');
    if (window.pageYOffset >= 1) {
        navbar.classList.add('nav_shrink');
    } else {
        navbar.classList.remove('nav_shrink');
    }
});

document.addEventListener('scroll', function () {
    const carModel = document.getElementById('car-model');
    if (window.pageYOffset > 90) {
        carModel.classList.add('model_appear');
    } else {
        carModel.classList.remove('model_appear');
    }
});

document.addEventListener('scroll', function () {
    const cars = document.querySelectorAll('.car');
    if (window.pageYOffset >= 90) {
        cars.forEach((car, index) => {
            setTimeout(() => {
                car.classList.add('car_appear');
            }, index * 100);
        });
    } else {
        cars.forEach((car, index) => {
            setTimeout(() => {
                car.classList.remove('car_appear');
            }, index * 100);
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const removeCardFixedClass = () => {
        cards.forEach(card => {
            card.classList.remove('card_fixed');
            card.classList.add('card');
        });
    };
    cards.forEach(card => {
        card.addEventListener('click', (event) => {
            event.stopPropagation();
            if (card.classList.contains('card_fixed')) {
                card.classList.remove('card_fixed');
                card.classList.add('card');
            } else {
                removeCardFixedClass();
                card.classList.add('card_fixed');
                card.classList.remove('card');
            }
        });
    });
    document.addEventListener('click', () => {
        removeCardFixedClass();
    });
});

document.addEventListener('scroll', function () {
    const cards = document.querySelectorAll('.card');
    if (window.pageYOffset > 300) {
        cards.forEach((car, index) => {
            setTimeout(() => {
                car.classList.add('card_appear');
            }, index * 100);
        });
    } else {
        cards.forEach((car, index) => {
            setTimeout(() => {
                car.classList.remove('card_appear');
            }, index * 100);
        });
    }
});



document.addEventListener('DOMContentLoaded', function () {
    const carTypes = document.querySelectorAll('.car-type');
    const underline = document.querySelector('.underline');

    carTypes.forEach(carType => {
        carType.addEventListener('click', function () {
            carTypes.forEach(type => type.classList.remove('car-type-active'));

            this.classList.add('car-type-active');
        });
    });
});

document.addEventListener('scroll', function () {
    const searchedCars = document.getElementById('search-title');
    if (window.pageYOffset > 800) {
        searchedCars.classList.add('searched_title_appear');
    } else {
        searchedCars.classList.remove('searched_title_appear');

    }
});


let currentIndex = 0;

function handleScroll() {
    const carCards = document.getElementsByClassName('car_card');
    if (window.pageYOffset > 830) {
        Array.from(carCards).forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('car-cards-appear');
            }, index * 50);
        });
    } else {
        Array.from(carCards).forEach((card, index) => {
            setTimeout(() => {
                card.classList.remove('car-cards-appear');
            }, index * 50);
        });
    }
}

document.addEventListener('scroll', handleScroll);



const coupeDisplay = () => {
    const cardJs = document.querySelector('.car_cards');
    cardJs.innerHTML = '';  // Clear existing content if necessary
    listingsCars.forEach((car) => {
        if (car.type === 'coupe') {
            let displayHTML = `
            <div class="car_card" id="car-card-${car.id}">
                <div class="top">
                    <img src="${car.image}" alt="${car.name}" />
                </div>
                <div class="middle_1">
                    <p>${car.name}</p>
                    <p>${car.description}</p>
                </div>
                <div class="middle_2">
                    <div class="middle_cmp">
                        <img src="assets/milege.png" alt="">
                        <p>${car.milege}</p>
                    </div>
                    <div class="middle_cmp">
                        <img src="assets/petrol.png" alt="">
                        <p>${car.petrol}</p>
                    </div>
                    <div class="middle_cmp">
                        <img src="assets/transmission.png" alt="">
                        <p>${car.transmission}</p>
                    </div>
                </div>
                <div class="last">
                    <p>₹ ${car.price}</p>
                    <p>view details</p>
                </div>
            </div>`;
            cardJs.innerHTML += displayHTML;
        }
    });
};




const sedanDisplay = () => {
    const cardJs = document.querySelector('.car_cards');
    cardJs.innerHTML = '';  // Clear existing content if necessary

    listingsCars.forEach((car) => {
        if (car.type === 'sedan') {
            let displayHTML = `
            <div class="car_card" id="car-card-${car.id}">
                <div class="top">
                    <img src="${car.image}" alt="${car.name}" />
                </div>
                <div class="middle_1">
                    <p>${car.name}</p>
                    <p>${car.description}</p>
                </div>
                <div class="middle_2">
                    <div class="middle_cmp">
                        <img src="assets/milege.png" alt="">
                        <p>${car.milege}</p>
                    </div>
                    <div class="middle_cmp">
                        <img src="assets/petrol.png" alt="">
                        <p>${car.petrol}</p>
                    </div>
                    <div class="middle_cmp">
                        <img src="assets/transmission.png" alt="">
                        <p>${car.transmission}</p>
                    </div>
                </div>
                <div class="last">
                    <p>₹ ${car.price}</p>
                    <p><a href="details.html?id=${car.id}&name=${encodeURIComponent(car.name)}">View Details</a></p>
                </div>
            </div>`;
            cardJs.innerHTML += displayHTML;
        }
    });
};





const hatchbackDisplay = () => {
    const cardJs = document.querySelector('.car_cards');
    cardJs.innerHTML = '';  // Clear existing content if necessary

    listingsCars.forEach((car) => {
        if (car.type === 'hatchback') {
            let displayHTML = `
            <div class="car_card" id="car-card-${car.id}">
                <div class="top">
                    <img src="${car.image}" alt="${car.name}" />
                </div>
                <div class="middle_1">
                    <p>${car.name}</p>
                    <p>${car.description}</p>
                </div>
                <div class="middle_2">
                    <div class="middle_cmp">
                        <img src="assets/milege.png" alt="">
                        <p>${car.milege}</p>
                    </div>
                    <div class="middle_cmp">
                        <img src="assets/petrol.png" alt="">
                        <p>${car.petrol}</p>
                    </div>
                    <div class="middle_cmp">
                        <img src="assets/transmission.png" alt="">
                        <p>${car.transmission}</p>
                    </div>
                </div>
                <div class="last">
                    <p>₹ ${car.price}</p>
                    <p>view details</p>
                </div>
            </div>`;
            cardJs.innerHTML += displayHTML;

        }

    });
};





const suvDisplay = () => {
    const cardJs = document.querySelector('.car_cards');
    cardJs.innerHTML = '';  // Clear existing content if necessary

    listingsCars.forEach((car) => {
        if (car.type === 'suv') {
            let displayHTML = `
            <div class="car_card" id="car-card-${car.id}">
                <div class="top">
                    <img src="${car.image}" alt="${car.name}" />
                </div>
                <div class="middle_1">
                    <p>${car.name}</p>
                    <p>${car.description}</p>
                </div>
                <div class="middle_2">
                    <div class="middle_cmp">
                        <img src="assets/milege.png" alt="">
                        <p>${car.milege}</p>
                    </div>
                    <div class="middle_cmp">
                        <img src="assets/petrol.png" alt="">
                        <p>${car.petrol}</p>
                    </div>
                    <div class="middle_cmp">
                        <img src="assets/transmission.png" alt="">
                        <p>${car.transmission}</p>
                    </div>
                </div>
                <div class="last">
                    <p>₹ ${car.price}</p>
                    <p>view details</p>
                </div>
            </div>`;
            cardJs.innerHTML += displayHTML;

        }

    });
};





const truckDisplay = () => {
    const cardJs = document.querySelector('.car_cards');
    cardJs.innerHTML = '';  // Clear existing content if necessary

    listingsCars.forEach((car) => {
        if (car.type === 'truck') {
            let displayHTML = `
            <div class="car_card" id="car-card-${car.id}">
                <div class="top">
                    <img src="${car.image}" alt="${car.name}" />
                </div>
                <div class="middle_1">
                    <p>${car.name}</p>
                    <p>${car.description}</p>
                </div>
                <div class="middle_2">
                    <div class="middle_cmp">
                        <img src="assets/milege.png" alt="">
                        <p>${car.milege}</p>
                    </div>
                    <div class="middle_cmp">
                        <img src="assets/petrol.png" alt="">
                        <p>${car.petrol}</p>
                    </div>
                    <div class="middle_cmp">
                        <img src="assets/transmission.png" alt="">
                        <p>${car.transmission}</p>
                    </div>
                </div>
                <div class="last">
                    <p>₹ ${car.price}</p>
                    <p>view details</p>
                </div>
            </div>`;
            cardJs.innerHTML += displayHTML;
        }
    });
};





const convertibleDisplay = () => {
    const cardJs = document.querySelector('.car_cards');
    cardJs.innerHTML = '';

    listingsCars.forEach((car) => {
        let displayHTML = `
            <div class="car_card" id="car-card-${car.id}">
                <div class="top">
                    <img src="${car.image}" alt="${car.name}" />
                </div>
                <div class="middle_1">
                    <p>${car.name}</p>
                    <p>${car.description}</p>
                </div>
                <div class="middle_2">
                    <div class="middle_cmp">
                        <img src="assets/milege.png" alt="">
                        <p>${car.milege}</p>
                    </div>
                    <div class="middle_cmp">
                        <img src="assets/petrol.png" alt="">
                        <p>${car.petrol}</p>
                    </div>
                    <div class="middle_cmp">
                        <img src="assets/transmission.png" alt="">
                        <p>${car.transmission}</p>
                    </div>
                </div>
                <div class="last">
                    <p>₹ ${car.price}</p>
                    <p>view details</p>
                </div>
            </div>`;
        cardJs.innerHTML += displayHTML;
    });
};





sedanDisplay();

const sedanCar = document.querySelector('.sedan-car')
sedanCar.addEventListener('click', () => {
    sedanDisplay()
    currentIndex = 0;
    document.addEventListener('click', handleScroll);
});

const coupeCar = document.querySelector('.coupe-car')
coupeCar.addEventListener('click', () => {
    coupeDisplay()
    currentIndex = 0;
    document.addEventListener('click', handleScroll);
});

const hatchbackCar = document.querySelector('.hatchback-car')
hatchbackCar.addEventListener('click', () => {
    hatchbackDisplay()
    currentIndex = 0;
    document.addEventListener('click', handleScroll);
});

const truckCar = document.querySelector('.truck-car')
truckCar.addEventListener('click', () => {
    truckDisplay()
    currentIndex = 0;
    document.addEventListener('click', handleScroll);
});

const suvCar = document.querySelector('.suv-car')
suvCar.addEventListener('click', () => {
    suvDisplay()
    currentIndex = 0;
    document.addEventListener('click', handleScroll);
});

const convertibleCar = document.getElementById('conv_car')
convertibleCar.addEventListener('click', () => {
    convertibleDisplay()
    currentIndex = 0;
    document.addEventListener('click', handleScroll);
});



document.getElementById('nav-right-btn').addEventListener('click', moveRightCards);
document.getElementById('nav-left-btn').addEventListener('click', moveLeftCards);



function moveRightCards() {
    if (screen.width <= 468) {
        const cards = document.querySelectorAll('.car-cards-appear');
        if (currentIndex > -700) {
            currentIndex -= 102;
        }
        console.log(currentIndex);
        cards.forEach(card => {
            card.style.transform = `translateX(${currentIndex}%)`;
        });
    }
    else {
        const cards = document.querySelectorAll('.car-cards-appear');
        if (currentIndex > -434) {
            currentIndex -= 434;
        }
        console.log(currentIndex);
        cards.forEach(card => {
            card.style.transform = `translateX(${currentIndex}%)`;
        });
    }
}

function moveLeftCards() {
    if (screen.width <= 468) {
        const cards = document.querySelectorAll('.car-cards-appear');
        if (currentIndex < 0) {
            currentIndex += 102;
        }
        console.log(currentIndex);
        cards.forEach(card => {
            card.style.transform = `translateX(${currentIndex}%)`;
        });
    }
    else {
        const cards = document.querySelectorAll('.car-cards-appear');
        if (currentIndex < 0) {
            currentIndex += 434;
        }
        console.log(currentIndex);
        cards.forEach(card => {
            card.style.transform = `translateX(${currentIndex}%)`;
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {


    const carStatistics = document.getElementById('statistics');
    let animationTriggered = false;

    if (carStatistics) {
        carStatistics.innerHTML = `
            <div class="cars_sale">
                <p id="carSaled">80+</p>
                <h3>Cars Saled</h3>
            </div>
            <div class="cars_sale">
                <p id="reviews">80+</p>
                <h3>Dealer Reviews</h3>
            </div>
            <div class="cars_sale">
                <p id="visitsPerDay">80+</p>
                <h3>Visits per day</h3>
            </div>
            <div class="cars_sale">
                <p id="verifiedDealers">80+</p>
                <h3>Verified Dealers</h3>
            </div>
        `;

        const countUp = (id, start, end, duration) => {
            let current = start;
            const increment = end / (duration / 15);

            const timer = setInterval(() => {
                current += increment;
                if (current > end) {
                    current = end;
                    clearInterval(timer);
                }
                document.getElementById(id).innerText = Math.ceil(current) + '+';
            }, 15);
        };

        const startCountUp = () => {
            const triggerPosition = carStatistics.offsetTop - 650;
            if (window.pageYOffset > triggerPosition && !animationTriggered) {
                countUp('carSaled', 80, statisticsReport.carSaled, 2000);
                countUp('reviews', 80, statisticsReport.reviews, 2000);
                countUp('visitsPerDay', 80, statisticsReport.visitsPerDay, 2000);
                countUp('verifiedDealers', 80, statisticsReport.verifiedDealers, 2000);
                animationTriggered = true;
            } else if (window.pageYOffset <= triggerPosition) {
                animationTriggered = false;
                resetCounts();
            }
        };

        const resetCounts = () => {
            document.getElementById('carSaled').innerText = '80+';
            document.getElementById('reviews').innerText = '80+';
            document.getElementById('visitsPerDay').innerText = '80+';
            document.getElementById('verifiedDealers').innerText = '80+';
        };

        window.addEventListener('scroll', startCountUp);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const consumerReview = document.getElementById('review-cars');

    if (consumerReview) {
        // Assuming cusReview array is already populated
        cusReview.forEach((rev) => {
            consumerReview.innerHTML += `
                <div class="review">
                    <div class="review_top">
                        <h3>${rev.title}</h3>
                        <img src="${rev.img1}" alt="">
                    </div>
                    <p>${rev.details}</p>
                    <div class="personal_details">
                        <img src="${rev.img2}" alt="">
                        <div>
                            <p>${rev.name}</p>
                            <p>${rev.country}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    } else {
        console.error('Element with ID "review-cars" not found.');
    }
});


document.addEventListener('DOMContentLoaded', () => {
    let reviewIndex = 0;

    // Event listener for moving reviews to the right
    const rightMove = document.getElementById('review-nav-right-btn');
    if (rightMove) {
        if (screen.width <= 468) {
            rightMove.addEventListener('click', () => {
                const cards = document.querySelectorAll('.review_cars');
                if (reviewIndex > -800) {
                    reviewIndex -= 107; // Decrement by the desired percentage
                }
                cards.forEach(card => {
                    card.style.transform = `translateX(${reviewIndex}%)`;
                });
            });
        }
        else {
            rightMove.addEventListener('click', () => {
                const cards = document.querySelectorAll('.review_cars');
                if (reviewIndex > -204) {
                    reviewIndex -= 102; // Decrement by the desired percentage
                }
                cards.forEach(card => {
                    card.style.transform = `translateX(${reviewIndex}%)`;
                });
            });
        }
    }

    // Event listener for moving reviews to the left
    const leftMove = document.getElementById('review-nav-left-btn');
    if (leftMove) {
        if (screen.width <= 468) {
            leftMove.addEventListener('click', () => {
                const cards = document.querySelectorAll('.review_cars');
                if (reviewIndex < 0) {
                    reviewIndex += 107; // Increment by the desired percentage
                }
                cards.forEach(card => {
                    card.style.transform = `translateX(${reviewIndex}%)`;
                });
            });
        }
        else {
            leftMove.addEventListener('click', () => {
                const cards = document.querySelectorAll('.review_cars');
                if (reviewIndex < 0) {
                    reviewIndex += 102; // Increment by the desired percentage
                }
                cards.forEach(card => {
                    card.style.transform = `translateX(${reviewIndex}%)`;
                });
            });
        }
    }
});
