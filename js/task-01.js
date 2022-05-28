const allCategories = document.querySelectorAll('li.item');
console.log(`Number of categories: ${allCategories.length}`);


for(const item of allCategories){
    console.log(`Category: ${item.firstElementChild.textContent}`);
    const allItems = item.querySelectorAll('li');
    console.log(`Elements: ${allItems.length}`);
};