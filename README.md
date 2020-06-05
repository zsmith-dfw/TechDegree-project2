# TechDegree project2
List Pagination and Filtering 

This is my second project in the Techdegree for FSJS web development. Written in vanilla Javascript, this program utilizes DOM selection, manipulation, and creation to bring a pagination environment to this program. In this case, the purpose of pagination is  to dynamically create links so users can quickly find the items they need without very much scrolling.

 In this particular program, a list of students is imported into the program and 10 are shown on each page. Users can then click on the page numbers shown at the bottom to traverse to the desired page, in which the link will remain highlighted so the user always knows what page they're on. 
 
 This program is designed for modularity and can be tailored to a users needs. To change the amount of items on a page, a user would just need to change following variable:

 const itemsPerPage = 10
 
The number 10 can then be changed to a desired number. NOTE: If the itemsPerPage variable is not set as a multiple of the entire list, then the last page will of course not equal the itemsPerPage. This will not impact the functionality of the program. 

 The index.html document contains a list of all items in the program. Again, this program is desined to accomodate lists of varying length, so further additions or subtractions to this list will not impact the functionality of the program. 

 A future release of this program will implement search bar functionality to allow users to find the desired item even quicker. This will be more practical with lists of hundreds or thousands of items. 

 I would like to credit the following members of the Treehouse slack community for their motivation and guidance. This project would not be possible without their assistance: Scott Adams, Agata Zurek, Kalen Honeyfield, Nate Jaeger-Smith, and Christopher Aiden Kim. 