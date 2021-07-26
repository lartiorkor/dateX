drop database dateX_database;
CREATE DATABASE dateX_database;
USE dateX_database;
CREATE TABLE userAuth(
user_id VARCHAR(255) PRIMARY KEY,
username VARCHAR(30) UNIQUE NOT NULL,
email VARCHAR(60) UNIQUE NOT NULL,
user_profile_profile_id VARCHAR(255) NOT NULL,
password VARCHAR(255) UNIQUE NOT NULL,
FOREIGN KEY (user_profile_profile_id) REFERENCES user_profile(profile_id) ON DELETE NO ACTION ON UPDATE NO ACTION
);

CREATE TABLE user_profile(
profile_id VARCHAR(255) PRIMARY KEY,
name VARCHAR(60) NOT NULL UNIQUE,
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