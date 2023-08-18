// Show / Hiding Navbar
const handleNavbar = () => {
    let navbar = document.querySelector('#top-navbar  .list')
    navbar.classList.toggle('active-navbar')
}





// Scrolling
const scrolling = () => {
    let header = document.querySelector('header.navbar-wrapper');

    window.scrollY > 50 
        ? (
            header.style.background = 'rgba(0, 0, 0, 1)',
            header.style.height = '5rem'
          )

        : (
            header.style.background = 'rgba(0, 0, 0, .64)',
            header.style.height = '8rem'
          )
}

window.addEventListener('scroll', scrolling)