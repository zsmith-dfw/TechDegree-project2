const student = document.querySelectorAll('.student-list li'); // this will store the student list item elements in student list
const itemsPerPage = 10; // we only want 10 students per page 

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
   showPage(student, 4) // just used for testing if showPage function works 

   let appendPageLinks = (list) => {
    let pageNumbers = list.length / itemsPerPage // not sure if this is correct. intent is to dynamically create the amount of pages based of total list and how many ought to be on a page 
    let listDiv = document.createElement('div'); // here we create and append the DOM elements that will create h ref links for the user to click on 
    listDiv.className = "pagination";
    listDiv.appendChild('.page');
    let ul = document.createElement('ul');
    pagination.appendChild('ul');
      for (let i = 0; i < pageNumbers; i ++) { // loop through to dynamically create links 
      let a = document.createElement('a')
      let li = document.createElement('li')
      ul.appendChild('li');
      li.appendChild('a');
      a.className = "active";
      a.href="#"; 
      a.textContent = pageNumbers; // trying to set the links at the bottom to read out as the page numbers 
    }
}



