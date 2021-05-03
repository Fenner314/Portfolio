const tablet = window.matchMedia('(min-width: 600px) and (max-width: 1000px)');
const mobile = window.matchMedia('(max-width: 600px)');

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

const sendMessage = () => {
    const name = document.getElementById('left')
    const email = document.getElementById('right')
    const subject = document.getElementById('subject')
    const text = document.getElementById('message')
    let message = '';
    
    $('#sendMessage').on('click', function() {
        message = $('#contactForm').serialize();
        $.ajax({
            url: 'https://formspree.io/f/mdoyakgq',
            method: 'POST',
            data: {message: message},
            dataType: 'json'
        });
        alert('Email sent');
        return false;
    })
    console.log(typeof name.value)
}

//Phase out loading animation 
const loading = () => {
    const loader = document.querySelector('.loader');

    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.style.transform = 'translateX(100%)';
        }, 3500);
        setTimeout(() => {
            loader.parentNode.removeChild(loader)
        }, 6000);
    })
}

//Home page text animation
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
            setTimeout(type, 50);
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
            setTimeout(type, 50);
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
            setTimeout(type, 50);
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
            setTimeout(type, 50);
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
    setTimeout(im, 800);
    setTimeout(jacob, 1000);
    setTimeout(period, 1250);
    setTimeout(dev, 1800);
    
}

//Logo scroll animation 
const logoChange = () => {
    const logo = document.querySelector('.logo');
    const logoSmall = document.querySelector('.logo-small');

    const hideLogo = () => {
        if (window.scrollY > 1) {
            logo.classList.add('logo-change')
            logoSmall.classList.add('logo-small-change');
        } 
        else if (window.scrollY < 1) {
            setTimeout(() => { 
                logo.classList.remove('logo-change');
            }, 600); 
            logoSmall.classList.remove('logo-small-change');

        }
        
        
    };

    window.addEventListener('scroll', hideLogo);
}

//Toggle between home page and contact page being visible on scroll
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

        if (window.scrollY > 1230) {
            contact.style.display = 'flex';
        } else if (window.scrollY < 1230) {
            contact.style.display = 'none';
        }

        // if (mobile.matches) {
        //     if (window.scrollY > 1600) {
        //         contact.style.display = 'flex';
        //     } else if (window.scrollY < 1600) {
        //         contact.style.display = 'none';
        //     }
        // } else {
        //      if (window.scrollY > 1230) {
        //         contact.style.display = 'flex';
        //     } else if (window.scrollY < 1230) {
        //         contact.style.display = 'none';
        //     }
        // }
    }

    document.addEventListener('scroll', toggle)
};

//Display popup on button click
const sourceClick = () => {
    const popUp = document.querySelector('.pop-up');
    const popUpButton = document.querySelector('.popup-button');
    const overlay = document.querySelector('.overlay');
    const cancel = document.getElementById('cancel');
    const container = document.querySelector('.container')

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
        container.classList.remove('content-inactive');
        document.body.style.overflow = 'initial';
    }

    popUpButton.addEventListener('click', popUpDisplay);
    cancel.addEventListener('mouseover', cancelMouseover);
    cancel.addEventListener('mouseout', cancelMouseout);
    cancel.addEventListener('click', cancelPopUp);
    overlay.addEventListener('click', cancelPopUp);
}

//Toggle icon and text on hover
const iconHover = () => {
    console.log('hello')
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

//Add navigation bar with menu on small screen. Nav links appear below
const navBack = () => {
    const topNav = document.querySelector('.pseudo-nav');

    const navGray = () => {
        if (window.scrollY > 0) {
            topNav.classList.add('nav-gray');
        } else {
            topNav.classList.remove('nav-gray');
        }
    }

    document.addEventListener('scroll', navGray)
}

//Navigation bar slide in on click
const navSlide = () => {
    const nav = document.querySelector('nav');
    const burger = document.querySelector('.burger');
    const topNav = document.querySelector('.pseudo-nav');
    const icons = document.querySelectorAll('.button');

    const burgerToggle = () => {
        burger.classList.toggle('burger-toggle');
    }

    const slide = () => {
        nav.classList.toggle('nav-toggle');

        burgerToggle();
    }

    burger.addEventListener('click', slide);
    home.addEventListener('click', slide);
    icons.forEach((icon) => {
            icon.addEventListener('click', slide)
        }
    )

}

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}  

//Calls all functions
const app = () => {
    loading();
    if (mobile.matches) {
        setTimeout(typeWriter, 4300);
    } else {
        setTimeout(typeWriter, 5800);
    }
    window.addEventListener('load', () => {
        if (mobile.matches) {
            return;
        } else {
            logoChange();
        }
    });
    window.addEventListener('resize', () => {
        if (mobile.matches) {
            return;
        } else {
            logoChange();
        }
    });
    toggleDisplay();
    sourceClick();
    iconHover();
    navBack();
    navSlide();
    sendMessage();
}

app();