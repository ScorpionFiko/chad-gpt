# Chad-GPT: Your one stop for all your fitness needs
University of Toronto - Project 03 - Team 09 - Chad-GPT

## Description

Repository containing the code for the chad-gpt application. Chad-GPT is your one stop shopping for creating workouts that match your fitness goal. All other apps target specific type of workout and you end up either downloading additional apps or paying higher fees in order to avail from additional fitness routines. Chad-GPT solves that issue by taking user input and tailoring the workout based on the needs. Not only that, the user can create and save several different types of workouts and alternate between them.

Each workout aims at providing the user the workout routine which consists of one or more exercises. Each exercise comes with the number of sets, reps per set, duration (in case of jogs or treadmill runs), and a possible image of how to perform the exercise.

Chad-GPT has the ability to be used offline on the device that was previously used to access the application. This makes the application perfect for taking it locations where internet connection is not readily available. 

Below is the image of the Chad-GPT when user is not logged in.
![CGPT - Landing](./assets/images/CGPT-01-cart.png)

Below is the image of the Chad-GPT when user is logged in.
![CGPT - Landing Logged In](./assets/images/CGPT-02-cart-logged-in.png)

Below is the image of the Chad-GPT when user creates a workout
![CGPT - Checkout](./assets/images/CGPT-03-checkout.png)

Below is the image of the Chad-GPT's user dashboard
![CGPT - Stripe](./assets/images/CGPT-04-stripe.png)

Below is the image of the Chad-GPT when user has selected a routine.
![CGPT - Order History](./assets/images/CGPT-05-order-history.png)

Below is the image of the Chad-GPT when user has selected an exercise from the routine.
![CGPT - Order History](./assets/images/CGPT-05-order-history.png)



## Table of Contents

- [Installation](#installation)
- [Functionality](#functionality)
- [Usage](#usage)
- [Credits](#credits)
- [Tests](#tests)
- [License](#license)
- [Walktrough](#walkthrough)
- [Future Development](#future-development)
- [Contact](#contact)

## Installation

You can use the app by going to https://chadgpt-fitness.herokuapp.com/


To install it on your device: 
- visit https://chadgpt-fitness.herokuapp.com/
- click on the install button that appears on the right side of the web address bar

back to [Table of Contents](#table-of-contents)


## Functionality

The following discusses at a high level about some of the features of the website. Detailed code implementation can be found as comments in the JS files.


### Redux:

Redux is one of the popular state management libraries that provide "a predictable state container designed to help you write JavaScript apps that behave consistently across client, server, and native environments, and are easy to test. While it's mostly used as a state management tool with React, you can use it with any other JavaScript framework or library." 

According to the official documentation at https://redux.js.org/ Redux:
- helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.
- centralizes the application's state and logic enables powerful capabilities like undo/redo, state persistence, and much more.
- provides DevTools to make it easy to trace when, where, why, and how your application's state changed. Redux's architecture lets you log changes, use "time-travel debugging", and even send complete error reports to a server.
- works with any UI layer, and has a large ecosystem of addons to fit your needs. 


### Google Custom Search Engine:

The Custom Search Engine, also known as Programmable Search Engine, is a feature that goolge provides where a user can modify the Google search engine to only look for specific types in information. For this specific application, the search engine has been programmed to only search images from workoutlabs.com to retrieve watermarked images of the exercises.


### OpenAI



back to [Table of Contents](#table-of-contents)

## Usage

To access application
1. Go to https://chadgpt-fitness.herokuapp.com/ to access the application
2. log in or set up an account
3. To create a new workout, click on the Build workout menu option
    1. Enter informatoin in all inputs
    2. Click on the generate button and wait for the application to update. Depending on the workout type, it may take up to two minutes to fully get the information from OpenAI
4. The page should refresh and you should see the work out as a button
    1. click on the workout
    2. click on a day of the exercise routing
    3. click through each of the exercises to view the details about how to do it and the necessary sets and reps


back to [Table of Contents](#table-of-contents)


## Credits
https://redux.js.org/ for information about their library and usage

back to [Table of Contents](#table-of-contents)


## Tests

All tests have been performed manually using Chrome.

back to [Table of Contents](#table-of-contents)


## License

Please refer to the LICENSE in the repo.

back to [Table of Contents](#table-of-contents)


## Walkthrough

No walkthrough video required

back to [Table of Contents](#table-of-contents)


## Future Development

Here are some of the items to be considered for future development.
1. Add 'hire a trainer' option where the user can select between a small listing of trainers and also pay for the services
2. Save some of the user input info (age, height weight, gender) into the database for quicker exercise build
3. Move images closer to the actual workout card so that they are more easily visible on handheld devices.


back to [Table of Contents](#table-of-contents)


## Contact
Stefan Marinov: [GitHub](https://github.com/ScorpionFiko) | [LinkedIn](https://www.linkedin.com/in/stefan-marinov-csm-020006267/) | [E-mail](mailto://stefan_marinov@rogers.com)

Mario Repas: [GitHub](https://github.com/Tegrty) | [LinkedIn](https://www.linkedin.com/in/mario-repas-46b85b25a/) | [E-mail](mailto://dev.repas@gmail.com)

Kirk Hagglund: [GitHub](https://github.com/KirkHagglund) | [LinkedIn](https://www.linkedin.com/in/kirk-hagglund-20b24726b/) | [E-mail](mailto://kirkhagglund@gmail.com)

back to [Table of Contents](#table-of-contents)