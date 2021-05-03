const vid = document.getElementById('video');
const audio = document.getElementById('audio');
const sound = document.getElementById('sound');
const tablet = window.matchMedia('(min-width: 501px) and (max-width: 1000px)');
const mobile = window.matchMedia('(max-width: 500px)');
const musician = document.getElementById('musician');
const developer = document.getElementById('developer');
const left = document.getElementById('left');
const right = document.getElementById('right');
const constructionDiv = document.querySelector('.construction');
const overlay = document.querySelector('.overlay');

const autoplayAudio = () => {
    window.addEventListener('load', () => {
        audio.play();
        console.log(audio.autoplay)
    })
}

const audioToggle = () => {
    if (audio.muted) {
        sound.src = 'utilities/volume64-green.png';
        if (mobile.matches) {
            sound.style.right = '19px';
        } else {
            sound.style.right = '39px';
        }
        audio.muted = !audio.muted;
    } else {
        sound.src = 'utilities/mute64-red.png';
        if (mobile.matches) {
            sound.style.right = '20px';
        } else {
            sound.style.right = '40px';
        }
        audio.muted = !audio.muted;
    }
}

const loading = () => {
    const loader = document.querySelector('.loader');
    const line = document.querySelector('hr');
    const title = document.querySelector('.title');
    const music = document.querySelector('.left-outer');
    const dev = document.querySelector('.right-outer');

    const loadContent = () => {
        line.classList.add('hr-load');
        title.classList.add('title-load');
    }

    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.style.transform = 'translateX(100%)';
        }, 1700);
        setTimeout(loadContent, 2000);
        setTimeout(() => {
            loader.parentNode.removeChild(loader);
        }, 3000);
    });
};

const arrowHover = () => {
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

const underConstruction = () => {
    const revealMessage = () => {
        constructionDiv.classList.remove('invisible')
        overlay.classList.remove('invisible')
    }
    const hideMessage = () => {
        constructionDiv.classList.add('invisible')
        overlay.classList.add('invisible')
    }

    musician.addEventListener('click', revealMessage);
    overlay.addEventListener('click', hideMessage);
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
    // autoplayAudio();
    arrowHover();
    loading();
    sound.addEventListener('click', audioToggle);
    underConstruction();
    mobileResize();
}

app();
