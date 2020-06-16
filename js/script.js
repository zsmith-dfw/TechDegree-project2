// This will store the student list item elements in student list.
const student = document.querySelectorAll('.student-list li'); 
// We only want 10 students per page.
const itemsPerPage = 10; 

// This function shows the students we want to display on the page and hides the rest.
const showPage = (list, page) => { 
  const startIndex = (page * itemsPerPage) - itemsPerPage;
  const endIndex = (page * itemsPerPage);
  // looping through so that we only show 10 items on a page and hide the rest. 
  for (let i = 0; i < list.length; i++) { 
    if (i >= startIndex && i < endIndex) {
      list[i].style.display = 'block'; 
    } else { 
      list[i].style.display = 'none';
    }     
  }
}
// This function creates the links to the different pages at the bottom and allows them to be clickable and show the contents of the other pages by calling the showPage function.
const appendPageLinks = (list) => {
  // Create the condainer div element and give it a class name of pagination. 
  let containerDiv = document.createElement('div');
  containerDiv.className = 'pagination';
  //Since the class 'page' exists already, we just select it and append the container div to it.//
  let page = document.querySelector('.page');
  page.appendChild(containerDiv);
  // Same as before, create and append ul to the container div.
  let ul = document.createElement ('ul');
  containerDiv.appendChild(ul);
  // This math operation simply divides the total number of students by how many we want on the page. Important that "Math" is capitalized in this method.
  let maxPages = Math.ceil(list.length / itemsPerPage);
  // Now that we know how many pages are needed, we will loop that amount of times to create the correct number of li and a elements.
  for (let i = 0; i < maxPages; i++) {
    let li = document.createElement('li')
    let a = document.createElement('a');
    ul.appendChild(li);
    li.appendChild(a);
    // We need to set the href attribute to #, this is where our links are going to be.
    a.href="#";
    // This is where we set the page numbers. Remember, we want the first page to start at 1, not 0. 
    a.textContent = i + 1
    // If the first link is strictly equal to an index value of zero, then make its class active so it can conform to those CSS instructions. 
  if (i === 0) {
    a.className = 'active';
  }
  // This listener will iterate through all of the links and invoke the showPage function
  a.addEventListener ('click', (e) => {
    // Since we created the links already, we can store them in a variable.
    let allLinks = document.querySelectorAll('a');
    
    // This is needed to enhance the user experience. Not having it will cause all links to remain highlighted and impossible for users to know what page they're on
    for (i = 0; i < allLinks.length; i++) {
      allLinks[i].className = '';

    }
    // Add the active class name to the links that are clicked. We do this by targeting the event object in the listener.
    e.target.className = 'active';
    // Now within the listener we call our function to show the page and links and style them accordingly. 
    showPage(list, e.target.textContent); 
    })
  }
};
const searchDiv = document.createElement('div');
searchDiv.className = 'student-search';
const header = document.querySelector('.page-header');
header.appendChild(searchDiv);
const searchbar = document.createElement('input');
searchbar.placeholder = "Type name here.."
searchDiv.appendChild(searchbar);
const button = document.createElement('button');
button.innerHTML = 'Search'
searchDiv.appendChild(button);

const performSearch = (searchInput, names) => {
  for (let i = 0; i < names.length; i ++) {
   if (searchInput.value.length !== 0 && names[i].textContent.toLowerCase().includes(searchInput.value.toLowerCase())) {
        names[i].style.display = 'block'
      } else {
        names[i].style.display = 'none'
  }

  }

};
// Shows the page. It makes sense to begin on page one.
showPage(student, 1)
// Now we bring up our links and pass the list of students through it. Otherwise, it won't generate links because it only knows to hide all but the first 10 students.
appendPageLinks (student);

searchbar.addEventListener('keyup', () => {

  performSearch(searchbar, student)

});

button.addEventListener('click', (event) => {
  event.preventDefault();

  performSearch(searchbar, student)
 
});









