window.onload = () => {
  const accordion = document.getElementsByClassName('wrapper-accordion-list-paragraph');

  for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
      this.classList.toggle('active');
    });
  }
};