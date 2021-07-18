<<<<<<< HEAD
CREATE DATABASE dateX_database;
USE dateX_database;
CREATE TABLE user_signup(
user_id VARCHAR(255) PRIMARY KEY,
username VARCHAR(30) UNIQUE NOT NULL,
email VARCHAR(60) UNIQUE NOT NULL,
password VARCHAR(255) UNIQUE NOT NULL	
);

CREATE TABLE user_profile(
profile_id VARCHAR(255) PRIMARY KEY,
name VARCHAR(30) NOT NULL UNIQUE,
gender CHAR(1) NOT NULL,
age INT NOT NULL,
date_of_birth DATE NOT NULL,
picture BLOB,
phone_number INT NOT NULL UNIQUE,
login_status TINYINT,
FOREIGN KEY(profile_id) REFERENCES user_signup(user_id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE conversation(
conversation_id VARCHAR(255) PRIMARY KEY
);

CREATE TABLE message(
receiver_id VARCHAR(255) NOT NULL,
sender_id INT NOT NULL,
message_id INT NOT NULL PRIMARY KEY,
chat_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
message VARCHAR(200) NOT NULL,
conversation_id VARCHAR(255),
FOREIGN KEY(conversation_id) REFERENCES conversation(conversation_id) ON DELETE CASCADE ON UPDATE CASCADE
);




=======
CREATE DATABASE DateX_database;
USE DateX_database;
CREATE TABLE user_profile(
user_id INT AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
gender CHAR(1) NOT NULL,
date_of_birth DATE NOT NULL,
age INT NOT NULL,
email VARCHAR(60) UNIQUE,
password VARCHAR(30) UNIQUE,
picture BLOB,
last_login TIMESTAMP
);

CREATE TABLE live_chat(
chat_id INT PRIMARY KEY AUTO_INCREMENT,
sender_id INT NOT NULL,
receiver_id INT NOT NULL,
message VARCHAR(200) NOT NULL,
#chat_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY(receiver_id) REFERENCES user_profile(user_id) ON DELETE CASCADE ON UPDATE CASCADE
);

ALTER TABLE live_chat ADD chat_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP;

CREATE TABLE contact_list(
conversation_id INT PRIMARY KEY AUTO_INCREMENT,
receiver_id INT NOT NULL,
sender_id INT NOT NULL,
online_status TINYINT(1) NOT NULL DEFAULT '0',
FOREIGN KEY(receiver_id) REFERENCES user_profile(user_id) ON DELETE CASCADE ON UPDATE CASCADE
);
describe contact_list;
>>>>>>> 235c45a5c4073bddb6296dee81d8639f71784d5d












