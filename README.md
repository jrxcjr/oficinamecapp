Project Started with React-Native Init
This project was bootstrapped with react-native init.

Project Introduction
This project was created for the application to a job in Codificar, created in the date 18/05/21 in the local repo and pushed to git in 20/05. The main programming language used was JavaScript in the form of JSX.

The project assignment was to create a simple UI based in certain specs as shown on the assignment pdf.

The approach used was: provide data via a fetch request, from a remote resource provided as a hyperlink as show in the assignment pdf.The fetched data would be consumed in the single component of the app, then display it via a flatlist in the ServiceList.js and if the user created an press event on any of the list items, a modal, created by the CustomModal.js component showing more information would pop up showing new detailed info about the item, the ui refreshes and data flow was provided by use of the React State properties, the context approach was not deemed necessary because of the low complexity of the given task.

The biggest puzzle of this project was to properly manage the flow of data between the two created components in a way that would be efficient and seamless to the user. 

Not every Edge Case was tested and prevented because of time constraints.

Project Goal
This project was created as an assignment to a job offer in the Codificar company.

Code Splitting
The code splitting pattern in this project was the one recommended by React, splitting the code into components, in place of a monolithic approach, granting them better separation of concerns between each other. 

Used dependencies
There were no external dependencies used in this project, the only ones used were the ones brought by the React-Native Init

How to run the App
1- Set up the developing enviroment as per the react-native instructions as provided in this link:[React-Native Docs: Setting up the development environment](https://reactnative.dev/docs/environment-setup)
2- Make sure an Android Virtual Device is properly running and set up
3- Create a 5.4in virtual device on the AVD Manager in Android Studio, using the android version and APIs instructed by the react-native docs.
3- Clone this Repo in this link: [Repo Main Page](https://github.com/jrxcjr/oficinamecapp)
4- Open the Terminal in the desired IDE(Android Studio or VSCode are the recommended ones) 
5- Type up the command: "npx react-native run-android", if the emulator was properly set up, you must await about 2 minutes for the first startup of the app
6- After the compiling and running, the app will be running on the screen of the emulator.

Found any bugs?
Contact me at my email and provide some feedback to the bugs at jrxcavalcantijr@hotmail.com

Who contributed this project?
This project was created by José Ricardo Xavier Cavalcanti Júnior
