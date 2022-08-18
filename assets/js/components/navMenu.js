export const navMenu = () => {
  btnMenu.onclick = () => nav.classList.add('show-menu')
  navClose.onclick = () => nav.classList.remove('show-menu')

  nav.addEventListener('click', (e) => {
    if (e.target.matches('.nav-link')) {
      e.currentTarget.querySelectorAll('.nav-link').forEach((link)=> {
        link.classList.remove('active-link')
      })
      e.target.classList.add('active-link')
      nav.classList.remove('show-menu')
    }
  })
}