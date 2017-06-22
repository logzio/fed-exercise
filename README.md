Logz.io FED Interview Exercise  
==  

The main idea of this exercise is to create a website comments component.  
A mockup is ready as a reference to the style (in the file mockup.png inside the repo), and a basic server API is at your service,
so you should have all you need to start.  

**The minimum requirements are as follows :**  
* Design the comments component like the mockup.  
* Add the 'submit' functionality - A user will enter an email and message, and the comment will be added to the list below. The list should be ordered by date.  
* A gravatar will be added to the 'comment' object created (get the matching gravatar from: https://en.gravatar.com/)
* When a user enters text in the filter input, it will filter the comments accordingly.
* Add server side validation to the submitted comment.  
* No need to use any kind of db or persistency.  
* Do not use any UI/CSS framework (i.e.: bootstrap)  
* Do not send the `node_modules` directory back, and do not commit it. It is not needed (and you shouldn't have any changes there anyway).


**Additional Notes :**  
* Use an MVC framework of choice - AngularJS, Backbone, Ember, etc.  
* Make sure all code is clean and testable, as you would commit it to production.  
* You can use other known js libraries as you see fit.  
* You should work on this exercise ~2-3 hours, not more. I assume you won't complete everything in this time frame, and that's ok - The idea is to see some code you worked on, and not to have a perfect working project that's production ready. (Perfect is the enemy of good)  

**For Bonus Points :**  
* Design a responsive layout.  
* Add unit tests.  
* Save the newly added comments on the client, so they will be saved when refreshing the page.  


**How to use the code :**  
1. Clone the repo.  
2. Run `npm install` (to download all relevant dependencies)  
3. Run `npm start` (to start the server)  
4. Open your browser and go to 'http://localhost:3000'
