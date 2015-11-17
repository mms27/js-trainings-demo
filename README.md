# Homework 1:

## Goals:
 - Learn to implement trivial web forms, purpose of form elements' `name` attribute
 - Get introduced to native form elements - text inputs, checkboxes, radio buttons, selects, labels etc.
 - Acquire basic knowledge on how to trace network requests
 - Learn how to link CSS files to document and apply CSS rules to HTML element

## Set up:
 - Install Python (https://www.python.org/downloads/windows/)
 - Create sandbox project
 - Launch `python -m http.server` from the project root to set up static server
 - Create index.html in your project root using following snippet:

```<!DOCTYPE html>
<html>
<head>
    <title><!-- the title of your page goes here --></title>
    <!-- often, css and javascript files are linked here via <link> and <script> html elements -->
</head>
<body>
    <!-- the content of your page goes here -->
</body>
</html>```

5) Go to `http://localhost:8000` or `http://localhost:8000/index.html` to check if everything works fine

## Task 1: Create HTML document
- Create registration.html in project root, as a sibling of index.html
- Create registration-complete.html in project root, with content `<h1>Registration complete!</h1>`
- Set page titles for both index.html and registration.html pages
- Add reference to registration.html on index.html (e.g. `<a href="/registration.html">Register!</a>`)

## Task 2: Create registration form:
- On registration page, create html form with fields:
-- login (type=text, name=account_login)
-- password (type=password, name=account_password)
-- email (type=email, name=account_email)
-- subscribe for email notifications (type=checkbox, name=send_notifications)
-- account type - "Trial" or "Prepaid" (type=radio, name=account_type)
-- country (`<select>` with two or three countries, name=account_country)

- Add `<label>` element to each one of these fields (e.g. `<label for="login">Login:</label><input type="text" id="login" name="account_login">`). After adding label for input, try to click on one and see what happens.

- Make form submittable to URL '/registration-complete.html' via 'POST' method
- Submit form for few times with different data and check if FormData sent is contains object of such kind:
    account_login=john_snow
    account_password=qwerty
    account_email=j.snow@winterfell.com
    send_notifications=true|false
    account_type=trial|prepaid
    country=US|DE|UA

-- Hint: To find out, which data has been sent to server, open Chrome Dev Tools (F12) -> Network -> set "Preserve log" to true and then submit your form

-- Hint: To submit form, use `<input type="submit" value="%SUBMIT_BUTTON_CONTENT%">` or `<button type="submit">%SUBMIT_BUTTON_CONTENT%</button>`

-- Hint: Remember, that TEXT inputs have `placeholder` attribute - consider using it when there is no space for <label>

-- Hint: Apparently, POST requests are not supported by static server we're using. Try to use GET and see what happens. Think why ;)

## Task 3: Stylize registration form:
- In project root, create 'css' forder, then create styles.css inside
- Link this file to your registration.html via `<link>` HTML element (e.g. `<link rel="stylesheet" type="text/css" href="/css/styles.css">`)
- Change font-family and font-size of labels to Arial and 12px respectively
- Stylize login and password labels to be bold (there are few ways to do it, with or without CSS)

### Follow-up questions:
- What is the purpose of `for` attribute in `<label>` HTML element
- Why do radio buttons share the same `name` attribute

# Homework 2

## Goals:
- Learn to acquire access to DOM elements from JavaScript
- Learn to style elements via JavaScript
- Learn to show/hide elements via JavaScript and CSS
- Learn to set event listeners on elements

