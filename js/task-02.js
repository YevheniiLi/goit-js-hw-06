const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];




const ingredientsEl = document.querySelector("#ingredients");



const listEl = ingredients.map((ingredient) => {
  const newIngred = document.createElement("li");
  newIngred.textContent = ingredient;
  newIngred.classList.add("item");
  return newIngred;
});

ingredientsEl.append(...listEl);


