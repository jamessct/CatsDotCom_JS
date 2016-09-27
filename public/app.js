// # Homework

// 1. Add JS code to allow a new cat to be added programmatically. Do it rough and ready at first!
// 2. Refactor the code to make it easy to add a new cat, just like we did with the quotes.
// 3. OPTIONAL: Remove the cat data in the HTML and add them via your javascript. If you want to be fancy, put the cat data into an array.
// 4. OPTIONAL: Do some sweeeet css

// Hint: Be careful with the order you append your elements to each other!
// Also be careful with what you need to pass when setting an image's width via the DOM.

var app = function(){
  addCat("Name: elfcat", "Favourite food: other cats", "http://i0.wp.com/theverybesttop10.files.wordpress.com/2013/12/the-world_s-top-10-best-images-of-cats-in-elf-costumes-10.jpg?resize=584%2C439");
}

var addCat = function(name, favFood, imgUrl){
  var ul = createUl();
  var catName = createCatName(name);
  var favFood = createFavFood(favFood);
  var img = createImg(imgUrl);
  var cats = document.querySelector('#cats');
  appendElements(cats, ul, catName, favFood, img);
}

var createUl = function() {
  var ul = document.createElement('ul');
  ul.classList.add('cat');
  return ul;
}

var createCatName = function(name) {
  var catName = document.createElement('li');
  catName.innerText = name;
  return catName;
}

var createFavFood = function(favFood) {
  var catFavFood = document.createElement('li');
  catFavFood.innerText = favFood;
  return catFavFood;
}

var createImg = function(img) {
  var img = document.createElement('img');
  img.innerHTML = img;
  return img;
}

var appendElements = function(cats, ul, catName, favFood, img) {
  ul.appendChild(img);
  ul.appendChild(catName);
  ul.appendChild(favFood);
  cats.appendChild(ul);
}

window.onload = app

// window.onload = function() {
//   var catUl = document.createElement('ul');
//   catUl.classList.add('cat')

//   var catsName = document.createElement('li');
//   catsName.innerText = "name";

//   var favFood = document.createElement('li');
//   favFood.innerText = "other cats";

//   catUl.appendChild(catsName);
//   catUl.appendChild(favFood);
//   var cats = document.querySelector('#cats');
//   cats.appendChild(catUl);
// }

