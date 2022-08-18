export const headerScroll = () => {
  const handlerScroll = () => {
    scrollY >= 50 
      ? header.classList.add('scroll-header') 
      : header.classList.remove('scroll-header')
  }

  window.addEventListener('scroll', handlerScroll)
}