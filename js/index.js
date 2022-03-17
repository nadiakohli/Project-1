window.onload = window.onresize = () => {
  //TOGGLE MENU

  // Get burger button from DOM
  const burgerButton = document.querySelector('.burger-button');
  // Get menu from DOM
  const menu = document.querySelector('.burger-menu');
  
  // Function which toogle state of menu
  const toggleMenu = (el) => {
    // Set display style for menu. Check if burger button element have 'active' class
    menu.style.display = el.currentTarget.classList.contains('active') ? 'flex' : 'none';
    // Toogle 'active' class by each click on the burger button
    el.currentTarget.classList.toggle('active');
  };

  // Add click event on burger button
  burgerButton.addEventListener('click', toggleMenu);

  //SLIDER
  const containerCustomerOpinionSlide = document.querySelector('.test');
  const customerOpinionSlide = document.querySelectorAll('.testimonials-customer-opinion');

  let screenWidth = window.innerWidth;

  // Buttons
  const prevBtn = document.querySelector('#nextBtn');
  const nextBtn = document.querySelector('#prevBtn');

  //Counter
  let counter = 1;

  const heightSize = customerOpinionSlide[0].clientHeight + 20;
  const widthSize = customerOpinionSlide[0].clientWidth + 20;

  const size = screenWidth <= 768 ? widthSize : heightSize;
  const transition = 'all 0.5s ease-in-out';

  //Button listeners
  prevBtn.addEventListener('click', () => {
    if (counter >= customerOpinionSlide.length - 1) return;
    containerCustomerOpinionSlide.style.transition = transition;
    counter++;
    containerCustomerOpinionSlide.style.transform = `${screenWidth <= 768
      ? 'translateX'
      : 'translateY'}(${-size * counter}px)`;
  });

  nextBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    containerCustomerOpinionSlide.style.transition = transition;
    counter--;
    containerCustomerOpinionSlide.style.transform = `${screenWidth <= 768
      ? 'translateX'
      : 'translateY'}(${-size * counter}px)`;
  });

  containerCustomerOpinionSlide.addEventListener('transitionend', () => {
    if (customerOpinionSlide[counter].id === 'lastClone') {
      counter = customerOpinionSlide.length - 2;
    }

    if (customerOpinionSlide[counter].id === 'firstClone') {
      counter = customerOpinionSlide.length - counter;
    }

    containerCustomerOpinionSlide.style.transition = "none";
    containerCustomerOpinionSlide.style.transform = `${screenWidth <= 768
      ? 'translateX'
      : 'translateY'}(${-size * counter}px)`;
  });

  //ACCORDION
  const accordion = document.getElementsByClassName('wrapper-accordion-list-paragraph');

  for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
      this.classList.toggle('active');
    });
  };
};