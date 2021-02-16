const vid = document.getElementById('video');
const sound = document.getElementById('sound');
const tablet = window.matchMedia('(min-width: 501px) and (max-width: 1000px)');
const mobile = window.matchMedia('(max-width: 500px)');

console.log(vid.muted);

const click = () => {
    if (vid.muted) {
        sound.src = 'utilities/volume64-green.png';
        if (mobile.matches) {
            sound.style.right = '19px';
        } else {
            sound.style.right = '39px';
        }
        vid.muted = !vid.muted;
    } else {
        sound.src = 'utilities/mute64-gray.png';
        if (mobile.matches) {
            sound.style.right = '20px';
        } else {
            sound.style.right = '40px';
        }
        vid.muted = !vid.muted;
    }
}

const loading = () => {
    const loader = document.querySelector('.loader');
    const line = document.querySelector('hr');
    const title = document.querySelector('.title');
    const music = document.querySelector('.left-outer');
    const dev = document.querySelector('.right-outer');

    const loadContent = () => {
        line.style.animation = 'bar-load .7s ease-in .1s';
        line.style.animationFillMode = 'forwards';
        line.style.width = 0;
        title.style.animation = 'title-load 1.5s 1s';
        title.style.animationFillMode = 'forwards';
        title.style.transform = 'translateY(100px)';
        music.style.animation = 'sites-load 1s ease-in-out 3s';
        music.style.animationFillMode = 'forwards';
        music.style.opacity = 0;
        dev.style.animation = 'sites-load 1s ease-in-out 4s';
        dev.style.animationFillMode = 'forwards';
        dev.style.opacity = 0;
    }

    window.addEventListener('load', function() {
        setTimeout(() => {
            loader.style.transform = 'translateX(100%)';
        }, 1700);
        setTimeout(loadContent, 2000);
    });
};

const arrowHover = () => {
    const musician = document.getElementById('musician');
    const developer = document.getElementById('developer');
    const left = document.getElementById('left');
    const right = document.getElementById('right');

    const leftMouseover = () => {
        left.classList.add('left-arrow-hover'); 
    }
    const leftMouseout = () => {
        left.classList.remove('left-arrow-hover'); 
    }
    const rightMouseover = () => {
        right.classList.add('right-arrow-hover'); 
    }
    const rightMouseout = () => {
        right.classList.remove('right-arrow-hover'); 
    }

    musician.addEventListener('mouseover', leftMouseover);
    musician.addEventListener('mouseout', leftMouseout);
    developer.addEventListener('mouseover', rightMouseover);
    developer.addEventListener('mouseout', rightMouseout);
}

const mobileResize = () => {
    const title = document.querySelector('#fenner');
    const left = document.getElementById('left');
    const middle = document.getElementById('middle');
    const right = document.getElementById('right');

    window.addEventListener('resize', () => {
        if (tablet.matches) {
            title.src = 'utilities/stackedName.png';
            title.style.width = '280px';
            left.style.width = '130px';
            middle.style.width = '150px';
            right.style.width = '130px';
        } else if (mobile.matches) {
            title.src = 'utilities/stackedName.png';
            title.style.width = '200px';
            left.style.width = '90px';
            middle.style.width = '120px';
            right.style.width = '90px';
        } else {
            title.src = 'utilities/logoNameOnly.png';
            title.style.width = '500px';
            left.style.width = '150px';
            middle.style.width = '150px';
            right.style.width = '150px';
        }
        
    });

    window.addEventListener('load', () => {
        if (tablet.matches) {
            title.src = 'utilities/stackedName.png';
            title.style.width = '280px';
            left.style.width = '130px';
            middle.style.width = '150px';
            right.style.width = '130px';
        } else if (mobile.matches) {
            title.src = 'utilities/stackedName.png';
            title.style.width = '200px';
            left.style.width = '90px';
            middle.style.width = '120px';
            right.style.width = '90px';
        } else {
            title.src = 'utilities/logoNameOnly.png';
            title.style.width = '500px';
            left.style.width = '150px';
            middle.style.width = '150px';
            right.style.width = '150px';
        }
        
    })

}

const app = () => {
    arrowHover();
    loading();
    sound.addEventListener('click', click);
    mobileResize();
}

app();

