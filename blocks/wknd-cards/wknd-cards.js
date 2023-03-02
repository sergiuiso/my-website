import { createOptimizedPicture } from '../../scripts/lib-franklin.js';

export default function decorate(block) {
  /* change to ul, li */
  const ul = document.createElement('ul');
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    li.innerHTML = row.innerHTML;
    [...li.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture')) div.className = 'wknd-cards-card-image';
      else div.className = 'wknd-cards-card-body';
    });
    ul.append(li);
  });
  ul.querySelectorAll('img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  block.textContent = '';
  block.append(ul);
}


function editFacebookButtons() {
  var result = [...document.querySelectorAll('[title="fb"]')];
  for (const item of result) {
    item.innerHTML = "";
    item.classList.add("fa");
    item.classList.add("fa-facebook");
  }

}
editFacebookButtons()

function editTwitterButtons() {
  var result = [...document.querySelectorAll('[title="tw"]')];
  for (const item of result) {
    item.innerHTML = "";
    item.classList.add("fa");
    item.classList.add("fa-twitter");
  }

}
editTwitterButtons()

function editInstagramButtons() {
  var result = [...document.querySelectorAll('[title="ig"]')];
  for (const item of result) {
    item.innerHTML = "";
    item.classList.add("fa");
    item.classList.add("fa-instagram");
  }

}
editInstagramButtons()