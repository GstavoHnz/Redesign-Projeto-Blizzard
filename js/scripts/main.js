var slideThumbnail = new Swiper(".slide-thumbnail", {
    slidesPerView: 5,
    direction: 'vertical',
    spaceBetween: 19,
    watchSlidesProgress: true,
    breakpoints: {
        320: {
            direction: 'horizontal',
        },
        1150: {
            direction: 'vertical'
        }
    }
});

const progressSlide = document.querySelector('.js-progress')

var slideHero = new Swiper(".slide-principal", {
    effect: 'fade',
    thumbs: {
        swiper: slideThumbnail,       
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    on: {
        init: function(){
            progressSlide.classList.remove('animate');
            progressSlide.classList.remove('active');
            progressSlide.classList.add('animate');
            progressSlide.classList.add('active');
        },
        slideChangeTransitionStart: function(){
            progressSlide.classList.remove('animate');
            progressSlide.classList.remove('active');
            progressSlide.classList.add('active');
        },
        slideChangeTransitionEnd: function(){
            progressSlide.classList.add('animate');
        }
    }
});


const allFilters = document.querySelectorAll('.js-nav-games li a');
const tabPane = document.querySelectorAll('.tab-pane-games');

allFilters.forEach((filter, index) => {
    filter.addEventListener('click', (event) => {
        event.preventDefault();
        allFilters.forEach(item => {
            item.classList.remove('active')
        })

        tabPane.forEach(tab => {
            tab.classList.remove('active')
        })

        tabPane[index].classList.add('active')
        filter.classList.add('active')
    })
})


// Modal
const openModal = document.querySelector('.js-open-modal');
const fecharModal = document.querySelector('.js-close');
const fecharOverlayModal = document.querySelector('.js-overlay');

openModal.addEventListener('click', (event) => {
    event.preventDefault();
    let html = document.documentElement;
    html.classList.add('show-modal');
})

fecharModal.addEventListener('click', () => {
    let html = document.documentElement;
    html.classList.remove('show-modal');
});

fecharOverlayModal.addEventListener('click', () => {
    let html = document.documentElement;
    html.classList.remove('show-modal');
});


// Dropdown menu
const btnMenu = document.querySelectorAll('.js-btn-menu');
const menuSite = document.querySelectorAll('.js-menu');

btnMenu.forEach((btn, index) => {
    btn.addEventListener('click', (event) => {
        event.preventDefault();

        menuSite.forEach(itemMenu => {
            itemMenu.classList.remove('active');
            itemMenu.addEventListener('mouseleave', () => {
                itemMenu.classList.remove('active');
            })
        })

        btnMenu.forEach(itemBtn => {
            itemBtn.classList.remove('active');
        })

        btn.classList.add('active')
        menuSite[index].classList.add('active');
    })
})


// Menu Mobile
const btnMobile = document.getElementById('js-btn-menu-mobile');
const overlayMenu = document.querySelector('.js-overlay');

function openMenuMobile(){
    document.documentElement.classList.toggle('menu-opened');
}

btnMobile.addEventListener('click', openMenuMobile);
overlayMenu.addEventListener('click', openMenuMobile);


// Modal Mobile
const openModalMobile = document.querySelector('.js-open-modal-mobile');
const fecharModalMobile = document.querySelector('.js-close-modal');
const fecharOverlayModalMobile = document.querySelector('.js-overlay');

openModalMobile.addEventListener('click', (event) => {
    event.preventDefault();
    let html = document.documentElement;
    html.classList.add('show-modal');
})

fecharModalMobile.addEventListener('click', () => {
    let html = document.documentElement;
    html.classList.remove('show-modal');
});

fecharOverlayModalMobile.addEventListener('click', () => {
    let html = document.documentElement;
    html.classList.remove('show-modal');
});


// Dropdown menu Mobile
const btnMenuMobile = document.querySelectorAll('.js-btn-menu-mobile');
const menuSiteMobile = document.querySelectorAll('.js-menu-mobile');

btnMenuMobile.forEach((btnMobile, index) => {
    btnMobile.addEventListener('click', (event) => {
        event.preventDefault();

        menuSiteMobile.forEach(itemMenuMobile => {
            itemMenuMobile.classList.remove('active');
            itemMenuMobile.addEventListener('mouseleave', () => {
                itemMenuMobile.classList.remove('active');
            })
        })

        menuSiteMobile.forEach(itemBtnMobile => {
            itemBtnMobile.classList.remove('active');
        })

        btnMobile.classList.add('active')
        menuSiteMobile[index].classList.add('active');
    })
})