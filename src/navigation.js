window.addEventListener('DOMContentLoaded', () => {
  let hamburger = document.getElementById('hamburger');
  hamburger.addEventListener('click', NavigationToggler());

  let navigationLinks = document.querySelectorAll('li a, #logo-link, #call-to-action');
  console.log(navigationLinks);

  for (navigationLink of navigationLinks) {
    navigationLink.addEventListener('click', scrollIntoView);
  }
});

window.addEventListener('scroll', scrollShadow);

function NavigationToggler() {
  let visible = false;

  return function () {
    let navigation = document.getElementById('navigation');

    visible = !visible;
    if (visible) {
      navigation.classList.remove('hidden');
    } else {
      navigation.classList.add('hidden');
    }
  };
}

function scrollShadow() {
  let header = document.getElementsByTagName('header')[0];

  if (window.scrollY <= 10) {
    header.classList.remove('shadow');
  } else {
    header.classList.add('shadow');
  }
}

function scrollIntoView(event) {
  event.preventDefault();

  let linkId = event.target.getAttribute('href')?.substring(1);

  scrolledElement = linkId
    ? document.getElementById(linkId)
    : document.getElementsByTagName('body')[0];

  scrolledElement.scrollIntoView({ behavior: 'smooth' });
}
