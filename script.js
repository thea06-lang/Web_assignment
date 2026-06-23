const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
// The constants of hamburger and navlinks are define so that JS knows what action to perform on.
// So for hamburger constant, the query selector is indentify with the class "hamburger" so actions can be perform on that classs. Similarly to constant of navlinks.

hamburger.addEventListener('click', function () {
  const isOpen = navLinks.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', isOpen);
});
// These 3 lines of code above is trying to perform the action on the hamburger UI.
// So when we click on the hamburger menu, it will open the navlinks which is the goal in line 7.
// For the line 8 code, this is a way to inform people with impaired eye sight that the hamburger menu is opened or closed.
// Since screen readers can't see the animations, using aria-expanded to read out the variable isOpen so that it can communicate with poor eyesight people using screen readers.

document.addEventListener('click', function (e) {
  if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
    navLinks.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  }
});
//These 3 lines of code above is the action of what happen when we click somewhere outside the hamburger menu.
//So if we click somewhere where the function is error, meaning that if we click somewhere that are not the hamburger menu or the navlinks, then the navlinks will be removed.
// For screen readers, aria-expanded will be false, meaning the return message for poor eyesight individual would read as "This menu is NOT open"
