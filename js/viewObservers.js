

const observers = {
    navObserver: new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                const spacer = document.querySelector('div#spacer');
                spacer.classList.add('spacerScrollMode');
                spacer.classList.remove('spacer');
                const nav = document.querySelector('nav');
                nav.classList.add('navCollapsed')

                
            }
            else{
                const spacer = document.querySelector('div#spacer');
                spacer.classList.remove('spacerScrollMode');
                spacer.classList.add('spacer');
                const nav = document.querySelector('nav');
                nav.classList.remove('navCollapsed');
            }
        });
    },
    {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    }
    ),
}


document.querySelector('button.collapseBtn').addEventListener('click', (event) => {
    const nav = document.querySelector('nav');
    nav.classList.toggle('navCollapsed');
});


observers.navObserver.observe(document.querySelector('.hero-container'));