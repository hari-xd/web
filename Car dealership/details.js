import { listingsCars } from "./data/car-details.js";



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

});

document.addEventListener('scroll', function () {
    const navbar = document.getElementById('nav-bar');
    if (window.pageYOffset > 60) {
        navbar.classList.add('nav_shrink');
    } else {
        navbar.classList.remove('nav_shrink');
    }
});




document.addEventListener('DOMContentLoaded', function () {

    const params = new URLSearchParams(window.location.search);
    const carId = params.get('id');
    const carName = params.get('name');
    const carDetailsTop = document.getElementById('id1')

    if (carDetailsTop) {

        listingsCars.forEach((car) => {

            if (car.id === carId) {

                let carDetailsHTML = `
        <div class="name_price">
                    <h1>${car.name}</h1>
                    <div class="price">
                        <span>Price: </span>
                        <h1>$${car.price}</h1>
                    </div>
                </div>
                <div class="description_rent">
                    <h3>${car.description}</h3>
                    <div class="rent_tag">
                        <img src="../../assets/price-tag.png" alt="">
                        <h3>Available for rent at just <span>${car.rent} </span>per day</h3>
                    </div>
                </div>
                <div class="tags">
                    <div class="tag_content">
                        <img src="../../assets/calendar-tag.png" alt="">
                        <p>${car.year}</p>


                    </div>
                    <div class="tag_content">
                        <img src="../../assets/milege-tag.png" alt="">
                        <p>${car.milege}</p>

                    </div>
                    <div class="tag_content">
                        <img src="../../assets/trans-tag.png" alt="">
                        <p>${car.transmission}</p>

                    </div>
                    <div class="tag_content">
                        <img src="../../assets/fuel-tag.png" alt="">
                        <p>${car.petrol}</p>

                    </div>
                </div>
                <div class="images">
                    <div class="big_img">
                        <img src="${car.image}" alt="">
                    </div>
                    <div class="small_image">
                        <div class="top_img">
                            <img src="../../assets/2.png" alt="">
                            <img src="../../assets/3.png" alt="">
                        </div>
                        <div class="bottom_img">
                            <img src="../../assets/4.png" alt="">
                            <img src="../../assets/1.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="content_split">
                    <div class="car_overview">
                        <h1>Car Overview</h1>
                        <div class="car_overview_content">
                            <div class="details_left">
                                <div class="details_left_1">
                                    <img src="../../assets/body.png" alt="">
                                    <p>Body:</p>
                                </div>
                                <p>${car.type}</p>
                            </div>
                            <div class="details_left">
                                <div class="details_left_1">
                                    <img src="../../assets/milege-blacck.png" alt="">
                                    <p>Milege:</p>
                                </div>
                                <p>${car.milege}</p>
                            </div>
                            <div class="details_left">
                                <div class="details_left_1">
                                    <img src="../../assets/fuel-black.png" alt="">
                                    <p>Fuel Type:</p>
                                </div>
                                <p>${car.petrol}</p>
                            </div>
                            <div class="details_left">
                                <div class="details_left_1">
                                    <img src="../../assets/transmision.png" alt="">
                                    <p>Transmission:</p>
                                </div>
                                <p>${car.transmission}</p>
                            </div>
                            <div class="details_left">
                                <div class="details_left_1">
                                    <img src="../../assets/year.png" alt="">
                                    <p>Year:</p>
                                </div>
                                <p>${car.year}</p>
                            </div>

                            <div class="details_right">
                                <div class="details_left_1">
                                    <img src="../../assets/drive-type.png" alt="">
                                    <p>Drive Type:</p>
                                </div>
                                <p>${car.driveType}</p>
                            </div>

                            <div class="details_right">
                                <div class="details_left_1">
                                    <img src="../../assets/condition.png" alt="">
                                    <p>Condition:</p>
                                </div>
                                <p>${car.condition}</p>
                            </div>
                            <div class="details_right">
                                <div class="details_left_1">
                                    <img src="../../assets/engine.png" alt="">
                                    <p>Engine Size:</p>
                                </div>
                                <p>${car.engineSize}</p>
                            </div>
                            <div class="details_right">
                                <div class="details_left_1">
                                    <img src="../../assets/door.png" alt="">
                                    <p>Door:</p>
                                </div>
                                <p>${car.driveType}</p>
                            </div>
                            <div class="details_right">
                                <div class="details_left_1">
                                    <img src="../../assets/cylinder.png" alt="">
                                    <p>Cylinder:</p>
                                </div>
                                <p>${car.cylinder}</p>
                            </div>

                        </div>

                    </div>

                    <div class="agent">
                        <img src="../../assets/review-image.png" alt="">
                        <h3>${car.adminName}</h3>
                        <h3>${car.adminAddress}</h3>
                        <div class="address_phone">
                            <img src="../../assets/get-direction.png" alt="">
                            <p>get direction</p>
                            <img src="../../assets/phoone.png" alt="">
                            <p>${car.adminPhone}</p>
                        </div>
                        <div class="split_btn">
                            <div class="btn-buy">
                                <button>Buy</button>
                                <img src="../../assets/car-buy.png" alt="">
                            </div>
                            <div class="btn-rent">
                                <button>Rent</button>
                                <img src="../../assets/rent.png" alt="">
                            </div>
                        </div>
                        <div class="message">
                            <button>Chat via Whatsapp</button>
                            <img src="../../assets/Whatsap.png" alt="">
                        </div>
                    </div>
                </div>
                
        `;
                carDetailsTop.innerHTML += carDetailsHTML;
            }

            else {
                console.log('not working');
            }




        })
    }

    const interiorData = document.getElementById('interior');

    if (interiorData) {
        let interiorDisplayData = '';
        interiorDisplayData += '<h3>Interior</h3>';

        listingsCars.forEach((car) => {
            if (car.id === carId) {
                car.features.interior.forEach((feature, index) => {
                    interiorDisplayData += `
                    <div class="row_data">
                        <img src="../../assets/points.png" alt="">
                        <p>${feature}</p>
                    </div>`;
                });
            }
        });
        interiorData.innerHTML = interiorDisplayData;
    }

    const safetyData = document.getElementById('safety');

    if (safetyData) {
        let safetyDisplayData = '';
        safetyDisplayData += '<h3>Safety</h3>';

        listingsCars.forEach((car) => {
            if (car.id === carId) {
                car.features.interior.forEach((feature, index) => {
                    safetyDisplayData += `
                    <div class="row_data">
                        <img src="../../assets/points.png" alt="">
                        <p>${feature}</p>
                    </div>`;
                });
            }
        });
        safetyData.innerHTML = safetyDisplayData;
    }
    const exteriorData = document.getElementById('exterior');

    if (exteriorData) {
        let exteriorDisplayData = '';
        exteriorDisplayData += '<h3>Exterior</h3>';
        listingsCars.forEach((car) => {
            if (car.id === carId) {
                car.features.interior.forEach((feature, index) => {

                    exteriorDisplayData += `
                    <div class="row_data">
                        <img src="../../assets/points.png" alt="">
                        <p>${feature}</p>
                    </div>`;
                });
            }
        });

        exteriorData.innerHTML = exteriorDisplayData;
    }


    const cCData = document.getElementById('cc');

    if (cCData) {
        let cCDisplayData = '';
        cCDisplayData += '<h3>Comfort & Convienence</h3>';

        listingsCars.forEach((car) => {
            if (car.id === carId) {
                car.features.interior.forEach((feature, index) => {
                    cCDisplayData += `
                
                    <div class="row_data">
                        <img src="../../assets/points.png" alt="">
                        <p>${feature}</p>
                    </div>`;
                });
            }
        });
        cCData.innerHTML = cCDisplayData;
    }


    const dimensionData = document.getElementById('dimensions');

    if (dimensionData) {
        let dimensionDisplayData = `<h1>Dimension & Capacity</h1>
        `;

        listingsCars.forEach((car) => {

            if (car.id === carId) {
                dimensionDisplayData += `
        <div class="dimension_contents">
            <div class="dimension_content">
                <p>Length:</p>
                <p>${car.dimensionAndCapacity.length}</p>
            </div>
            <div class="dimension_content">
                <p>Height:</p>
                <p>${car.dimensionAndCapacity.height}</p>
            </div>
            <div class="dimension_content">
                <p>Wheel base:</p>
                <p>${car.dimensionAndCapacity.wheelbase}</p>
            </div>
            <div class="dimension_content">
                <p>Luggage capacity:</p>
                <p>${car.dimensionAndCapacity.luggageCapacity}</p>
            </div>
            <div class="dimension_content">
                <p>No of seats:</p>
                <p>${car.dimensionAndCapacity.numberOfSeats}</p>
            </div>
            </div>
            `;

                dimensionData.innerHTML = dimensionDisplayData;

            }
        });

    }

});