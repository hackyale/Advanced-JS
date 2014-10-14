## Advanced JS: Homework 4

**Estimated time: 60 mins. See the class page for how to submit.**  
**Due Tuesday, Oct. 13 at 2pm**


## Coding Challenge: Click game

*See files in the `homework/week4` folder for a starting template*  

#### Part 1: 

Using the app structure we learned today, put a blue square on your home page. Using `setInterval`, make it so that the box appears at a random coordinate on the screen every second. (Is there an Angular version of `setInterval`?).

#### Part 2:

Add a timer that shows the seconds elapsed since the page was loaded, using `setInterval` and `$scope.$apply()` (or Angular's version of `setInterval`). Show `secondsElapsed` on the page.

#### Part 3:

Make it so:

- If you can click the box, you get a point
- When you get 10 points, redirect to the `winner` page
  - Hint: use $state.go() to go to another page from a controller
- Can you get the points and time elapsed to also show up on the winner page?

#### Part 4 (Bonus):

Make it so the box gets smaller, or moves more frequently (or both) each time you get a point.