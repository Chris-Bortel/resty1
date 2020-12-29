# Full React Application

**Contributors**: Sarah Shatto, Chris Bortel

**Version**: 0.0.0

 # LAB 26: PHASE 1 
 [Pull Request](https://github.com/jonnyleealas/component-based-api/pull/3)
 [Class-27 Pull Request](https://github.com/Chris-Bortel/resty1/pull/1)
 [Class-28 Pull Request](https://github.com/Chris-Bortel/resty1/pull/2)

## Summary: 
```
  - Basic React Application
  - Scaffolding
  - Basic State
  - Rendering
```
#

```
- As a user, I expect an easy to read and understand user interface so that I can use the application intuitively
- As a user, I want to enter the URL to a REST API and select the REST method to use to access it
- As a user, I want visual confirmation that my entries and selections are valid so that I have confidence the application will be able to fetch the API data that I’ve requested
```
#

## Technical Requirements / Notes
Create the RESTy application as follows:

- Begin with creating your application using create-react-app
- Write an App component that serves as the container for all sub-components of this application
```
The app should import an .scss file to serve as the base design for the site
Import and render Header, Footer, and Form components from other files using ES6 import syntax
```
- The <Header> component should use it’s own .scss file for styling
- The <Footer> component should use it’s own .scss file for styling
- The <Form> component should:
```
- Use it’s own .scss file for styling
- Accept user input for a URL and store it in state
- Allow the user to choose a method and store it in state
- This can be done with radio buttons or clickable elements
- Display the user’s choices on screen in a separate <div> or <section> under the form
```
## Auth-server API
- https://auth-server-cb.herokuapp.com/
{"description":"car", "name":"chris"}

## UML 
[Class-26 UML](./assets/lab26uml.png)
[Class-26 UML](./assets/lab27uml.png)

## Code Sand Box
[Phase 1](https://codesandbox.io/s/boring-ride-v3cp9?file=/src/styles.scss)