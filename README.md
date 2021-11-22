# Project 01 - Quiz CRUD App (ver 3.0.0)

 [Live](https://lucaswgong.com/portfolio/03/) <- Click

 - Developed an online quiz app using `React/Redux` on the client-side and provided `RESTful API` on the server-side.
 - Built the React/Redux using `Axios` to send HTTP requests, `React Router` for routing, and `Hooks API` to handle states.
 - Built CRUD API server for quiz and user data using `Node.js` and `Express.js`, and database using `MongoDB`.
 - Built authentication function.
 - Deployed via GlowHost using `cPanel`.
 
 ## Skills used : React/Redux, Node.js, Express.js, mongoDB, Material-UI
 
 
 ## Issues Solved
|Issues | Solution|
|:--|:--|
|Little Slow initiation | Changed the data retrieving structure, and used Axios instead of XMLHttpRequest|
|Worse UX (3 Pages) | Used React and React Router (SPA)|
|Wrong address hosting on router | added 'basename' prop on 'BrowserRouter' |
|'refresh' cannot find a proper page, 404 error | added .htaccess file with redirect option (Apache Server) |
|Can't cover various screen sizes and resolutions | Implement more detailed responsible design |
|Difficult to collect & deliver data to the upper component | Applied Redux|

 ## History

### 1. Ver 1.0.0 - Sep 2021
#### (1) Skills used
`JavaScript`, `Node.js`, `MySQL`, `Bootstrap`

#### (2) Feature
 - Users are able to read/create/edit/delete a quiz, solve the quiz, and get score
 - Provide REST API, Node.js server and MySQL Database

#### (3) Issues
 - No Authentification function
 - Not intuitive interface
 - Little slow page transition

### 2. Ver 2.0.0 - Oct 2021
#### (1) Skills used
`JavaScript`, `Node.js`, `Express.js`, `Passport.js`, `MySQL`, `Material-UI`

#### (2) Feature
 - Added Login/Logout function with `Passsport.js`
 - Created top and side navigation bars with `React-Router` and `Material-UI`

#### (3) Issues
 - Slow initial loading
 - Complexity to manipulate/debug database
 - Difficulty to manage data among components in the client-side

