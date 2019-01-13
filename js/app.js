document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const travelListItem = createTravelListItem(event.target);
  const travelDiv = document.querySelector('#travel-list');
  travelDiv.appendChild(travelListItem);

  event.target.reset();
}

const createTravelListItem = function (form) {
  const travelListItem = document.createElement('ul');
  // travelListItem.classList.add('travel-list-item');

  const city = document.createElement('li');
  city.textContent = form.city.value;
  travelListItem.appendChild(city);

  const country = document.createElement('li');
  country.textContent = form.country.value;
  travelListItem.appendChild(country);

  const duration = document.createElement('li');
  duration.textContent = form.duration.value;
  travelListItem.appendChild(duration);

  const rating = document.createElement('li');
  rating.textContent = `${form.rating.value} stars`;
  travelListItem.appendChild(rating);


  const category = document.createElement('li');
  category.textContent = form.category.value;
  travelListItem.appendChild(category);

  return travelListItem;
}

const handleDeleteAllClick = function (event) {
  const travelList = document.querySelector('#travel-list');
  travelList.innerHTML = '';
}
