document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

  // const deleteAllButton = document.querySelector('#delete-all');
  // deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const travelListItem = createTravelListItem(event.target);
  const travelList = document.querySelector('#travel-list');
  travelList.appendChild(travelListItem);

  event.target.reset();
}

const createTravelListItem = function (form) {
  const travelListItem = document.createElement('li');
  travelListItem.classList.add('travel-list-item');

  const city = document.createElement('p');
  city.textContent = form.city.value;
  travelListItem.appendChild(city);

  const country = document.createElement('p');
  country.textContent = form.country.value;
  travelListItem.appendChild(country);

  const type = document.createElement('p');
  category.textContent = form.category.value;
  travelListItem.appendChild(category);

  return travelListItem;
}

// const handleDeleteAllClick = function (event) {
//   const travelList = document.querySelector('#travel-list');
//   travelList.innerHTML = '';
// }
