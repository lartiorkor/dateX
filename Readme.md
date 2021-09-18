# DateX speed dating App

---

## CHAPTER 1 - INTRODUCTION
### 1.0– Background
Human relationships; platonic, romantic among others are necessary aspects of a society that cannot be taken out of human existence. For as long as romantic relationships have existed, people have sought assistance in meeting potential partners using whatever options were at their disposal. In modern times, our busy lives schedules coupled with the digital age have interrupted natural patterns of making acquaintances and forming meaningful bonds with other humans. Nowadays, there are many people using dating apps with the intention to find and meet new people. Every year there is an increase of users using these apps. There were more than 250 million dating app users worldwide in 2019 and it is expected to reach 300 million of users in the next 5 years. People accept these technologies as a different way to interact and meet new people. Online dating is a system that allows or enables people to find and introduce themselves to potential connections over the internet, usually with the goal of developing personal, romantic, or sexual relationships.
>*In this project we seek to find an easy and modern way of making the process of  relationship building quicker and more effective  by building a user-friendly dating mobile application.*

### 1.1 - Problem Statement
Human relationship building has changed over the years. And we need to provide an effective and more digital solution to facilitate the creation of new relationships whiles salvaging old ones amidst our busy schedules.

### 1.2 - Aim of project
The aim of this project is to produce a mobile application which would serve as an alternative way of creating and maintaining relationships easily with just a tap on your phone.

### 1.3 - Specific objectives
1. Create a dating app to meet new people easily
1. Interactive way to impress potential mate through the incorporation of a time-bound feature called speed dating.
1. Better, alternate for people who have trouble meeting people in person.
1. Opportunities to evaluate someone before meeting the person.

### 1.4 – Project scope
The application, being campus-based, seeks to target tertiary students. The initial deployment will be focused on KNUST campus. However, with growth, there is a possibility of the app being rolled out on other campuses of tertiary institutions.

### 1.5 – Project justification
This project will focus on making a user-friendly dating application.

---
---

## CHAPTER 2 - METEOROLOGY

### 2.0 – Project method adopted and justification
An evolutionary process flow is used in the execution of this project. Activities are performed and reiterated  circularly from planning, modeling, construction, deployment to communication numerous times till required product is made.

### 2.1 – Requirements specification
#### User Class and Characteristics
There are two (2) kinds of users for the proposed system. 
* Administrators: 
  Administrators are responsible for carrying out the administration and business of the system. Administrators can see the users’ activity and view feedbacks given by users. They also manage the database of the system. 
* Users: 
  Users request for services of the dating app and they give feedback for service. 

### 2.2.1 – Functional requirements of the system
#### USERS 

##### REGISTRATION
One can have a conversation through the dating app. Before you can use the dating app, you would have to register through the mobile app. A user interacts directly with the mobile app, registering with the following information: 
* Full name 
* Phone number 
* Email
* Password 
* Gender
  
##### LOGIN
After registering, the user’s information is stored in the system’s database for future reference. To log in to the app, the user inputs their email and password provided during registration. 
There is an option for users to be automatically logged in every time they open the app. 

##### PASSWORD RECOVERY 
There is a password recovery option when users forget their password. It can be recovered from the system’s database by the user entering his or her email or phone number at the “forgot password” page. If the email and phone number entered do not match any in the database, he or she is then required to create a new account before he or she can use the app.

##### MATCHING
If a user enters the system and presses the search button, there would be an interface which does a random matching, bringing out a number of matches with similar interests. The user then selects any of the matches to chat for a limited time. If compatible, the user then taps a button to indicate interest, the user at the other end must do same to move to permanent chat. Otherwise the user moves to the next match.

##### RATE SCORES 
A user on the app will be rated by people they encounter. These will be added to their profiles to enable them get good matching.

##### ONLINE STATUS 
A users status will be indicated as online or offline depending on their availability at the moment.

##### FEEDBACK
The app also allows the user to send suggestions, complaints and feedback through the comment page to the administrators. Responds are sent directly to the users through their emails.

#### ADMINISTRATOR
Administrators’ accounts will be fused into the database with administrators’ accounts having different access levels. Higher levelled administrators can add other administrators. In the database, higher levelled administrators will already have their details consisting of their: 
* Full Name 
* Emails
* Password
* Contact
  
