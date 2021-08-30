# Harry Potter Quiz

This Harry Potter Quiz is a fun and interactive quiz for all ages and for any occassion. This quiz is designed to test your wizzarding knowledge of the famous Harry Potter Films. Depending on how you well you score will depend on what house you are sorted into. So go head and find out where you belong in hogwarts. 

The live link can be found here - https://charlesb91.github.io/harry-potter-quiz/


![Responsive Mockup](https://github.com/CharlesB91/harry-potter-quiz/blob/master/assets/images/readme-img/hp-screens.PNG)

## Aim

The aim is to test the knowledge of any harry potter fan but answering a series of questions related to the film & book. This quiz is based around all ages for any occassion ie pub quiz or family events. 

### Business Goals

- To ultimely test a users knowledge on the harry potter films & books. 
- To create a fun and interacive experiance for the user whilst informing the user which question they are on and what their current score is.
- User will be asked a series of 5 questions. Depending on the score will depend on what house they are placed into. 

### Client Goals

- This will give the user a true reflection on how well they know the films/books as well as an enjoyable experiance to play with friends and family. 

## Wireframing

- Initially sketched my ideas on to my note pad to try and visualise my idea. When I was happy with this I created a simulation using balsamiq for the wireframe. 
- Below are two sketches of the home screen and quiz screen. 

![Wireframe-Home-Page](https://github.com/CharlesB91/harry-potter-quiz/blob/master/assets/images/readme-img/Wireframe-front-screen.png)

![Wireframe-Question-Page](https://github.com/CharlesB91/harry-potter-quiz/blob/master/assets/images/readme-img/Wireframe-question-screen.png)


## Features

### Splash Screen

### Home Page

- This area has background of the famour hogwarts castle which can be seen on all screen sizes. 

![Home-Screen-Hogwarts](https://github.com/CharlesB91/harry-potter-quiz/blob/master/assets/images/readme-img/home-screen.PNG)


**Harry Potter Text**

- This highly reconsiable text is the exact same font used in the book and in the films. 
- The golden colour compliments the colour used in all the front covers of the books.
- This originally was an image taken from google however with the use of adobe illistrator i was able to trace the image and change the colour to the chosen goldenrod. 

![Harry-Potter-Logo-Text](https://github.com/CharlesB91/harry-potter-quiz/blob/master/assets/images/Harry-Potter-Logo-New.png)


**Start Button & Instructions Button**

- For this area there are two highly distintive buttons to start the game & also for instructions.
- "i solemnly swear that i am up to no good" is a famous quote used in the film/books which is contained in the start button.
- An instruction button is also included her which will open a modal window with info on how to play the game. 
- Finally contrasting colours were chosen were chosen to make these buttons stand out. 

![Start&Instruction-Button](https://github.com/CharlesB91/harry-potter-quiz/blob/master/assets/images/readme-img/font-buttons.PNG)


**Instruction Modal Window**

- This window contains specific instructions on how to play the game 
- Code from W3 schools was used to create this page which is powered by javascript. 

![Modal-Box](https://github.com/CharlesB91/harry-potter-quiz/blob/master/assets/images/readme-img/instruction-tab.PNG)


### Quiz Screen

- This area is the main quiz screen where user will answers a series of 5 quesions to complete the quiz. 
- The background again features the famous hogwarts castle. 

![Quiz-Screen](https://github.com/CharlesB91/harry-potter-quiz/blob/master/assets/images/readme-img/quiz-screen.PNG)

**Nav-Bar**

- This area is only visible on the quiz screen & final page (Sorting Ceremony). 
- This features a home screen & insturction tab which allows for easy navigation and help if the user is unsure how to play. 

![Nav-Bar](https://github.com/CharlesB91/harry-potter-quiz/blob/master/assets/images/readme-img/nav-bar.PNG)

**Score-Board & Question Counter**

- This area shows 2 high contrast boxes which indicate to the user their score and which question they are on. 
- The score counter contains a correct and incorrect counter so the user can keep a track on where they are.
- Additionally this will also inform the user how many questions they are on before they hit the final 5th question. 

![Score-Board-Question-Counter](https://github.com/CharlesB91/harry-potter-quiz/blob/master/assets/images/readme-img/score-board-question-counter.PNG)


**Question Container & Answer Buttons**

- This area which is powered highly with javascript is the main functionaliy of the quiz.
- This features a questions place holder text which will display 5 randonm questions.
- Additionally there is 4 answer buttons which contain 4 possible answers which are pre populated everytime a new question is displayed. 
- Anytime a user selects an answer this will be highlighted as red or green to indicate if its correct or not. This will then be added to the scoreboard and a new question will appear until the user hits 5 questions max. 

![Question Placeholder & Answer Buttons](https://github.com/CharlesB91/harry-potter-quiz/blob/master/assets/images/readme-img/questions-answer-buttons.PNG)

### End Screen (Sorting Ceremony)

- This area will display the users score and will display which house the user will be sorted into depending on score.
- This area background features the famous great hall in hogwarts where the sorting ceremony would be held.
- Additionally there is an accopyning nav bar with play again button if the user wishes to play again.
- Score of 5 - Gryffindor
- Score of 4 - Hufflepuff
- Score of 3 - Ravenclaw
- Score of 2 of below - Slytherin

![End Screen (Sorting Ceremony)](https://github.com/CharlesB91/harry-potter-quiz/blob/master/assets/images/readme-img/end-screen-house-sort.PNG)


## Design

**Colour**

- For this area i focused mainly on 2 colours
- Goldenrod - This compliments the original colour of the Harry Potter text in the front cover of the books.
- Black - This helps create a contrast between the goldenrod. 

**Font-Style**

- The particular font style "STIX Two Text" has been used as i feel this also compliments the font used in the Harry Potter Books.


## Features Left to Implement

- Additional features left which would improve the sits cabibplities would be to have functionallity for the user to enter their username. 
- Finally an area where the user could save their scores and have a scoreboard with highest scores for different users using a remote storage solution. 

## Testing

### Responsive Testing

- This page has been through extensive testing via google chrome developer tools so that any user using desktop, tablet, mobile device will have a great experience seeing all the visual and text content but also easily navigate through the site.
- Additionally site has also been tested on (https://responsivedesignchecker.com/) for responsive behaviours.

### Validator Testing

- HTML
  - No errors were returned when passing through the official [W3C validator].
- Home Page - (https://validator.w3.org/nu/?doc=https%3A%2F%2Fcharlesb91.github.io%2Fharry-potter-quiz%2F)
- Game Page - (https://validator.w3.org/nu/?doc=https%3A%2F%2Fcharlesb91.github.io%2Fharry-potter-quiz%2Fgame.html)
- End Page - (https://validator.w3.org/nu/?doc=https%3A%2F%2Fcharlesb91.github.io%2Fharry-potter-quiz%2Fgameover.html)
- The only warning displayed for each page are due to empty headings as these are being manipulated with javascript

- CSS
  - No errors were returned when passing through the official [W3C validator].
- Home Page - (http://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fcharlesb91.github.io%2Fharry-potter-quiz%2Findex.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
- Game Page - (http://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fcharlesb91.github.io%2Fharry-potter-quiz%2Fgame.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
- End Page - (http://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fcharlesb91.github.io%2Fharry-potter-quiz%2Fgameover.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

- JSHINT
  - No errors were returned when passing through the jshint for each JS script. 

### Accessibility Testing

- Googlelight house returned a score of 100 for each page.

**index.html**
![index.html-lighthouse](https://github.com/CharlesB91/harry-potter-quiz/blob/master/assets/images/readme-img/lighthouse-home.PNG)

**game.html**
![index.html-lighthouse](https://github.com/CharlesB91/harry-potter-quiz/blob/master/assets/images/readme-img/lighthouse-game.PNG)

**gameover.html**
![gameover.html-lighthouse](https://github.com/CharlesB91/harry-potter-quiz/blob/master/assets/images/readme-img/lighthouse-end.PNG)

### User Experience Testing

- Asked family members to review my website on various devices on how they found the site. This included how well they navigated if they understood the general idea and concepts. Did receive positive feedback however it was pointed out that the home and instructions button shoud be at top of page for easy navigation. Therefore afer this feedback i implemented a nav bar. 


## Bugs

### Resolved Bugs

- GoogleLight House Error - Encoutered an error with google lighthouse stating the there was a error with contrasting colours and foreground. After extensive uncommenting code ie process of elimination it was discovered that the sliding intruction bar was causing this error. Tired to change this background color howveer was still receving this error. Instead decided to create a modal box for instruction tab. Issue now resolved. 
- Release Button Issue - When clicking on an answer this would then lead you to the next question however this button would still have the highlighted colour effect. Decided in this case to remove the hover background colour on the answer buttons which resolved the issue. Researched stackoverflow & google but could not find a suitable solution. 
- Backgroud image Issue - When viewing the quiz on different screen sizes there appeared to be alot of which space. Spoke to mentor regarding this and was suggested i could use 100vw. This still did not resolve the issues and after extensive googleing i fould the resolution on stackoverflow. (https://stackoverflow.com/questions/25319124/white-space-below-background-cover-responsive).
- Quiz Timmer Issue. When the user was able to see a question and select an answer the quiz was quickly moving onto the other question before any feedback could be provided on the selected button ie red or green. Found a timer solution which was implemented into my js code. (https://stackoverflow.com/questions/17883692/how-to-set-time-delay-in-javascript).
- Favicon 404 error. When loading quiz a favicon erro would appear even through no favicon icons were being used. Stackoverflow suggested to use this code in each head section which seemed to resolve the issue "<link rel="shortcut icon" href="#" />"


### Un-Resolved Bugs

- No unresolved bugs however as mentioned with the Release Button Issue the only solution i could find was to remove the hover button for each answer button. 

## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows:
  - In the GitHub repository, navigate to the Settings tab.
  - From the source section drop-down menu, select the Master Branch.
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found here - https://charlesb91.github.io/harry-potter-quiz/

## Credits

- There has been various sources of credit used for this site.
- James Q Quick youtube tutorial provided excellent guidence on how to pre populate questions and answer buttons from question pool. (https://www.youtube.com/watch?v=zZdQGs62cR8).
- Splash Screen idea was taken from you tube tutorial which give the quiz that extra piece of exiciting experiance for the user. (https://www.youtube.com/watch?v=MOlaldp1Fv4).
- Modal instuction Screen code was borrowed from W3Schools. Styling was my own choice & text. (https://www.w3schools.com/howto/howto_css_modals.asp).

## Media

-Hogwarts background image was taken from unsplash (https://unsplash.com/s/photos/hogwarts)
- Harry Potter Text image was taken from wikipedia (https://en.wikipedia.org/wiki/Harry_Potter)
- Great Hall image was taken from google (https://www.bustle.com/articles/128432-dinner-in-the-great-hall-pictures-from-warner-bros-studios-will-give-you-all-the-potter)








