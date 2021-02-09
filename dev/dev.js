//jQuery smooth scroll
$('nav a').on('click', function(e) {
    if (this.hash !== '') {
        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
            scrollTop: $(hash).offset().top
            }, 1500);
    }
});

const typeWriter = () => {
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';

    const hello = () => {
        const text = ['Hello,'];
        let count = 0;
        let index = 0;
        let currentText = '';
        let letter = '';

        (function type() {
            if (count === text.length) {
                //count = 0;
            }
            currentText = text[count];
            letter = currentText.slice(0, ++index);
    
            document.querySelector('.hello').textContent = letter;
            if (letter.length === currentText.length) {
                count++;
                index = 0;
            }
            setTimeout(type, 70);
        }())
    }
    const im = () => {
        const text = ['I\'m '];
        let count = 0;
        let index = 0;
        let currentText = '';
        let letter = '';

        (function type() {
            if (count === text.length) {
                // count = 0;
            }
            currentText = text[count];
            letter = currentText.slice(0, ++index);
    
            document.querySelector('.im').textContent = letter;
            if (letter.length === currentText.length) {
                count++;
                index = 0;
            }
            setTimeout(type, 70);
        }())
    }
    const jacob = () => {
        const text = ['Jacob'];
        let count = 0;
        let index = 0;
        let currentText = '';
        let letter = '';

        (function type() {
            if (count === text.length) {
                // count = 0;
            }
            currentText = text[count];
            letter = currentText.slice(0, ++index);
    
            document.getElementById('jacob').textContent = letter;
            if (letter.length === currentText.length) {
                count++;
                index = 0;
            }
            setTimeout(type, 70);
        }())
    }
    const period = () => {
        const text = ['.'];
        let count = 0;
        let index = 0;
        let currentText = '';
        let letter = '';

        (function type() {
            if (count === text.length) {
                // count = 0;
            }
            currentText = text[count];
            letter = currentText.slice(0, ++index);
    
            document.querySelector('.period').textContent = letter;
            if (letter.length === currentText.length) {
                count++;
                index = 0;
            }
            setTimeout(type, 70);
        }())
    }
    const dev = () => {
        const text = ['Front End Web Developer'];
        let count = 0;
        let index = 0;
        let currentText = '';
        let letter = '';

        (function type() {
            if (count === text.length) {
                // count = 0;
            }
            currentText = text[count];
            letter = currentText.slice(0, ++index);
    
            document.querySelector('.dev').textContent = letter;
            if (letter.length === currentText.length) {
                count++;
                index = 0;
            }
            setTimeout(type, 40);
        }())
    }
    hello();
    setTimeout(im, 1000);
    setTimeout(jacob, 1280);
    setTimeout(period, 1630);
    setTimeout(dev, 2280);
    
}

const toggleDisplay = () => {
    const hello = document.querySelector('.home-container');
    const contact = document.querySelector('.contact-container');

    window.onload = () => {
        contact.style.display = 'none';
    }

    const toggle = () => {
        if (window.scrollY > 600 && window.scrollY < 800) {
            hello.style.display = 'none';
        } else if (window.scrollY <= 600) {
            hello.style.display = 'flex';
        } 

        if (window.scrollY > 1000) {
            contact.style.display = 'flex';
        } else if (window.scrollY < 1000) {
            contact.style.display = 'none';
        }
    }

    document.addEventListener('scroll', toggle)
};

function log() {
    console.log(window.scrollY)
}

window.addEventListener('scroll', log)

const sourceClick = () => {
    const popUp = document.querySelector('.pop-up');
    const popUpButton = document.querySelector('.source-button');
    const overlay = document.querySelector('.overlay');
    const cancel = document.getElementById('cancel');
    const container = document.querySelector('.container')

    console.log(popUp)
    console.log(popUpButton)
    console.log(overlay)
    console.log(cancel)

    const popUpDisplay = () => {
        overlay.classList.add('overlay-active');
        popUp.style.visibility = 'visible';
        popUp.classList.add('pop-up-active');
        container.classList.add('content-inactive');
        document.body.style.overflow = 'hidden';
    }

    const cancelMouseover = () => {
        cancel.src = "../utilities/cancel-green.png";
    }
    const cancelMouseout = () => {
        cancel.src = "../utilities/cancel-gray.png";
    }

    const cancelPopUp = () => {
        overlay.classList.remove('overlay-active');
        popUp.classList.remove('pop-up-active');

        const invisible = () => {
            popUp.style.visibility = 'hidden';
        }

        setTimeout(invisible, 500);
        container.style.pointerEvents = 'initial';
        document.body.style.overflow = 'initial';
    }

    popUpButton.addEventListener('click', popUpDisplay);
    cancel.addEventListener('mouseover', cancelMouseover);
    cancel.addEventListener('mouseout', cancelMouseout);
    cancel.addEventListener('click', cancelPopUp);
    overlay.addEventListener('click', cancelPopUp);
}