##### CLIENT ACCOUNT VIEWED FROM ADMINISTRATOR DASHBOARD 
Client accounts can be viewed from dashboard. Details of account that can be viewed consists of: 
* Personal information 
* Emergency Contact 
* Activity logs 
* Trip Requests 
* Trip Payments 
>*All Administrators are given the privilege of either activating or deactivating a user’s account from the dashboard.* 


### 2.2.2 – Non-Functional requirements of the system
Apart from the functional part of the software, there are non-functional parts that do not exactly perform a particular action but are crucial nevertheless. These consists of attributes such as security, performance, usability etc. 

* Usability: 
  All users of the application are able to search for prospective partners through our matching algorithm and also use other features of the applications easily without having prior knowledge. 

* Reliability: 
  The application software are reliable in that the software will not crush every now and then making it impossible to use the app. There is no specified period in which the applications can be used. The applications are available 24/7. In addition, the database will be continuously updated and as such, accurate information will always be provided. 

* Performance: 
  There will not be frequent failure of the application especially when it is being accessed by a number of people.

* Supportability: 
  Since the applications are going to be used on a wide range of devices, it is in a format that supports all these different devices such that users can access features and application without any issues. 

* Legal: 
  The applications are legal since no laws are broken in the creation and development of the proposed system. 

* Maintainability: 
  The application gives room for maintenance after the development of the applications. Updates can be done to the applications as and when needed. 

* Security: 
  The system’s data will only be accessible by authorized administrators. Sensitive data will be encrypted before being sent over insecure connections. 

* Portability: 
  The app would be available on all mobile platforms and as such very portable.

### 2.3 – Architectural design of the proposed system
### 2.3.1 – Components Design
### 2.3.1.1 – Database Design


### 2.3.1.2 – User interface Design

---
---
## CHAPTER 3 – IMPLEMENTATION 
### 3.0 – FRAMEWORKS
This application was built using these frameworks
* React
* Node

### 3.1 – APPLICATION FEATURES

### 3.2 – DATABASE SCHEMES
```sql
DROP DATABASE dateX_database;
CREATE DATABASE dateX_database;
USE dateX_database;
CREATE TABLE userAuth(
user_id VARCHAR(255) PRIMARY KEY,
name VARCHAR(30) UNIQUE NOT NULL,
email VARCHAR(60) UNIQUE NOT NULL,
user_profile_profile_id VARCHAR(255) NOT NULL,
password VARCHAR(255) UNIQUE NOT NULL,
FOREIGN KEY (user_profile_profile_id) REFERENCES user_profile(profile_id) ON DELETE NO ACTION ON UPDATE NO ACTION
);

CREATE TABLE user_profile(
profile_id VARCHAR(255) PRIMARY KEY,
username VARCHAR(60) NOT NULL UNIQUE,
gender CHAR(1) NOT NULL,
age INT NOT NULL,
picture BLOB,
phone_number INT NOT NULL UNIQUE,
login_status TINYINT
);

CREATE TABLE conversation(
conversation_id VARCHAR(255) PRIMARY KEY,
User_1 VARCHAR(255) NOT NULL,
User_2 VARCHAR(255) NOT NULL,
conversation_type VARCHAR(20) NOT NULL,
user_profile_profile_id VARCHAR(255) NOT NULL,
 FOREIGN KEY (user_profile_profile_id) REFERENCES user_profile(profile_id) ON DELETE NO ACTION ON UPDATE NO ACTION
);

CREATE TABLE message(
sender_id VARCHAR(255) NOT NULL,
message_id INT NOT NULL PRIMARY KEY,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
message TEXT NOT NULL,
conversation_id VARCHAR(255) NOT NULL,
 user_profile_profile_id VARCHAR(255) NOT NULL,
  conversation_conversation_id  VARCHAR(255) NOT NULL,
  conversation_user_profile_profile_id VARCHAR(255) NOT NULL,
 FOREIGN KEY (user_profile_profile_id) REFERENCES user_profile(profile_id) ON DELETE NO ACTION ON UPDATE NO ACTION,
 FOREIGN KEY (conversation_conversation_id , conversation_user_profile_profile_id) REFERENCES conversation(conversation_id,user_profile_profile_id)
ON DELETE NO ACTION ON UPDATE NO ACTION
);
```
### 3.3 – User interfaces

---
---
## CHAPTER 4 – CONCLUSIONS
### 4.1 - Conclusions

### 4.2 - References

### 4.3 - Contributors 

### 4.4 - License
>You can check out the full license [Here](LICENSE)

This project is licensed under the terms of the MIT License.

---
