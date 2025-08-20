document.getElementById('revealButton').addEventListener('click', function() {
    alert("Com essa caixinha no meu bolso, vamos ter um do outro pra todos lugares que irmos , Feliz aniversário xuxu<3");
});

const playMusicBtn = document.getElementById('play-music-btn');
const audioPlayer = document.getElementById('audio-player');
let isPlaying = false;

// Adiciona o evento de clique para o botão de música
playMusicBtn.addEventListener('click', () => {
    if (isPlaying) {
        audioPlayer.pause();
        playMusicBtn.textContent = 'Tocar Música';
    } else {
        audioPlayer.play();
        playMusicBtn.textContent = 'Pausar Música';
    }
    isPlaying = !isPlaying;
});

// Código do carrossel (sem mudanças, pois já está funcionando)
const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const dotsContainer = document.querySelector('.carousel-dots');
let currentImageIndex = 0;
let autoSlideInterval;

window.addEventListener('load', () => {
    const imageWidth = images[0].clientWidth;

    images.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.addEventListener('click', () => {
            moveToImage(index);
            resetAutoSlide();
        });
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');
    
    function updateCarousel() {
        carouselImages.style.transform = `translateX(${-currentImageIndex * imageWidth}px)`;
        dots.forEach(dot => dot.classList.remove('active-dot'));
        dots[currentImageIndex].classList.add('active-dot');
    }

    function moveToImage(index) {
        currentImageIndex = index;
        updateCarousel();
    }

    function nextSlide() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateCarousel();
    }

    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetAutoSlide();
    });

    prevBtn.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        updateCarousel();
        resetAutoSlide();
    });

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 5000);
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }

    startAutoSlide();
    updateCarousel();
});
