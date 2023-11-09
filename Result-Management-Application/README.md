# Result-Management-Application

Develop a “Result Managment Application” using HTML, CSS, JavaScript and Node.

- Two types of users can login to application by clicking a button on homepage
- Students can enter their roll number and date of birth to view their result
- If roll number and D.O.B. does not match, an error should be shown on screen.
- Teachers can View all records, add new record, edit and delete the records.
   


# Setup Guide:-

##  Database Setup

**STEP1**:- Go to Start Menu and search for MySQL Command Line Client as show in the below database  
<img src="./public/img/screenshots/Start-Menu.png" alt="Start Menu" width="600">

**STEP2**:- Open MySQL Command Line Client and enter your mysql password, (in my case it was “root”), as shown below.  
<img src="./public/img/screenshots/MySQL-Client.png" alt="MySQL Command Line Client" width="600">

## OR
 ( if you are unable to access the database through above steps)
You can also access MySQL Command Line Client from Command Prompt. For this:

1.  Open Command Prompt.
2.  Navigate to the bin folder. For example:  `cd C:\Program Files\MySQL\MySQL Server  8.0\bin`
3.  Run the `mysql -u username -p`  command. For example: mysql -u root -p
5.  Enter the password.
  
<img src="./public/img/screenshots/Mysql-cmd.png" alt="MySQL through cmd" width="600">


**STEP3** :- Then create a database (in my case, I created database named resultdb, also you can name it whatever you want). For creating database use the following command:-
`create database database_name;`

For example:- create database resultdb;

**STEP4** :- Close MySQL Command Line Client.

**Note** : If you encounter any problem during database setup then please refer to this [**blog**](https://blog.devart.com/mysql-command-line-client.html)

If the above steps don't work then please create a database by some other means you are familiar with or use an existing database.    

## Backend

 **STEP1** :- Open the project in Visual Studio Code.

**STEP2** :- Go to toolbar --> View --> Terminal OR Simply press ctrl+`

**STEP3** :- Run command "npm install”.

**STEP4** :- Now go the config.env file and add your database name, username of the database and password of the database.( in my case, both username and password was root, Also please don’t use space in between when typing username, password and database)

For example:-  
<img src="./public/img/screenshots/config-env.png" alt="Config.env file" width="600">
 
STEP5 :- Now to run the project --> Run "npm start" on terminal.

**Note**: Please provide that database name in the config.env file which you have created or you can also provide any database name present in your system. 

## Frontend

Open URL **"https://localhost:5000"** on a browser.

## Note:-

The password to access the teacher page is --> **Teacher@1234**


## Screenshots:-

#### Home Page  
<img src="./public/img/screenshots/Home-page.png" alt="Home Page" width="600">

---

#### Teacher Login Page  
<img src="./public/img/screenshots/Teacher-login.png" alt="Teacher Login Page" width="600">

---

#### Teacher Home Page  
<img src="./public/img/screenshots/Teacher-home.png" alt="Teacher Home page" width="600">

---

#### Add New Student Page  
<img src="./public/img/screenshots/Add-student.png" alt="Add Student Page" width="600">

---

#### Update Student Page  
<img src="./public/img/screenshots/Update-student.png" alt="Update Student Page" width="600">

---

#### Find Result Page  
<img src="./public/img/screenshots/Find-result.png" alt="Find Result Page" width="600">

---

#### Student Result Page  
<img src="./public/img/screenshots/Student-result.png" alt="Student Result Page" width="600">

---

#### 404 Page  
<img src="./public/img/screenshots/404.png" alt="404 Error Page" width="600">