## Setup *(optional)*:
In order, to acquire more experience with JavaScript and it's common infrastructure, we will use NodeJS static server, rather than python one.
- First, we need to install NodeJS from here https://nodejs.org/en/
- Once NodeJS is installed, both `node` and `npm` (node package manager) commands are available in your command line
- In order to install static server, we need to install `http-server` package globally: `npm install -g http-server` from command line (note, it is just npm open-source package https://www.npmjs.com/package/http-server)
- Once `http-server` is installed, go to project root and execute `http-server` from command line
- Then go to http://localhost:8080 and see server logs appear in your command line.

### Note:
There is almost no difference between using node or python static servers: their purpose is the same - to serve static files and to throw 404 if file has not been found.

## *(optional)* Task 0: Stylize registration form
- Wrap form elements into separate containers
- Stylize these containers with top margins (make sure that first element does not have top margin)

## Task 1: Create star image for users with prepaid account
- Create `img` directory if project root
- To do that, download star image and save it to `img` directory
- Using `<img>` and it's `src` attribute, place image near `prepaid` account button
- Refresh the page, you should see the image near `prepaid` account button (if you see empty icon there, it means that `src` attribute is incorrect)
- *(optional)* Stylize your image to fit better - e.g. via `width` or `height` CSS properties

## Task 2: Link JavaScript file to document
- Create app.js file in `js` directory
- As the last child of `body` tag (to make sure that elements we are going to work with have already been parsed and rendered), add `<script src="/js/app.js"></script>`

## Task 3: Show/hide (toggle) star image
In order to show or hide our image, we should get access to it's JavaScript entity.
This can be done in many different ways - `document.getElementById`, `document.getElementsByClassName`, `document.querySelector` etc.
```javascript
var starImage = document.getElementById('prepaid-star');
```

Once we have access to the `<img>` node, use it's img.style.display property to show/hide it:
```javascript
starImage.style.display = 'none'; // will hide element, sets CSS property `display` to `none`
starImage.style.display = 'inline'; // will show element, sets `display` to `inline` (<img> tag is inline by default)
starImage.style.display = 'block'; // will show as well, but sets `display` to `block` (note, that in this case, image becomes block element and takes whole width of document available)
```

## Task 4: Toggle star image when account type is initially preselected to `prepaid`
- Preselect 'prepaid' radio button in HTML document (use HTML attribute `checked`)
- Get access to prepaid radio button (via `document.getElementById` or whatever)
- Show star if radio button's `checked` property is set to `true`, hide otherwise
```javascript
var prepaidAccountRadioButton = document.getElementById('account_prepaid');

if (prepaidAccountRadioButton.checked === true) {
    starImage.style.display = 'inline';
} else {
    starImage.style.display = 'none';
}

// or, more pretty one
// starImage.style.display = prepaidAccountRadioButton.checked ? 'inline' : 'none';
```

## Task 5: Watch for changes on both prepaid and trial account radio buttons and toggle star image when one or another changes
In order to watch for changes of HTML element, we need to utilize HTMLElement#addEventListener method
```javascript
// here we call #addEventListener with two parameters - name of expected event, and function to be called when event is triggered
// keep in mind, that 'change' event is usually triggerred by form elements - e.g. <input>, <textarea>, <select> etc.
prepaidAccountRadioButton.addEventListener('change', toggleStarImage);

//we need to get access to second radio button and watch for it's changes as well
var trialAccountRadioButton = document.getElementById('account_trial');
trialAccountRadioButton.addEventListener('change', toggleStarImage);

function toggleStarImage() {
    if (prepaidAccountRadioButton.checked === true) {
        starImage.style.display = 'inline';
    } else {
        starImage.style.display = 'none';
    }
}
```
Once this code is executed, `toggleStarImage` function will be called on every change of prepaid radio button and star image will be toggled as well

### Notes:
- since the code that toggles image based on radio button `checked` property should be executed both initially and on radio button change, there is much sense to store it to separate function - we named it `toggleStarImage`.
So, in final code, it will be mentioned twice - we call it initially and when radio button has changed
- properties of html element's `style` property are named via camelCase convention, but when writing in CSS file, dashed naming is used)
```javascript
someInput.style.textAlign = 'center';
```
```css
#someInput {
    text-align: center;
}
```
- we now know, that JavaScript entities that respresent HTML elements have `style` property that refers to CSS properties. Use `console.log(starImage.style)` to see full list of CSS properties available

### Follow-up questions
- Think, why do we have to watch for both trial and prepaid radio buttons, while we only check prepaid's state
- What are the other available events to be used with HTMLElement#addEventListener method?
- In order to toggle our star image, we used `display` CSS property - is there another way to show/hide element?
