let slideIndex = 1;

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" carousel-active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " carousel-active";
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function nextSlide(n) {
    showSlides(slideIndex += n);
}


function addCarouselClassesAndDots() {
    var carousel = document.getElementsByClassName("wknd-main-carousel")[0];
    var carouselItems = [...carousel.children];

    carouselItems.forEach(item => {
        item.classList.add('mySlides');
        item.classList.add('fade');
    });

    var carouselNavigation = document.createElement('div');
    carouselNavigation.classList.add('carousel-nav');

    var paddingNavDiv = document.createElement('div');
    paddingNavDiv.classList.add('padding-nav');
    carouselNavigation.appendChild(paddingNavDiv);

    var imagesNumber = carouselItems.length;
    var dotsDiv = document.createElement('div');
    dotsDiv.classList.add('dots');
    for (let i = 0; i < imagesNumber; i++) {
        var spanElement = document.createElement('span');
        spanElement.classList.add('dot');
        // spanElement.setAttribute('onclick', 'currentSlide(' + i + ');');
        spanElement.onclick = function(){currentSlide(i+1);};
        dotsDiv.appendChild(spanElement);
    }
    carouselNavigation.appendChild(dotsDiv);

    var arrowsDiv = document.createElement('div');
    arrowsDiv.classList.add('arrows');
    var prevArrow = document.createElement('i');
    prevArrow.classList.add('prev-arrow-button');
    prevArrow.classList.add('fa');
    // prevArrow.classList.add('fa-sharp');
    prevArrow.classList.add('fa-thin');
    prevArrow.classList.add('fa-arrow-left');
    prevArrow.onclick = function(){nextSlide(-1);};
    var nextArrow = document.createElement('i');
    nextArrow.classList.add('next-arrow-button');
    nextArrow.classList.add('fa');
    nextArrow.classList.add('fa-sharp');
    nextArrow.classList.add('fa-regular');
    nextArrow.classList.add('fa-arrow-right');
    nextArrow.onclick = function(){nextSlide(1);};
    arrowsDiv.appendChild(prevArrow);
    arrowsDiv.appendChild(nextArrow);
    carouselNavigation.appendChild(arrowsDiv);

    carousel.appendChild(carouselNavigation);
}
addCarouselClassesAndDots();




// // Next/previous controls
// function plusSlides(n) {
// showSlides(slideIndex += n);
// }

showSlides(slideIndex);

    
