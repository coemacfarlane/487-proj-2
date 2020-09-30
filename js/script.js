const runAnime = function() {
    
        titleAnime.restart();
        subtitleAnime.restart();

        sl2Header.restart();
        sl2List.restart();

        sl3Card.restart();

        sl4Header.restart();
};

// FIRST SLIDE ANIMATION
const titleAnime = anime({
    targets: '.title-svg',
    scale: [0, 1],
    duration: 2500,
    easing: 'easeInOutCubic'
});
const subtitleAnime = anime({
    targets: '.sl-1 h2',
    delay: 1500,
    duration: 800,
    translateX: [
        {value: ['-100%', 0], duration: 500, easing: 'cubicBezier(0.000, 0.645, 0.340, 1.005)'}
    ],
    translateY: [
        {value: ['50vh', 0], duration: 500, easing: 'cubicBezier(0.695, 0.005, 1.000, 0.365)'}
    ],
    rotate: '1turn',
    easing: 'easeInOutSine'
});

// SECOND SLIDE ANIMATION
const sl2List = anime({
    targets: '.sl-2 .stagger-li',
    translateX: [500, 0],
    opacity: [0, 1],
    duration: 2500,
    delay: anime.stagger(200, {start: 700})
});
const sl2Header = anime({
    targets: '.sl-2 h1',
    translateX: [-500, 0],
    scaleY: [0, '100%'],
    delay: 300,
    duration: 1000,
    easing: 'easeInQuad'
})

// THIRD SLIDE ANIMATION
const sl3Card = anime({
    targets: '.sl-3 .card',
    translateY: [500, 0],
    rotateZ: '1turn',
    opacity: [0, 1],
    duration: 2000,
    delay: anime.stagger(300, {start: 500})
})

// FOURTH SLIDE ANIMATION
const sl4Header = anime({
    targets: '.sl-4 h1',
    translateX: [-500, 0],
    opacity: [0,1],
    delay: anime.stagger(300, {start: 500}),
    easing: 'easeInQuad'
})

// ADD EVENT LISTENERS
let controls = document.getElementsByClassName('slider-controls')[0];
console.log(controls);
let next = controls.querySelectorAll(".next")[0];
let prev = controls.querySelectorAll(".prev")[0];
let list = Array.from(controls.querySelectorAll(".slide-list")[0].children);

next.addEventListener('click', function(e) {
    e.preventDefault();
    runAnime();
});
prev.addEventListener('click', function(e) {
    e.preventDefault();
    runAnime();
});
list.forEach(e => e.addEventListener('click', function(e) {
    e.preventDefault();
    runAnime()
}));




