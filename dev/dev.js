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

const toggleDisplay = () => {
    const hello = document.querySelector('.home-container');
    const contact = document.querySelector('.contact-container');
    const home = document.getElementById('home-icon');
    const homeGreen = () => {
        home.src = '../utilities/home-icon-green.png'
    };

    window.onload = () => {
        contact.style.display = 'none';
        homeGreen();
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

const navHover = () => {
    const home = document.getElementById('home-icon');
    const projects = document.getElementById('projects-icon');
    const about = document.getElementById('about-icon');
    const contact = document.getElementById('contact-icon');

    console.log(home);
    // home icon green on hover
    const homeGreen = () => {
        home.src = '../utilities/home-icon-green.png'
        // homeText.style.visibility = 'visible';
    };
    const homeGray = () => {
        home.src = '../utilities/home-icon.png'
    }

    home.addEventListener('mouseover', homeGreen);
    home.addEventListener('mouseout', homeGray);
    window.addEventListener('scroll', navScroll)
    
    // projects icon green on hover
    const projectsGreen = () => {
        projects.src = '../utilities/projects-icon2-green.png'
    };
    const projectsGray = () => {
        projects.src = '../utilities/projects-icon2.png'
    }

    projects.addEventListener('mouseover', projectsGreen);
    projects.addEventListener('mouseout', projectsGray);

    // about icon green on hover
    const aboutGreen = () => {
        about.src = '../utilities/about-icon-green.png'
    };
    const aboutGray = () => {
        about.src = '../utilities/about-icon.png'
    }

    about.addEventListener('mouseover', aboutGreen);
    about.addEventListener('mouseout', aboutGray);

    // contact icon green on hover
    const contactGreen = () => {
        contact.src = '../utilities/contact-icon-green.png'
    };
    const contactGray = () => {
        contact.src = '../utilities/contact-icon.png'
    }

    contact.addEventListener('mouseover', contactGreen);
    contact.addEventListener('mouseout', contactGray);

    // change icon color on scroll
    const navScroll = () => {
        if (window.scrollY >= 0 && window.scrollY < 578) {
            homeGreen();
            projectsGray();
            aboutGray();
            contactGray();
        } else if (window.scrollY >= 578 && window.scrollY < 1156) {
            homeGray();
            projectsGreen();
            aboutGray();
            contactGray();
        } else if (window.scrollY >= 1156 && window.scrollY < 1734) {
            homeGray();
            projectsGray();
            aboutGreen();
            contactGray();
        } else if (window.scrollY >= 1734) {
            homeGray();
            projectsGray();
            aboutGray();
            contactGreen();
        }
    }

};

function log() {
    console.log(window.scrollY)
}

window.addEventListener('scroll', log)

const app = () => {
    toggleDisplay();
    navHover();
}

app();