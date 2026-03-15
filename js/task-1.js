// 1. Знаходимо всі елементи категорій (li.item)
const categoriesItems = document.querySelectorAll('#categories .item');

console.log(`Number of categories: ${categoriesItems.length}`);
categoriesItems.forEach(category => {
  
const categoryName = category.querySelector('h2').textContent;
const elementsCount = category.querySelectorAll('ul li').length;

console.log(`Category: ${categoryName}`);
console.log(`Elements: ${elementsCount}`);
});