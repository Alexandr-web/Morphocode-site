const showListHeader = () => {
  const list = document.querySelector('.header__nav-list');
  const btn = document.querySelector('.header__nav-btn');

  btn.addEventListener('click', () => list.classList.toggle('show-down'));
}

export default showListHeader();