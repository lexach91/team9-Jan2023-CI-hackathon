# MOOVERS
​
## Team Name: The Moovers
​
The website can be accessed by this [link](https://lexach91.github.io/team9-Jan2023-CI-hackathon/)
​
## Contents(#contents)
​
* [User Experience (UX)](#user-experience)
  * [User Stories](#user-stories)
* [Technology](#technology)
* [Design](#design)
  * [Color Scheme](#color-scheme)
  * [Typography](#typography)
  * [Imagery](#imagery)
  * [Wireframes](#wireframes)
* [Deployment & Usage](#deployment)
* [Testing](#testing)
* [Credits](#credits)
  * [Code](#code)
  * [Content](#content)
  * [Media](#media)
  * [Acknowledgements](#acknowledgements)
​
## User Experience
MOOVERS is a site dedicated to those of us who love travelling, but for less! With everything going on in the world, 2023 is going to be a tough financial year... but with our application, you will still be able to go on holiday, save money, and have fun!

The site has an ideal user - someone who loves to travel for the cheapest prices. With this in mind, everthing on the site is catered primarily towards that kind of user.
The search function is straight-forward with only three options to choose from and the results section gives a link to the flight information.
​
### User Stories
I expect a user's story to be something like the following. A friend told this user about the website and started having a look on their phone.
The first thing they see is the hero image and then the call-to-action button reading "search flights".
Upon clicking on that, the site scrolls down to the next section, allowing the user to type in their home airport.
This user, living in London, types in LHR for London Heathrow. They then fill out their currency as GBP with a budget of £200.
The first result(and so, cheapest holiday) is MAD for Madrid but this user has already recently been, so is more interested in the second result...
KRK - Krakow, Poland. The user has never been before so they can click on the flight information button below the price and find out more.

In an idea scenario, the user would be able to use the link to book the flight directly but we found we could not do this with free APIs.
​
## Technology:
​
### Languages
- [HTML5](https://en.wikipedia.org/wiki/HTML5) - Latest version of HTML. Allows us to put content on the page.
- [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets) - Latest version of CSS. Allows for custom styling.
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript) - Used to manage APIs, code the search box, mobile menu, and a modal.
- [jQuery](https://jquery.com/) - Used for better use of selectors in the api.js file and to simplify DOM manipulation.
​
### Tools
- [TailwindCSS](https://tailwindcss.com/) - Allows for fast inline styling in HTML.
- [Jest](https://jestjs.io/) - Used to test the site.
​
## Initial MVP idea:
​
As a team we had a call on Slack to decide on the scope of the project. We decided that we wanted to have a static page with anchors to make it simple to use.
We would have a navigation bar with the site logo and anchors, landing image with a call to action button, search flights section, about section, reviews, and the footer.
The basic concept would be that we would provide the user with the cheapest flights based on the information they provided to us.
Initially it was up in the air as to what information we would request because it would depend on what we could do with the APIs we could find...
but the most important would be where they are flying from.
The initial scope concluded with the user being able to click on a link to an external site and book their holiday.
​
### Actual idea & content:
​
The final product is very close in comparison to the initial scope. The one limitation we had was due to the use of free APIs which did not provide enough information
for us to create the link for the user to book their holiday.

In addition, the ID provided by the free API is not unique, and so the user will be shown information about the earliest flight with the same ID.
This is not ideal and we could have perhaps changed the concept but by the time we realized, the project was coming to a close and so it was too late to change.
​
- Navigation Bar
	- This is a fully responsive navigation bar which includes the logo and anchors to the site's "Home", "Search Flights", "About Us", and "Reviews" sections.
	- The "How it Works" item will create a popup on on your screen providing information on how exactly the site works.
	- Users will be able to use these anchors to navigate to any section on the site.

- Hero Image
	- This includes an emotive image with enticing text: "Helping you moove on a budget".
	- A call-to-action button is also featured as an anchor to the "Holiday Search" section.
	- The image also changes between 3 different images.

- Holiday Search Section
	- This section initially takes up the full width of the page. Once the user's home airport is selected, this section changes.
	- This section is now split into two parts.
	- The left hand side will take up 1/3rd of the screen. It will still display the user's home airport but also expand in height to show inputs for currency and budget.
	- Once entered, the user will be able to click on the "Search" button.
	- The right hand side (which takes up 2/3rds of the width of the screen) will then display the results.

- About Us
	- This section tells the user a little bit about the purpose of the website.
	- The styling of both the title of the section (whoo we are) and the background are a play on the website's theme and reiterate the playfulness fo the site.
	- This section also talks a bit about who the site's ideal user is.

- Review Section
	- This section is split into three parts. Left, middle and right sections each feature a different review.
	- On smaller sized screens only two are featured, and on even smaller screens, two are featured with one appearing on top of the other.
	- On hover, the reviews pop out a little bit with the site's signature pink shadow, giving interactability to the user.

- Footer
	- This section features working github links for all team members
	- Also features the site's logo at the bottom.
​
## Design
​
### Color Scheme:
Keeping in congruent with the "cow" theme, we decided to go for a black and white theme with scattered hints of pink alluding to a cow's nose.
​
### Typography:
Happy with Tailwind CSS typography styles.
​
### Imagery:
Being a travel website, we primarily used emotive imagery of beautiful landscapes - all places our user could end up visiting.
​
### Wireframes:
​
Please refer to [moovers-wireframes.pdf](documentation/wireframes/moovers-wireframes.pdf)
​
## Deployment
The Website was deployed to GitHub pages.

The steps to deploy:

Open the Website's GitHub repository
Click on the "settings" tab in the upper right corner
In the left sidebar menu, click on the "Pages" button
Choose the branch that needs to be deployed
Click the "save" button


To clone the repository to your local machine copy the command bellow and paste it to your terminal:

`git clone https://github.com/lexach91/team9-Jan2023-CI-hackathon.git`

To open the repository in Gitpod:

If you have Gitpod extension installed in your browser, press the green button which reads GitPod.

If you don't have Gitpod extension installed in your browser, click this link: https://gitpod.io/#https://github.com/lexach91/team9-Jan2023-CI-hackathon
​
## Testing

Please refer to the [TESTING.md](TESTING.md) file for details on testing.
​
## Credits
​
### Code
All code is original.
​
### APIs
API used to get flight data: https://rapidapi.com/Travelpayouts/api/flight-data/
API used to get airport by city: https://developers.amadeus.com/

### Content
All content is original.
​
### Media
The images were sourced from pexels.com
The about background was sourced from vectorstock.com
The icon was created by sourcing an image from clker.com
​
### Acknowledgements
Thanks to http://www.flightstats.com/ for providing flight information.