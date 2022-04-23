---
title: "Unit Test with Jest"
date: 2022-04-20T12:00:21-04:00
description: 'A quick tutorial about unit testing using jest on Node JS'
---
**What is Unit Testing?**

Gabriel Villagran -a267572@a;umnos.uaslp.mx-

Before I started to show you how to do this, let me talk about what is this and why is important to implement this tests to our projects.

Unit testing is a very useful technique that will help you to develop an application fully functional, **Important: If you see a project without testing, be careful, all the projects must have tests and this one should fail and need to be passed**.

Unit tests are developed using a framework or library where we will develop the tests that should fail and/or pass and we will develop the code for this test.

**How to develop our unit tests using Jest**

Jest is a framework for unit testing in JavaScript, this is a step-by-step guide to develop those tests:

1. Create a directory where your project will be contained, for example, **Ajolonauta**

2. Using your terminal go to the directory using cd, for example, **cd Ajolonauta**, once you are there, use the next command:
 
**npm init**.

**Note: This command will show you some questions for the creation of the project, you can press enter to accept the default values**

3. Execute the command npm install --save-dev jest to install the Jest package into the newly created project.

4. When we run the command to install Jest packages we are going to have a package.json file that needs to be updated, on script  section we should changed to something like this:

![image](https://user-images.githubusercontent.com/44887537/164289853-ac56314b-eaa0-4861-b545-6d1a9470b8ef.png)

**Final package.json**

![image](https://user-images.githubusercontent.com/44887537/164289919-71291665-ee68-41b9-8125-2f9b0928ee14.png)


**Note: The directory node_modules mustn't have to be versioned, we have to create a .gitignore file on the root directory with the next line: **

![image](https://user-images.githubusercontent.com/44887537/164290294-55f5bbb7-3e45-4a9a-af9e-c78c5bb2579b.png)

**Writing your first test**

This is a basic test that can be found on the documentation of jest, you can modify for the purpose that you want it:

1-. Create a directory with the name test (here you will code all your tests)

2-. Create a file "myFirstTest.test.js" and write the next sample code:

![image](https://user-images.githubusercontent.com/44887537/164306509-15f1a735-cca9-45df-879b-049faca088cb.png)

**Run your test**

To run your test is very simple, on your terminal execute: **npm run test** and this will execute all your tests and will show you if the test was pass or fail.

**Once you have run the test, you need to refactor the code you wrote and you need to make that your tests pass**

**The tests of your project are a very important part of it, with them, you can change your code very easily, you will guarantee that your code will work, we do a better design and you can detect errors on an early stage**