const iconHover = () => {
    const homeHover = () => {

        const button = document.querySelector('.home-button');
        const home = document.getElementById('home-icon');
        const homeText = document.getElementById('home-text');

        const homeMouseover = () => {
            home.src = '../utilities/home-icon-green.png';
            home.style.opacity = 0;
            homeText.style.opacity = 1;
            homeText.style.visibility = 'visible';
        }

        const homeMouseout = () => {
            home.src = '../utilities/home-icon.png';
            home.style.opacity = 1;
            homeText.style.opacity = 0;
        }

        button.addEventListener('mouseover', homeMouseover);
        button.addEventListener('mouseout', homeMouseout);
    }

    const projectsHover = () => {

        const button = document.querySelector('.projects-button');
        const projects = document.getElementById('projects-icon');
        const projectsText = document.getElementById('projects-text');

        const projectsMouseover = () => {
            projects.src = '../utilities/projects-icon-green.png';
            projects.style.opacity = 0;
            projectsText.style.opacity = 1;
            projectsText.style.visibility = 'visible';
        }

        const projectsMouseout = () => {
            projects.src = '../utilities/projects-icon.png';
            projects.style.opacity = 1;
            projectsText.style.opacity = 0;
        }

        button.addEventListener('mouseover', projectsMouseover);
        button.addEventListener('mouseout', projectsMouseout);
    }

    const aboutHover = () => {

        const button = document.querySelector('.about-button');
        const about = document.getElementById('about-icon');
        const aboutText = document.getElementById('about-text');

        const aboutMouseover = () => {
            about.src = '../utilities/about-icon-green.png';
            about.style.opacity = 0;
            aboutText.style.opacity = 1;
            aboutText.style.visibility = 'visible';
        }

        const aboutMouseout = () => {
            about.src = '../utilities/about-icon.png';
            about.style.opacity = 1;
            aboutText.style.opacity = 0;
        }

        button.addEventListener('mouseover', aboutMouseover);
        button.addEventListener('mouseout', aboutMouseout);
    }

    const contactHover = () => {

        const button = document.querySelector('.contact-button');
        const contact = document.getElementById('contact-icon');
        const contactText = document.getElementById('contact-text');

        const contactMouseover = () => {
            contact.src = '../utilities/contact-icon-green.png';
            contact.style.opacity = 0;
            contactText.style.opacity = 1;
            contactText.style.visibility = 'visible';
        }

        const contactMouseout = () => {
            contact.src = '../utilities/contact-icon.png';
            contact.style.opacity = 1;
            contactText.style.opacity = 0;
        }

        button.addEventListener('mouseover', contactMouseover);
        button.addEventListener('mouseout', contactMouseout);
    }

    const githubHover = () => {
        
        const button = document.querySelector('.github-button');
        const githubIcon = document.getElementById('github-icon');

        const githubMouseover = () => {
            githubIcon.src = '../utilities/github-green.png';
        }

        const githubMouseout = () => {
            githubIcon.src = '../utilities/github-gray.png';
        }

        button.addEventListener('mouseover', githubMouseover);
        button.addEventListener('mouseout', githubMouseout);
    }
    
    const linkedinHover = () => {
        
        const button = document.querySelector('.linkedin-button');
        const linkedinIcon = document.getElementById('linkedin-icon');

        const linkedinMouseover = () => {
            linkedinIcon.src = '../utilities/linkedin-green.png';
        }

        const linkedinMouseout = () => {
            linkedinIcon.src = '../utilities/linkedin-gray.png';
        }

        button.addEventListener('mouseover', linkedinMouseover);
        button.addEventListener('mouseout', linkedinMouseout);
    }
    
    const resumeHover = () => {

        const button = document.querySelector('.resume-button');
        const resume = document.getElementById('resume-icon');
        const resumeText = document.getElementById('resume-text');

        const resumeMouseover = () => {
            resume.src = '../utilities/download32.png';
            resume.style.opacity = 0;
            resumeText.style.opacity = 1;
            resumeText.style.visibility = 'visible';
        }

        const resumeMouseout = () => {
            resume.src = '../utilities/download-gray32.png';
            resume.style.opacity = 1;
            resumeText.style.opacity = 0;
        }

        button.addEventListener('mouseover', resumeMouseover);
        button.addEventListener('mouseout', resumeMouseout);
    }
    
    homeHover();
    projectsHover();
    aboutHover();
    contactHover();
    githubHover();
    linkedinHover();
    resumeHover();

}

const app = () => {
    setTimeout(typeWriter, 3300)
    toggleDisplay();
    sourceClick();
    iconHover();
}

app();