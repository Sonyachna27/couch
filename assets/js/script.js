document.addEventListener("DOMContentLoaded", function () {

	const htmlElement = document.querySelector("html");

	const burgerMenu = document.querySelector(".burgerBtn");
	const headerNav = document.querySelector(".header__nav");
	const navLinks = document.querySelectorAll("nav a");

	burgerMenu.addEventListener("click", () =>
		htmlElement.classList.toggle("open")
	);

	navLinks.forEach((link) => {
		link.addEventListener("click", () => {
		htmlElement.classList.remove("open");
		});
	});

	document.querySelectorAll('a[href^="#"').forEach(link => {

		link.addEventListener('click', function(e) {
			e.preventDefault();
	
			let href = this.getAttribute('href').substring(1);
	
			const scrollTarget = document.getElementById(href);
	
			const topOffset = document.querySelector('header').offsetHeight;
			const elementPosition = scrollTarget.getBoundingClientRect().top;
			const offsetPosition = elementPosition - topOffset;
	
			window.scrollBy({
				top: offsetPosition,
				behavior: 'smooth'
			});
		});
	});
	
	const carouselSliderInit = document.querySelector('.carousel')
	if(carouselSliderInit){
		const carouselSlider = new Swiper(".carousel", {
			slidesPerView: 1,
			spaceBetween: 10,
			watchOverflow: true,
			loop: true,
			speed: 3000,
			breakpoints: {
				550: {
				slidesPerView: 2,
				spaceBetween: 10,
				},
				1024: {
				slidesPerView: 3,
				spaceBetween: 10,
				},
				
			},
			navigation: {
			  nextEl: ".carousel-button-next",
			  prevEl: ".carousel-button-prev",
			},
		  });
	}
	const owlSliderInit = document.querySelector('.owl-slider')
	if(owlSliderInit){
		const carouselSlider = new Swiper(".owl-slider", {
			slidesPerView: 1,
			spaceBetween: 10,
			watchOverflow: true,
			loop: true,
			speed: 1000,
		  });
	}

	const manufactureContainer = document.querySelectorAll(".manufacture__container");

	if (manufactureContainer) {
		const readMoreButton = document.getElementById("readMore");
	
		manufactureContainer.forEach(function(content) {
			if (content.offsetHeight >= 240) {
				content.style.height = "228px";
				content.style.overflow = 'hidden';
			}
		});
	
		readMoreButton.addEventListener("click", function(e) {
			e.preventDefault();
			manufactureContainer.forEach(function(content) {
				if (readMoreButton.innerText === 'згорнути текст') {
					content.style.height = "228px";
					readMoreButton.innerText = 'Розгорнути текст';
				} else {
					content.style.height = "auto";
					readMoreButton.innerText = 'Згорнути текст';
				}
			});
		});
	}
	
	const newsSliderInit = document.querySelector('.newsSlider')
	if(newsSliderInit){
		const newsSlider = new Swiper(".newsSlider", {
			slidesPerView: 1,
			spaceBetween: 10,
			watchOverflow: true,
			loop: true,
			speed: 1000,
			breakpoints: {
				550: {
				slidesPerView: 2,
				spaceBetween: 10,
				},
				1024: {
				slidesPerView: 3,
				spaceBetween: 10,
				},
				
			},

		  });
	} 
      
        


});
