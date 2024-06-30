## Course Information Website Project

## Description
This project was designed with React. Methods such as dynamic root protection with the login page were used. Fetch API and Axios structure are used in UseEffect Hook.

## Objective
At the end of the project, following topics are to be covered;
* HTML
* CSS / SASS / SCSS
* JavaScript
* React
* React-Bootstrap / Bootstrap
* React-Deployment
* Routing / React Router Dom

------

Notes For Deployment:
- Packega.json -> "homepage": "https://sakardogukan.github.io/CourseInfoSite",
- in terminal   -> yarn add gh-pages
- Packega.json -> "scripts" ->
    "predeploy": "yarn run build",
    "deploy": "gh-pages -d build"
- in terminal  -> npm i
- in terminal -> yarn run build
-----

### Project Skeleton:

```
    CourseInfoSite (folder)
    |
    |---- public
    |       |---- index.html
    |---- src
    |       |---- compenents
    |       |       |---- About.jsx
    |       |       |---- Courses.jsx
    |       |       |---- Footer.jsx
    |       |       |---- FooterStyle.module.scss
    |       |       |---- Nav.jsx
    |       |       |---- NavStyle.module.scss
    |       |---- img
    |       |       |---- 404.png
    |       |       |---- Spinner-2.gif
    |       |---- pages
    |       |       |---- Aws.jsx
    |       |       |---- Contact.jsx
    |       |       |---- Fullstack.jsx
    |       |       |---- Home.jsx
    |       |       |---- InstructorDetail.jsx
    |       |       |---- Instructors.jsx
    |       |       |---- Login.jsx
    |       |       |---- Login2.jsx
    |       |       |---- Next.jsx
    |       |       |---- NotFound.jsx
    |       |       |---- Path.jsx
    |       |       |---- React.jsx
    |       |---- Router
    |       |       |---- AppRouter.jsx
    |       |       |---- PrivateRouter.jsx
    |       |---- scss
    |       |       |---- _reset.scss
    |       |       |---- _variables.scss
    |       |---- App.js
    |       |---- App.scss
    |       |---- data.js                                   
    |       |---- index.js                                   
    |       |---- project_view.gif
    |---- .gitignore
    |---- package-lock.json
    |---- package.json
    |---- README.md
    |---- yarn.lock
```

### Project View Images:

<img src="./src/project_view.gif" style="width:80%">

> Designed By DOGUKAN © Apr. 2024