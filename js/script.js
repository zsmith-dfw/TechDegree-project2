const student = document.querySelectorAll('.student-list li'); // this will store the student list item elements in student list
const itemsPerPage = 9; // we only want 10 students per page 


// hides all items except ones we want to show 
  const showPage = (list, page) => { 
    const startIndex = (page * itemsPerPage) - itemsPerPage; // honestly not 100% sure on the math on this - it was given from the project study guide 
    const endIndex = (page * itemsPerPage);
    for (let i = 0; i < list.length; i ++) { // looping through so that we only show 10 items on a page and hide the rest 
      if (i >= startIndex && i <= endIndex) {
        list[i].style.display = 'block'; 
      } else { list[i].style.display = 'none';
    }     
  }
 }
 // just used for testing if showPage function works 

   let appendPageLinks = (list) => {
     // not sure if this is correct. intent is to dynamically create the amount of pages based of total list and how many ought to be on a page 
    const listDiv = document.createElement('div'); // create container DIV element
    listDiv.className = "pagination"; // give it a class name of "pagination"
    const page = document.querySelector('.page'); // select the div with class name of page
    page.appendChild(listDiv); // append the container div to div with class name of page
    let maxPages = math.ceil(list.length / itemsPerPage); // find out how many pages are needed
      for (let i = 0; i < 9; i ++) { // loop through to dynamically create a new page for every 10 students
      const ul = document.querySelector('ul'); // trying to create a nested UL containing one LI for every 10 studentds
      const li = document.querySelector('li'); // selecting the list items
      ul.appendChild(li); // appending the list items to the unordered list 
      const a = document.querySelector('a'); // selecting the a element
      li.appendChild(a); // appending a to li element 
      a.href="#"; // giving href attribute to the a element 
      i.textContent = // I am unsure what to set this variable as - would it be one of my globals or a local one I need to make?
      

      a.textContent = list; // trying to set the links at the bottom to read out as the page numbers 
     
      for (let i = 0; i < itemsPerPage.length; i ++) { // setting a loop to apply the listener to each link
        itemsPerPage[i].addEventListener('click',  () => {
        )}};
      // I have no idea where to begin on the last two items 
      // The active class name should be removed from all pagination links. A loop can be helpful for this step
      // The active class name should be added to the link that was clicked
    }
    }
// I do not understand how to properly call the function, first argument is set as global variable and second should be "page number" but i don't know what that is 
showPage(student, 1)


