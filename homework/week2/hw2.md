## Advanced JS: Homework 2

**Estimated time: 120 mins. See the class page for how to submit.**  
**Due Tuesday, Sep. 30 at 2pm**

#### Part 1: Refresh refresher

**Code template in `week2` folder**  
If you didn't finish last week's homework, finish it. Then implement the refresh button with a jQuery `click` hander (see code template).

#### Part 2: Objectify me

**Code template in `week2` folder**  
Create an object that represents you. It should have the following properties:

- `fname`, `lname`, `favoriteCereal`
- `interests`, which maps to an array of strings
  - `interests: ['hiking', 'coding', 'hiking and coding simultaneously']`

And the following functions:

- `fullname`, which prints out first name and last name separated by a space.
  - This function should  use the `this` keyword
- `miniBio`, which prints out a sentence that looks like `My name is <fullname>. My favorite cereal is <favoriteCereal>. In my free time, I like to do <each of my interests>`
  - The `miniBio` function should use the function `fullName`, as well as the `this` keyword.

#### Part 3: My shadow

**Code template in `week2` folder**  
Write code that makes something follow your mouse around (an image, some text, a blue box, an `<svg>` element—it could be anything!).

#### Part 3 (Bonus)!: My lazy shadow

Give your item a drag, so that it looks lazy: instead of following your mouse around immediately, have it wait some amount of time (maybe ~300ms).

#### Part 4: Me online!

**Code template in `week2` folder**  
Play around with [Facebook Graph API](https://developers.facebook.com/tools/explorer/). It's not obvious from that page, but to make a request, you have to send a GET request to `https://graph.facebook.com`. The request must have an access token, which is provided for you at the top of the "Graph API Explorer" page linked to above. It should look something like:  

    CAACEdEose0cBAK0ILXnxSN8TSvCqvKtFroh7vzMzB7tZBL00z9hneo0g1AusC1NkUtVnBo8pW51GdKn26YoNFqtLeuBc849SusuUzxZCxyDvB2gjFI2iZCmpeYngbvajE610H7R8buek4ZBBLynQ2ARPiHndjQrfLCBnhyqZAAtuJp7L0ubaijFkgyg7p1GH9h8UA68Kj1ZBXVaCQ1p0xC

Thus, to get data, you would send a request to (make sure to use HTTPS)

    https://graph.facebook.com/me?access_token=CAACEdEose0cBAK0ILXnxSN8TSvCqvKtFroh7vzMzB7tZBL00z9hneo0g1AusC1NkUtVnBo8pW51GdKn26YoNFqtLeuBc849SusuUzxZCxyDvB2gjFI2iZCmpeYngbvajE610H7R8buek4ZBBLynQ2ARPiHndjQrfLCBnhyqZAAtuJp7L0ubaijFkgyg7p1GH9h8UA68Kj1ZBXVaCQ1p0xC.  

If you don't know the `?x=y` syntax in the url (in this case `access_token=CAAC...`, read up on URL query parameters [on Wikipedia](http://en.wikipedia.org/wiki/Query_string). You can use multiple query string parameters to get different data: `https://graph.facebook.com/me?fields=profile,picture&access_token=...`. To specify what data you want to send, you can use the `data` key in the object you pass to the `$.ajax` function call (see the code template if this is unclear).

#### Part 4 (Bonus!): Profile pictures galore

Use the Facebook API to get a link to your own Facebook picture, and show it on the screen. Then create an input that takes a userID, and, when the user clicks a button, goes and gets that user's profile picture and shows it on the screen. A userID is what shows up after `facebook.com` when you go to someone's profile page. For example, my Facebook profile URL is `facebook.com/rafi.faiaz.khan`, so my UserID is `rafi.faiaz.khan`. 

#### Part 4 (Big bonus!): Complete control

Use the Graph API explorer to create an access token that allows you to post to
your own newsfeed. Then create a UI that lets you type in a message, and post 
it to your newsfeed! You probably also want to add functionality to delete
posts as well ;)

#### Part 5 (Bonus!): Play time

Do something cool with one of the libraries in the slides:

- Bootstrap
- Parallax
- jQuery mobile
- Anything else you find online
