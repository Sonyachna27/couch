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
	
		if(readMoreButton){
			readMoreButton.addEventListener("click", function(e) {
				e.preventDefault();
				manufactureContainer.forEach(function(content) {
					if (readMoreButton.innerText === 'Згорнути текст') {
						content.style.height = "228px";
						readMoreButton.innerText = 'Розгорнути текст';
					} else {
						content.style.height = "auto";
						readMoreButton.innerText = 'Згорнути текст';
					}
				});
			});
		}
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
    
	
	const select = document.querySelectorAll('.nice-select');
	
	select.forEach((sel)=>{
		const current = sel.querySelector('.current');
    	const options = sel.querySelectorAll('.option');
		sel.addEventListener('click', () =>{
			sel.classList.toggle('open');
			options.forEach(option => {
				option.addEventListener('click', function () {
					current.textContent = this.textContent;
					options.forEach(opt => opt.classList.remove('selected'));
					this.classList.add('selected');
				});
			});	
		})
	})
    
 
		const showContentGridBtn = document.getElementById('view-tile');
		const showContentColumnBtn = document.getElementById('view-list');
		const productsWrap = document.querySelector('.products');

		const setView = (view) => {
		  if (view === 'grid') {
			productsWrap.classList.remove('flex-marking');
			productsWrap.classList.add('grid-marking');
			showContentGridBtn.classList.add('view-btn-active');
			showContentColumnBtn.classList.remove('view-btn-active');
			localStorage.setItem('productsView', 'grid');
		  } else if (view === 'list') {
			productsWrap.classList.remove('grid-marking');
			productsWrap.classList.add('flex-marking');
			showContentColumnBtn.classList.add('view-btn-active');
			showContentGridBtn.classList.remove('view-btn-active');
			localStorage.setItem('productsView', 'list');
		  }
		};
	  
		showContentGridBtn.addEventListener('click', () => {
		  setView('grid');
		});
	  
		showContentColumnBtn.addEventListener('click', () => {
		  setView('list');
		});
	  
		const savedView = localStorage.getItem('productsView');
		if (savedView) {
		  setView(savedView);
		} else {
		  setView('grid');
		}

		
	  

});
