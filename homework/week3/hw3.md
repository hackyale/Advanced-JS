## Advanced JS: Homework 3

**Estimated time: 120 mins. See the class page for how to submit.**  
**Due Tuesday, Oct. 7 at 2pm**

#### Part 1: Understand!

We covered the basics of Angular today: data-binding and scopes. Those are *really* important concepts, so please make sure you understand them in and out. Spend a little bit of time with the code deleting some things, changing the names of some things and seeing what breaks and what kinds of errors you get. Because there's so much of Angular to cover, I'll assume this knowledge is down pat from next week on. 

#### Part 1 (Bonus!): A Touch of Style

Though some claim the classwork's design made [Jony Ive](http://jonyiveredesignsthings.tumblr.com/) jealous, it would be nice to add a little personal touch. Style the todo list in a separate `style.css` file.

#### Part 2: Undo!

Make it so that when you click "done", instead of the item being crossed out, it removes the item completely from the list (and the DOM). Then make it so that there's an undo button that, when clicked, returns the last item back into the list. Hint: `ng-if`.  

Can you make it so that you can click the button multiple times and multiple items come back, in the order that they were checked off? Hint: you'll need an array to keep track of which ones left in what order. 

#### Part 2 (Bonus): Command-Z!

Make it so the undo action also works when you press command-(or control-)Z. For this, you want to bind to the keypress event on the Angular-provided `$window` module.  
**Note**: because Command-z is already bound to something in Chrome, you may have to invent your own key combo (i.e. Command-Shift-Z, etc.). **I've gotten this started in the template**. 

#### Part 3: Angular UI

The best addons for Angular are on a website called Angular UI (http://angular-ui.github.io/). My favorites are UI Router (which we'll cover next class), and [UI Bootstrap](http://angular-ui.github.io/bootstrap/), which are all the Bootstrap components, but implemented in Angular. We won't have time to cover those, so use them to improve your todo list.  
Some ideas:

- Add a 'due date' with a date/time picker
- Get an alert to show when you've checked off a task, with a link to undo (this is tough because of scopes—you'll have to use events!)
- Show a progressbar that's the percentage of tasks completed
