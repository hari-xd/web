import { listingsCars } from "./data/car-details.js";

displayCars(listingsCars);

document.addEventListener('scroll', function () {
    const navbar = document.getElementById('nav-bar');
    if (window.pageYOffset > 1) {
        navbar.classList.add('nav_shrink');
    } else {
        navbar.classList.remove('nav_shrink');
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

// Function to handle dropdown toggling
function toggleDropdown(selector) {
    const dropdown = document.querySelector(selector + ' .search_ul');
    const listings = document.querySelector('.listings');

    // Remove 'active' class from all dropdowns except the clicked one
    document.querySelectorAll('.search_ul').forEach(function (dropdownEl) {
        if (dropdownEl !== dropdown) {
            dropdownEl.classList.remove('active');
        }
    });

    // Toggle 'active' class on the clicked dropdown
    dropdown.classList.toggle('active');

    // Check if any dropdown is active and adjust listings top position
    const isActive = Array.from(document.querySelectorAll('.search_ul')).some(function (dropdownEl) {
        return dropdownEl.classList.contains('active');
    });
    listings.style.top = isActive ? '250px' : '100px'; // Adjusted to '100px'
}

// Add click event listeners to each dropdown toggle button
document.getElementById('price_toggle_btn').addEventListener('click', function (event) {
    toggleDropdown('.price');
    event.stopPropagation(); // Stop propagation to prevent window click event
});

document.getElementById('condition_toggle_btn').addEventListener('click', function (event) {
    toggleDropdown('.condition');
    event.stopPropagation(); // Stop propagation to prevent window click event
});

// Add click event listener to window to handle outside clicks
window.addEventListener('click', function (event) {
    const dropdowns = document.querySelectorAll('.search_ul');
    const listings = document.querySelector('.listings');

    // Check if the click was outside of any dropdown
    if (!event.target.closest('.search_bar')) {
        dropdowns.forEach(function (dropdown) {
            dropdown.classList.remove('active');
        });
        listings.style.top = '100px'; // Reset top property of listings to '100px'
    } else {
        // Check if any dropdown is active and apply top: 250px to listings
        const isActive = Array.from(dropdowns).some(function (dropdown) {
            return dropdown.classList.contains('active');
        });
        listings.style.top = isActive ? '250px' : '100px'; // Adjusted to '100px'
    }
});


const conditionListItems = document.querySelectorAll('.search_condition_li');
const conditionFilterName = document.getElementById('condition_filter_name');
const priceListItems = document.querySelectorAll('.search_price_li');
const priceFilterName = document.getElementById('price_filter_name');

document.addEventListener('DOMContentLoaded', function () {
    conditionListItems.forEach(item => {
        item.addEventListener('click', () => {
            conditionFilterName.innerHTML = item.innerHTML;
            toggleDropdown('.condition'); // Close the dropdown after selection
        });
    });

    priceListItems.forEach(item => {
        item.addEventListener('click', () => {
            priceFilterName.innerHTML = item.innerHTML;
            toggleDropdown('.price'); // Close the dropdown after selection
        });
    });

    const carListing = document.getElementById('car-cards');
    if (carListing) {
        displayCars(listingsCars);

        // Trigger reflow to apply the appear animation
        const carCards = document.querySelectorAll('.car_card');
        setTimeout(() => {
            carCards.forEach(card => {
                card.classList.add('car-cards-appear');
            });
        }, 10);
    }
});

const findBtn = document.getElementById('find-btn');
findBtn.addEventListener('click', () => {
    const selectedCondition = conditionFilterName.innerHTML;
    const selectedPrice = priceFilterName.innerHTML;

    const filteredCars = listingsCars.filter(car => {
        let conditionMatch = selectedCondition === 'Condition' || car.condition === selectedCondition;
        let priceMatch = false;

        if (selectedPrice === '&lt; 50000') {
            priceMatch = car.price < 50000;
        } else if (selectedPrice === '&lt; 60000') {
            priceMatch = car.price >= 50000 && car.price < 60000;
        } else if (selectedPrice === '&lt; 70000') {
            priceMatch = car.price >= 60000 && car.price < 70000;
        }
        else {
            priceMatch = true; // If no price filter is selected
        }
        return conditionMatch && priceMatch;
    });

    displayCars(filteredCars);
});



function displayCars(cars) {
    const carListing = document.getElementById('car-cards');
    carListing.innerHTML = ''; // Clear existing cars

    cars.forEach(car => {
        let conditionClass = car.condition === 'Best' ? 'car_condition' : 'not-car-condition';
        let displayHTML = `
            <div class="car_card car-cards-appear" id="car-card-${car.id}">
                <div class="${conditionClass}">
                    <p>${car.condition}</p>
                </div>
                <div class="top">
                    <img src="${car.image}" alt="${car.name}" />
                </div>
                <div class="middle_1">
                    <p>${car.name}</p>
                    <p>${car.description}</p>
                </div>
                <div class="middle_2">
                    <div class="middle_cmp">
                        <img src="assets/milege-blacck.png" alt="">
                        <p>${car.milege}</p>
                    </div>
                    <div class="middle_cmp">
                        <img src="assets/fuel-black.png" alt="">
                        <p>${car.petrol}</p>
                    </div>
                    <div class="middle_cmp">
                        <img src="assets/transmision.png" alt="">
                        <p>${car.transmission}</p>
                    </div>
                </div>
                <div class="last">
                    <p>₹ ${car.price}</p>
                    <p class="specific_car"><a href="details.html?id=${car.id}&name=${encodeURIComponent(car.name)}">View Details</a></p>
                </div>
            </div>`;
        carListing.innerHTML += displayHTML;
    });

    // Trigger reflow to apply the appear animation
    const carCards = document.querySelectorAll('.car_card');
    setTimeout(() => {
        carCards.forEach(card => {
            card.classList.add('car-cards-appear');
        });
    }, 10);
}



const urlParams = new URLSearchParams(window.location.search);
const carType = urlParams.get('type');
if (carType) {

    fetchCarsData(carType);
} else {
    fetchCarsData();
}


function fetchCarsData(type) {
    const filteredCars = listingsCars.filter(car => car.type === type);
    displayCars2(filteredCars);
}

function displayCars2(cars) {
    const carListing = document.getElementById('car-cards');
    carListing.innerHTML = '';

    cars.forEach(car => {
        let conditionClass = car.condition === 'Best' ? 'car_condition' : 'not-car-condition';
        let displayHTML = `
            <div class="car_card car-cards-appear" id="car-card-${car.id}">
                <div class="${conditionClass}">
                    <p>${car.condition}</p>
                </div>
                <div class="top">
                    <img src="${car.image}" alt="${car.name}" />
                </div>
                <div class="middle_1">
                    <p>${car.name}</p>
                    <p>${car.description}</p>
                </div>
                <div class="middle_2">
                    <div class="middle_cmp">
                        <img src="assets/milege-blacck.png" alt="">
                        <p>${car.milege}</p>
                    </div>
                    <div class="middle_cmp">
                        <img src="assets/fuel-black.png" alt="">
                        <p>${car.petrol}</p>
                    </div>
                    <div class="middle_cmp">
                        <img src="assets/transmision.png" alt="">
                        <p>${car.transmission}</p>
                    </div>
                </div>
                <div class="last">
                    <p>₹ ${car.price}</p>
                    <p class="specific_car"><a href="details.html?id=${car.id}&name=${encodeURIComponent(car.name)}">View Details</a></p>
                </div>
            </div>`;
        carListing.innerHTML += displayHTML;
    });
}



document.addEventListener('DOMContentLoaded', function () {
    const carTypeLinks = document.querySelectorAll('.car');

    carTypeLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            const type = this.getAttribute('data-type');
            if (type) {
                event.preventDefault(); // Prevent default link behavior
                window.location.href = `listing.html?type=${type}`;
            }
        });
    });


    const urlParams = new URLSearchParams(window.location.search);
    const carType = urlParams.get('type');
    console.log(carType);
    if (carType) {
        fetchCarsData(carType);
    } else {
        // If no type parameter is present, display all cars
        displayCars(listingsCars);
    }
});
