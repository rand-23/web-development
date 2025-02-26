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
The most important folders in this repository are ecommerce-strapi and ecommerce. First, the ecommerce-strapi folder includs the backend and database files and folders that are important, also in this folder there is the **(.env)** file that you have to create it and add to it the values that I shared with you in the PowerPoint for phase2, I also added them in the zip folder in phase3, these values are so important to make the ecoomerce-strapi able to run in the right way. Second, the ecommerce folder which is also important cause it includes the app codes to create and implement everything for the frontend side, it also includes the most important file **(.env.local)** to link the backend with frontend, you need to create this file and you will also find the values you need in the PowerPoint that I submitted for phase2, I also added them in the zip folder in phase3. In addition, in the third folder which is called docs_phase3, here is the video of how the application is working.

## .env file
.env file is essential to run the Strapi which is used as a backend and connected with the database. You have to create this file in the root of the ecommerce-strapi folder. You will find the values of .env file in the second slide of the PowerPoint for phase2, so you only need to create .env file then copy paste the values from the PowerPoint or you can find them in the zip folder that I submitted for phase3.

## .env.local file
.env.local file is essential cause it includes all APIs needed in this project. You have to create this file in the root of the ecommerce folder. You will find the values of .env.local file in the third slide of the PowerPoint for phase2, so you only have to create .env.local file then copy paste the values from the PowerPoint or you can find them in the zip folder that I submitted for phase3.

## Installing
### Prerequisites
**Node.js (v20.18.0)** is used in this project npm or yarn (This project steps work with npm), so check the version that you have of Node.js if you already have it, if not so install Node.js (v20.18.0)
### Install dependencies
Each folder of those above have a different dependencies
#### ecommerce-strapi
To make this code work without any error **Run: npm install**, and it will install all of the related dependencies from the package.json file , or you can install them manually, you can open the file package.json and run for each dependency like this example: npm install better-sqlite3. 
Also for this folder it is crusial to run this command: **npm install better-sqlite3** and you need **to install an extension called (SQLite) published by (alexcvzz)** to make this code able to read the data from database without errors(installing this extension is so important), the database is in the folder .tmp inside the file data.db if you want click on it, it will ask you to open in anyway, open it with read as a text.
#### ecommerce
To make this code work without any error **Run: npm install**, and it will install all of the related dependencies from the **package.json** file , or you can install them manually from the package.json file.

## Starting the application
### Downloading the Code
Download the code as a zip folder.
Extract the zip folder to your desired location.
When you extract the zip folder, it will appear in your side as a web-development-main folder and inside it the **subfolders: ecommerce, ecommerce-strapi, docs_phase3 and README.md**.
To make this code run correctly you need to pay attention of that open folders (ecommerce and ecommerce-strapi) each folder of them as a seperate folder as I explain in the **Run the code** section, that because each folder has its own dependencies and its own package.json file.

### Run the code
*	First, open the folder **ecommerce-strapi** by VS Code or command from where you download it
*	After create the **.env** file and adding its values
*	In the terminal side **after installing all dependencies** and **after installing the extension SQLite**, write this **command: npm run develop**.
*	Will take you to **localhost:1337**. Then will ask you to login, you need to use the **username and password** that I provide you with them in the second slide in the PowerPoint for phase2.
*	Here in Strapi after logging in, first it will open the **admin panel**, if you want to check how you can manage things like products, carts or users there is a tab called **content-manager** click on it and it will show you everything (ex: how to add, edit and delete).
*	Second, open the folder **ecommerce** by VS Code or command from where you download it and without closing **ecommerce-strapi folder (this is so important)**.
*	Then after create the **.env.local** file and adding its values.
*	In the terminal side **after installing all dependencies**, write this **command: npm run dev**.
*	Will take you to **localhost:3000**, or **localhost:3001**, here where you can see and use the application.
### Note
Please note that in case you face a problem when you run npm install, so make sure of your path if it is correct, should be like this as an exapmle( C:\Users\Dell\web-development-main\web-development-main\ecommerce-strapi) or you might take the ecommerce and ecommerce-strapi folders out of the main then you can run them.

## Connections
For any questions or suggestions, feel free to reach out to me at randshamsaldin01@gmail.com
