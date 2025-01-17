# E-COMMERCE APPLICATION

## About the project
This project is a web application that provides users to search and buy courses of different categories like technology, marketing, and security courses in an easy way, adding these courses to cart and viewing their cart.

## Features
* Configure products even without creating an account but cannot do shopping.
* Can create an account to continue shopping.
* Can add to cart.
* Viewing products that are added to cart with more details and the total price of them.
* Integrates with Clerk to do sign in and sign up.
* Interface that is straightforward to use for interaction and navigation.

## Structure of this repository
The most important folders in this repository are ecommerce-strapi and ecommerce. First, the ecommerce-strapi folder includs the backend and database files and folders that are important, also in this folder there is the (.env) file that you have to create it and add to it the values that I shared with you in the PowerPoint for phase2, these values are so important to make the ecoomerce-strapi able to run in the right way. Second, the ecommerce folder which is also important cause it includes the app codes to create and implement everything for the frontend side, it also includes the most important file (.env.local) to link the backend with frontend, you need to create this file and you will also find the values you needin the PowerPoint that I submitted for phase2.

## .env file
.env file is essential to run the Strapi which is used as a backend and as a database. You have to create this file in the root of the ecommerce-strapi folder, there is an .env.example that I created, it can help you. You will find the values of .env file in the second slide of the PowerPoint for phase2.

## .env.local file
.env.local file is essential cause it includes all APIs needed in this project. You have to create this file in the root of the ecommerce folder. You will find the values of .env.local file in the third slide of the PowerPoint for phase2.

## Installing
### Prerequisites
Node.js (v20.18.0) is used in this project npm or yarn (This project steps work with npm)
### Install dependencies
Each folder of those above have a different dependencies
#### ecommerce-strapi
To make this code work without any error Run: npm install, and it will install all of the related dependencies from the package.json file , or you can install them manually by running this command: npm install for each one for example:  @strapi/plugin-cloud , you can find them in the package.json file.
Also for this folder it is crusial to run this command: npm install better-sqlite3 and you need to install an extension called (SQLite) published by (alexcvzz) to make this code able to read the data from database without errors.
#### ecommerce
To make this code work without any error Run: npm install, and it will install all of the related dependencies from the package.json file , or you can install them manually from the package.json file.

## Starting the application
### Downloading the Code
Download the code as a zip folder.
Extract the zip folder to your desired location.
### Run the code
*	First, open the folder ecommerce-strapi by vs code or command from where you download it.
*	After create the .env file and adding its values
*	In the terminal sied after installing all dependencies and after installing the extension SQLite, write this command: npm run develop.
*	Will take you to localhost:1337. Then will ask you to login, you need to use the username and password that I provide you with them in the second slide in the PowerPoint for phase2.
*	Second, open the folder ecommerce by vs code or command from where you download it and without closing ecommerce-strapi.
*	After create the .env.local file and adding its values
*	In the terminal sied after installing all dependencies, write this command: npm run dev.
*	Will take you to localhost:3000 , here where you can see and use the application.

## Connections
For any questions or suggestions, feel free to reach out to me at randshamsaldin01@gmail.com
