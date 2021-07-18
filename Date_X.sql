
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
picture BLOB,
phone_number INT NOT NULL UNIQUE,
login_status TINYINT,
FOREIGN KEY(profile_id) REFERENCES user_signup(user_id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE conversation(
conversation_id VARCHAR(255) PRIMARY KEY,
User_1 VARCHAR(255) NOT NULL,
User_2 VARCHAR(255) NOT NULL,
profile_id VARCHAR(255) NOT NULL,
FOREIGN KEY(profile_id) REFERENCES user_profile(profile_id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE message(
sender_id VARCHAR(255) NOT NULL,
message_id INT NOT NULL PRIMARY KEY,
created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
message VARCHAR(255) NOT NULL,
conversation_id VARCHAR(255),
FOREIGN KEY(conversation_id) REFERENCES conversation(conversation_id) ON DELETE CASCADE ON UPDATE CASCADE
);
















