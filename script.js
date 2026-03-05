const slides = [
    'content/slide1.html',
    'content/slide2.html',
    'content/slide3.html',
    'content/slide4.html',
    'content/slide5.html'
];

let currentIndex = 0;
const duration = 10000;

const frame1 = document.getElementById('frame1');
const frame2 = document.getElementById('frame2');

let activeFrame = frame1;
let inactiveFrame = frame2;

function showNextSlide() {
    const nextSlide = slides[currentIndex];

    inactiveFrame.src = nextSlide;
    
    setTimeout(() => {
        inactiveFrame.classList.remove('inactive');
        inactiveFrame.classList.add('active');
        
        activeFrame.classList.remove('active');
        activeFrame.classList.add('inactive');

        const temp = activeFrame;
        activeFrame = inactiveFrame;
        inactiveFrame = temp;
    }, 100);

    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
}

showNextSlide();

setInterval(showNextSlide, duration);