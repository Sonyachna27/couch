document.addEventListener("DOMContentLoaded", function () {

	// для меню

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

	//гарний скрол по сторінці
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
	
//слайдер на голвоній сторінці в секції Наша продукція,  потім повторюється по сторніках
	const carouselSliderInit = document.querySelector('.carousel')
	if(carouselSliderInit){
		const carouselSlides = document.querySelectorAll(".carousel-slide");
    if (carouselSlides.length > 1) {
        carouselSliderInit.classList.add('show-arrows');
    }

    const carouselSlider = new Swiper(".carousel", {
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
        navigation: {
            nextEl: ".carousel-button-next",
            prevEl: ".carousel-button-prev",
        },
    });
	}

	//слайдер  на головній сторінці велика картинка та текст Меблі в вашому житті
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

	//функція для розгортання тексту контенту та згортання назад
	const manufactureContainer = document.querySelector("#manufacture");

	if (manufactureContainer) {
		const createBtn = document.createElement('button');
		createBtn.classList.add('manufacture-btn');
		createBtn.innerText = 'Розгорнути текст'; 
		manufactureContainer.appendChild(createBtn);

		const manufactureContent = document.querySelectorAll('.manufacture__container');

		createBtn.addEventListener("click", function(e) {
			e.preventDefault();
			manufactureContent.forEach(function(content) {
				if (createBtn.innerText === 'Згорнути текст') {
					content.style.height = "228px";
					createBtn.innerText = 'Розгорнути текст';
				} else {
					content.style.height = "auto";
					createBtn.innerText = 'Згорнути текст';
				}
			});
		});

		manufactureContent.forEach(function(content) {
			if (content.offsetHeight >= 240) {
				content.style.height = "228px";
				content.style.overflow = 'hidden';
			}
		});
	}

	// слайдре секції  новини для переходу далі
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
    
	//функція для селекту на сторінці з диванами
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
    
	//функція для перемикання вигляду сторінки з гріда на рядок і назад
 
		const showContentGridBtn = document.getElementById('view-tile');
		const showContentColumnBtn = document.getElementById('view-list');
		const productsWrap = document.querySelector('.products');
		if(showContentColumnBtn && showContentGridBtn){
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
		}

//слайд на сингл пейдж товару
		const productSliderInit = document.querySelector('.productSlider')
		if(productSliderInit){
			const productSlides = document.querySelectorAll('.product-slide');
			productSlides.forEach(slide => {
				const productImagesSlider = slide.querySelectorAll('img');
		
				if (productImagesSlider.length === 2) {
					productImagesSlider.forEach(img => img.classList.add('half-height'));
				}
			});
			const productSlider = new Swiper(".productSlider", {
				slidesPerView: 1,
				spaceBetween: 5,
				watchOverflow: true,
				loop: true,
				speed: 1000,
				autoplay: {
					delay: 0,
					disableOnInteraction: false,
				  },
				  speed: 3000,
				breakpoints: {
					550: {
					slidesPerView: 2,
					spaceBetween: 5,
					},
					1024: {
					slidesPerView: 4,
					spaceBetween: 5,
					},
					
				},
				pagination: {
					el: ".product-pagination",
				},
	
			  });
		} 
		

//функція для табів там де тех характеристики на сінгл продукту
		const techPage = document.querySelector('.tech__container-tabs');
		if (techPage) {
			const techTabs = document.querySelectorAll('.tech__container-tabs-btn');
			const techContentBlock = document.querySelectorAll('.tech__container-tabs-content');
	
			function showTechContent(contentName) {
				techContentBlock.forEach((content) => {
					let contentDataName = content.dataset.name;
					if (contentDataName === contentName) {
						content.style.display = "block";
					} else {
						content.style.display = "none";
					}
				});
			}
	
			function activeTechTabs() {
				techTabs.forEach((tab, index) => {
					let contentDataName = tab.dataset.name;
	
					tab.addEventListener('click', () => {
						techTabs.forEach((t) => t.classList.remove('active-tab'));
						tab.classList.add('active-tab');
						showTechContent(contentDataName);
					});
	
					if (index === 0) {
						tab.classList.add('active-tab');
						showTechContent(contentDataName);
					}
				});
			}
	
			activeTechTabs();
		}


		//ще один слайдер на сторінці сінгл товару
		const interSliderInit = document.querySelector('.interSlider')
		if(interSliderInit){
			const slides = document.querySelectorAll('.inter-slide');
			slides.forEach(slide => {
				const imagesSlider = slide.querySelectorAll('img');
		
				if (imagesSlider.length === 2) {
					imagesSlider.forEach(img => img.classList.add('half-height'));
				}
			});
			const interSlider = new Swiper(".interSlider", {
				slidesPerView: 1,
				spaceBetween: 5,
				watchOverflow: true,
				loop: true,
				speed: 3000,
				autoplay: {
					delay: 0,
					disableOnInteraction: false,
				  },
				  speed: 3000,
				breakpoints: {
					550: {
					slidesPerView: 2,
					spaceBetween: 5,
					},
					1024: {
					slidesPerView: 4,
					spaceBetween: 5,
					},
					
				},
				pagination: {
					el: ".inter-pagination",
					clickable: true,
				},
			  });
		} 

		//функція анімації блоків на сторінці сінгл там де Деталі
		const detailsAnimInfo = document.querySelectorAll('.details__info-wrap');
		if(detailsAnimInfo){
			const interval = 3000; 
			let currentIndex = 0;

			function detailsAnimateBlocks() {
				detailsAnimInfo.forEach((wrap, index) => {
				if (index === currentIndex) {
					wrap.classList.add('active');
				} else {
					wrap.classList.remove('active');
				}
				});
				currentIndex = (currentIndex + 1) % detailsAnimInfo.length;
				}
				detailsAnimateBlocks();
			setInterval(detailsAnimateBlocks, interval);
		}

		//слайдер з секції Вас може зацікавити 
		const intresSliderInit = document.querySelector('.intresSlider')
		if(intresSliderInit){
			const intresSlide = document.querySelectorAll(".intres-slide");
			if (intresSlide.length > 1) {
				intresSliderInit.classList.add('show-arrows');
			}
			const intresSlider = new Swiper(".intresSlider", {
				slidesPerView: 1,
				spaceBetween: 5,
				watchOverflow: true,
				loop: true,
				speed: 1000,
				breakpoints: {
					550: {
					slidesPerView: 2,
					spaceBetween: 5,
					},
					1024: {
					slidesPerView: 3,
					spaceBetween: 20,
					},
					
				},
				pagination: {
					el: ".intres-pagination",
					clickable: true,
				},
				navigation: {
					nextEl: ".intres-button-next",
					prevEl: ".intres-button-prev",
				},
			  });
		} 
		
		//слайдер на сторінці виробництво
		const stageSliderInit = document.querySelector('.stageSlider')
		if(stageSliderInit){
			
			const stageSlider = new Swiper(".stageSlider", {
				slidesPerView: 1,
				spaceBetween: 5,
				watchOverflow: true,
				loop: true,
				speed: 1000,
				breakpoints: {
					550: {
					slidesPerView: 2,
					spaceBetween: 5,
					},
					768: {
					slidesPerView: 3,
					spaceBetween: 5,
					},
					1024: {
					slidesPerView: 4,
					spaceBetween: 20,
					},
					
				},
				pagination: {
					el: ".stage-pagination",
					clickable: true,
				},
				
			  });
		} 

		//слайдер реалізовані проекти на сторінці дизайнерам
		const realizeSliderInit = document.querySelector('.realizeSlider');
		if(realizeSliderInit){
			
			const realizesSlider = new Swiper(".realizeSlider", {
				slidesPerView: 1.2,
				spaceBetween: 5,
				watchOverflow: true,
				speed: 1000,
				breakpoints: {
					768: {
					slidesPerView: 2.5,
					spaceBetween: 5,
					},
					1024: {
					slidesPerView: 3.5,
					spaceBetween: 20,
					},					
				},
				
			  });
		} 
		//слайдер шоуруми на сторінці контактів
		const prevSliderInit = document.querySelector('.prevSlider');
		if(prevSliderInit){
			
			const prevSlider = new Swiper(".prevSlider", {
				slidesPerView: 1,
				spaceBetween: 10,
				watchOverflow: true,
				speed: 1000,
				breakpoints: {
					768: {
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

		//слайдер для сторніки Новини вертикальний
		const dataSliderInit = document.querySelector('.dataSlider');
			if(dataSliderInit){
				const dataSlider = new Swiper(".dataSlider", {
					slidesPerView: 1,
					spaceBetween: 10,
					loop: true,
					autoplay: {
					delay: 0,
					disableOnInteraction: false,
					},
					speed: 3000,
					pagination: {
						el: ".data-pagination",
						clickable: true,
					},
					});
			}


});
