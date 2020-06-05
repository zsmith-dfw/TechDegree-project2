const student = document.querySelectorAll('.student-list li'); 
const itemsPerPage = 10; 
const showPage = (list, page) => { 
  const startIndex = (page * itemsPerPage) - itemsPerPage;
  const endIndex = (page * itemsPerPage);
  for (let i = 0; i < list.length; i ++) { 
    if (i >= startIndex && i <= endIndex) {
      list[i].style.display = 'block'; 
    } else { 
      list[i].style.display = 'none';
    }     
  }
}
showPage(student, 1)
const appendPageLinks = (list) => {
  let containerDiv = document.createElement('div');
  containerDiv.className = 'pagination';
  let page = document.querySelector('.page');
  page.appendChild(containerDiv);
  let ul = document.createElement ('ul');
  containerDiv.appendChild(ul);
  let maxPages = Math.ceil(list.length / itemsPerPage);
  for (let i = 0; i < maxPages; i++) {
    let li = document.createElement('li')
    let a = document.createElement('a');
    ul.appendChild(li);
    li.appendChild(a);
    a.href="#";
    a.textContent = i + 1
  if (i === 0) {
    a.className = 'active';
  }

  a.addEventListener ('click', (e) => {
    let allLinks = document.querySelectorAll('a');
    for (i = 0; i < allLinks.length; i++) {
      allLinks[i].className = '';

    }
    e.target.className = 'active';
    showPage(list, e.target.textContent); 
  })
}
};
 appendPageLinks (student);

// const student = document.querySelectorAll('.student-list li'); // this will store the student list item elements in student list
// const itemsPerPage = 9; // we only want 10 students per page 


// // hides all items except ones we want to show 
//   const showPage = (list, page) => { 
//     const startIndex = (page * itemsPerPage) - itemsPerPage; // honestly not 100% sure on the math on this - it was given from the project study guide 
//     const endIndex = (page * itemsPerPage);
//     for (let i = 0; i < list.length; i ++) { // looping through so that we only show 10 items on a page and hide the rest 
//       if (i >= startIndex && i <= endIndex) {
//         list[i].style.display = 'block'; 
//       } else { list[i].style.display = 'none';
//     }     
//   }
//  }
//  // just used for testing if showPage function works 
//  showPage(student, 1)
// const appendPageLinks = (list) => {
// let containerDiv = document.createElement('div');
// containerDiv.className = 'pagination';
// let page = document.querySelector('.page');
// page.appendChild(containerDiv);
// let ul = document.createElement ('ul');
// containerDiv.appendChild(ul);
// let maxPages = Math.ceil(list.length / itemsPerPage);
// for (let i = 0; i < maxPages; i++) {
//   let li = document.createElement('li')
//   let a = document.createElement('a');
//   ul.appendChild(li);
//   li.appendChild(a);
//   a.href="#";
//   a.textContent = i 
// if (i === 0) {
//   a.className = 'active';
// }

// a.addEventListener ('click', (e) => {
//   let allLinks = document.querySelectorAll('a');
//   for (i = 0; i < allLinks.length; i++) {
//     allLinks[i].className = '';
// e.target.className = 'active'
//       }
//     }
//   });
// showPage (list, e.target); 
//  };

//  appendPageLinks (student);





