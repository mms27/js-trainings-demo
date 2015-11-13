# Homework 1:

## Goals:
 - Learn to implement trivial web forms, purpose of form elements' `name` attribute
 - Get introduced to native form elements - text inputs, checkboxes, radio buttons, selects, labels etc.
 - Acquire basic knowledge on how to trace network requests
 - Learn how to link CSS files to document and apply CSS rules to HTML element

## Set up:
 - Install Python (https://www.python.org/downloads/windows/)
 - Create sandbox project
 - Launch python -m http.server from the project root to set up static server
 - Create index.html in your project root using following snippet:
    <!DOCTYPE html>
        <html>
        <head>
            <title>/* the title of your page goes here */</title>
            /* often, css and javascript files are linked here via <link> and <script></script> html elements */
        </head>
        <body>
            /* the content of your page goes here */
        </body>
        </html>

5) Go to http://localhost:8000 or http://localhost:8000/index.html to check if everything works fine

## Task 1: Create HTML document
- Create registration.html in project root, as a sibling of index.html
- Create registration-complete.html in project root, with content <h1>Registration complete!</h1>
- Set page titles for both index.html and registration.html pages
- Add reference to registration.html on index.html (e.g. <a href="/registration.html">Register!</a>)

## Task 2: Create registration form:
- On registration page, create html form with fields:
-- login (type=text, name=account_login)
-- password (type=password, name=account_password)
-- email (type=email, name=account_email)
-- subscribe for email notifications (type=checkbox, name=send_notifications)
-- account type - "Trial" or "Prepaid" (type=radio, name=account_type)
-- country (<select> with two or three countries, name=account_country)

- Add <label> element to each one of these fields (e.g. <label for="login">Login:</label><input type="text" id="login" name="account_login">). After adding label for input, try to click on one and see what happens.

- Make form submittable to URL '/registration-complete.html' via 'POST' method
- Submit form for few times with different data and check if FormData sent is contains object of such kind:
    account_login=john_snow
    account_password=qwerty
    account_email=j.snow@winterfell.com
    send_notifications=true|false
    account_type=trial|prepaid
    country=US|DE|UA

-- Hint: To find out, which data has been sent to server, open Chrome Dev Tools (F12) -> Network -> set "Preserve log" to true and then submit your form

-- Hint: To submit form, use <input type="submit" value="%SUBMIT_BUTTON_CONTENT%"> or <button type="submit">%SUBMIT_BUTTON_CONTENT%</button>

-- Hint: Remember, that TEXT inputs have `placeholder` attribute - consider using it when there is no space for <label>

-- Hint: Apparently, POST requests are not supported by static server we're using. Try to use GET and see what happens. Think why ;)

## Task 3: Stylize registration form:
- In project root, create 'css' forder, then create styles.css inside
- Link this file to your registration.html via <link> HTML element (e.g. <link rel="stylesheet" type="text/css" href="/css/styles.css">)
- Change font-family and font-size of labels to Arial and 12px respectively
- Stylize login and password labels to be bold (there are few ways to do it, with or without CSS)

### Follow-up questions:
- What is the purpose of `for` attribute in <label> HTML element
- Why do radio buttons share the same `name` attribute