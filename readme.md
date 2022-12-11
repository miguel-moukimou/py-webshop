<h1 align="center">PY WEBSHOP</h1>

[View the live project here.](https://centi-shop.herokuapp.com/)

The goal of this web application is to provide a virtual webshop to the users. It is there by possible to create an account, to login and to add products to a shopping cart.



## User Experience (UX)

-   ### User stories

    -   #### Visitor Goals

        1. As Visitor, I want to be able to see the products, price and ranking on the webshop
        2. As Visitor, I want to be able to click on a product on the webshop to get more details about it
        3. As Visitor, I want to be able to add products to my shopping cart
        4. As Visitor, I want to be able to visit my shopping cart to see the list of products I have selected
        5. As Visitor, I want to be able to login or create an account in order to checkout my shopping cart
        6. As logged in user I would like to see my name on the top of the page
        7. As logged in user, I want to be able to see the products, price and ranking on the webshop
        8. As logged in user, I want to be able to click on a product on the webshop to get more details about it
        9. As logged in user, I want to be able to add products to my shopping cart
        10. As logged in user, I want to be able to visit my shopping cart to see the list of products I have selected
        11. As logged in user, I want to be able to view my profile page and to edit it




-   ### Design
    -   #### Colour Scheme
        -   The two main colours used are white, and grey.

## Features

-   Interactive elements

-   Content management capabilities

-   Login and user registration forms


## Technologies Used

### Languages Used

-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
-   [PYTHON](https://www.python.org/)
-   [DJANGO](https://www.djangoproject.com/)
-   [REACT-BOOTSTRAP](https://react-bootstrap.github.io/getting-started/introduction/)
-   [REACTJS](https://reactjs.org/)

### Frameworks, Libraries & Programs Used

1. [Git](https://git-scm.com/)
    - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
1. [GitHub:](https://github.com/)
    - GitHub is used to store the projects code after being pushed from Git.
1. [Heroku:](https://www.heroku.com)
    - Heroku is a platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud.
1. [REDUX:](https://redux.js.org/)
    - A Predictable State Container for JS Apps

## Testing

The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project.

-   [W3C Markup Validator](https://validator.w3.org/#validate_by_input) - [Results] No errors were found
-   [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) - [Results] No errors were found
-   [PYTHON](https://extendsclass.com/python-tester.html) - [Results] No errors were found

### Testing User Stories from User Experience (UX) Section

-   #### Visitor Goals

    1. As Visitor, I want to be able to see the products, price and ranking on the webshop

        1. Upon entering the site, there is a page. The page contains a list of products, image, price and rating
    
    2. As Visitor, I want to be able to click on a product on the webshop to get more details about it

        1. On the homepage, just click on one of the products, on the products details page you can click on go back to go to the homepage

    3. As Visitor, I want to be able to add products to my shopping cart

        1. On the products details page click on the ADD TO CART button to get a product added to your shopping cart
    
    4. As Visitor, I want to be able to visit my shopping cart to see the list of products I have selected
        1. On the top bar, just click on the CART menu item to see the products in your shopping cart

    5. As Visitor, I want to be able to login or create an account in order to checkout my shopping cart
        1. On the top bar, just click on the LOGIN menu item to see the login form or go to the user registration form
    6. As logged in user I would like to see my name on the top of the page
        1. On the top bar, your name will appear as a menu item, after a successful login request
    7. As logged in user, I want to be able to view my profile page and to edit it
        1 After logging in, click on your name on the top menu bar, then click on profile to view your profile page and edit it

    

    

### Further Testing

-   The Website was tested on Google Chrome, Microsoft Edge and Safari browsers.
-   The website was viewed on a variety of devices such as Desktop, Laptop, iPhone7, iPhone 8 & iPhoneX.
-   A large amount of testing was done to ensure that all pages were linking correctly.
-   Friends and family members were asked to review the site and documentation to point out any bugs and/or user experience issues.

### Known Bugs

-  A 404 error is thrown after logging out
-  Images are getting lost after a while because we do not have an object store on Heroku

## Deployment

### Heroku

The project was deployed to Heroku using the following steps...

1. The git repository is imported directly from heroku
2. A procfile was created to explain heroku how to process the repository files
3. A runtime file was created to tell heroky which version of python should be used
4. Heroku cli was used to run database migration scripts

### Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/miguel-moukimou/miguel-moukimou.github.io)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/miguel-moukimou/war-facts-quiz)
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
```

7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

Click [Here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) to retrieve pictures for some of the buttons and more detailed explanations of the above process.

## Credits

### Code


-   [MDN Web Docs](https://developer.mozilla.org/) : For Pattern Validation code. Code was modified to better fit my needs and to match an Irish phone number layout to ensure correct validation. Tutorial Found [Here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/tel#Pattern_validation)

### Content

-   All content was written by the developer.

### Media

### Acknowledgements

-   My Mentor for continuous helpful feedback.

-   Tutor support at Code Institute for their support.