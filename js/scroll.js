const ft = document.querySelector('.business__title');
const ft2 = document.querySelector('.business-field__title');
const ft3 = document.querySelector('.main__footer-text');
const cb =  (entries, observe) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('inview')
      // observer.unobserve(entry.target)
    } else {
      entry.target.classList.remove('inview')
    }
  })
}
const options = {
  root: null,
  rootMargin: "0px 0px 0px 500px "
}
const io = new IntersectionObserver(cb, options);
io.observe(ft);
io.observe(ft2);
io.observe(ft3);
