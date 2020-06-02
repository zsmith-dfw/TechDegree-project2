


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/
const student = document.querySelectorAll('.student-list li'); // this will store the student list item elements in student list
const itemsPerPage = 10; // this will store the number of items on a page



/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/
// hides all items except ones we want to show 
const showPage = (list, page) => { 
   const startIndex = (page * itemsPerPage) - itemsPerPage;
   const endIndex = (page * itemsPerPage);
   for (let i = 0; i < list.length; i ++) {
     if (i >= startIndex && i <= endIndex) {
      list[i].style.display = 'block';
    } else { list[i].style.display = 'none';
  }
       
     }
   }

   showPage(list, 1)
  //  const appendPageLinks = (list) => {
     
  //  }

   
