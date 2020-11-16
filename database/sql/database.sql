DROP DATABASE IF EXISTS cinema;
CREATE DATABASE cinema;
USE cinema;

DROP TABLE IF EXISTS users;
CREATE TABLE users(
	id 					INT 								PRIMARY KEY 	AUTO_INCREMENT,
	login 				VARCHAR(255) 		NOT NULL 		UNIQUE,
	password 			VARCHAR(255) 		NOT NULL,
	deleted_at 			TIMESTAMP
);

DROP TABLE IF EXISTS movies;
CREATE TABLE movies(
	id 					INT 								PRIMARY KEY 	AUTO_INCREMENT,
	title 				VARCHAR(255) 		NOT NULL,
	time 				INT 				NOT NULL,
	age 				VARCHAR(5) 			NOT NULL,
    year 				YEAR 				NOT NULL,
	description 		TEXT,
	poster 				VARCHAR(255),
	deleted_at 			TIMESTAMP	
);

DROP TABLE IF EXISTS tags;
CREATE TABLE tags(
	id 		INT 											PRIMARY KEY 	AUTO_INCREMENT,
	name 	VARCHAR(20) 					NOT NULL 		UNIQUE 			
);

DROP TABLE IF EXISTS movies_tags;
CREATE TABLE movies_tags(
	id 					INT 								PRIMARY KEY 	AUTO_INCREMENT,
	movie_id 			INT 				NOT NULL,
	tag_id 				INT 				NOT NULL,
	UNIQUE(movie_id, tag_id)
);

DROP TABLE IF EXISTS sessions;
CREATE TABLE sessions(
	id 					INT 								PRIMARY KEY 	AUTO_INCREMENT,
	movie_id 			INT 				NOT NULL,		UNIQUE 			
	date 				TIMESTAMP 			NOT NULL,
	deleted_at 			TIMESTAMP
);

DROP TABLE IF EXISTS states;
CREATE TABLE states(
	id 					INT 								PRIMARY KEY 	AUTO_INCREMENT,
	name 				VARCHAR(1) 	 		NOT NULL		UNIQUE
);

DROP TABLE IF EXISTS tickets;
CREATE TABLE tickets(
	id 					INT 								PRIMARY KEY 	AUTO_INCREMENT,
	seat 				INT 				NOT NULL,
	row 				INT 				NOT NULL,
	price 				DECIMAL(6,2) 		NOT NULL,
	state_id 			INT 				NOT NULL,
	deleted_at 			TIMESTAMP,	
	UNIQUE(seat, row, session_id)
);

DROP TABLE IF EXISTS users_tickets;
CREATE TABLE users_tickets(
	id 					INT 								PRIMARY KEY 	AUTO_INCREMENT,
	user_id 			INT 				NOT NULL,
	ticket_id 			INT 				NOT NULL,
	UNIQUE(user_id, ticket_id)
);

DROP TABLE IF EXISTS roles;
CREATE TABLE roles(
	id 					INT 								PRIMARY KEY 	AUTO_INCREMENT,
	name 				VARCHAR(25) 		NOT NULL		UNIQUE 			
);

DROP TABLE IF EXISTS users_roles;
CREATE TABLE users_roles(	
	id 					INT 								PRIMARY KEY 	AUTO_INCREMENT,
	user_id 			INT 				NOT NULL,
	role_id 			INT 				NOT NULL,
	UNIQUE(user_id, role_id)
);

DROP TABLE IF EXISTS endpoints;
CREATE TABLE endpoints(
	id 					INT 								PRIMARY KEY 	AUTO_INCREMENT,
	url 				VARCHAR(2048) 		NOT NULL		UNIQUE 			
);

DROP TABLE IF EXISTS roles_endpoints;
CREATE TABLE roles_endpoints(
	id 					INT 								PRIMARY KEY 	AUTO_INCREMENT,
	role_id 			INT 				NOT NULL,
	endpoint_id 		INT 				NOT NULL,
	UNIQUE(role_id,endpoint_id)
);

DROP TABLE IF EXISTS requests;
CREATE TABLE requests(
	id 					INT 								PRIMARY KEY 	AUTO_INCREMENT,
	user_id 			INT 				NOT NULL,
	date 				TIMESTAMP 			NOT NULL,

);


ALTER TABLE movies_tags
	ADD CONSTRAINT FK_movies_tags_to_movie FOREIGN KEY(movie_id)
		REFERENCES movie(id)
		ON DELETE RESTRICT
		ON UPDATE CASCADE,	
	ADD CONSTRAINT FK_movies_tags_to_tags FOREIGN KEY(tag_id)
		REFERENCES tags(id)
		ON DELETE RESTRICT,
		ON UPDATE CASCADE;


ALTER TABLE users_tickets
	ADD CONSTRAINT FK_users_tickets_to_users FOREIGN KEY(user_id)
		REFERENCES user(id)
		ON DELETE RESTRICT
		ON UPDATE CASCADE,		
	ADD CONSTRAINT FK_users_tickets_to_tickets FOREIGN KEY(ticket_id)
		REFERENCES ticket(id)
		ON DELETE RESTRICT,
		ON UPDATE CASCADE;
		

ALTER TABLE tickets
	ADD CONSTRAINT FK_tickets_to_states FOREIGN KEY(state_id)
		REFERENCES states(id)
		ON DELETE RESTRICT
		ON UPDATE CASCADE,	
	ADD CONSTRAINT FK_tickets_to_sessions FOREIGN KEY(session_id)
		REFERENCES sessions(id)
		ON DELETE RESTRICT
		ON UPDATE CASCADE;
	
	
ALTER TABLE requests
	ADD CONSTRAINT FK_requests_to_users FOREIGN KEY(user_id)
		REFERENCES user(id)
		ON DELETE RESTRICT
		ON UPDATE CASCADE;


ALTER TABLE users_roles
	ADD CONSTRAINT FK_users_roles_to_users FOREIGN KEY(user_id)
		REFERENCES user(id)
		ON DELETE RESTRICT
		ON UPDATE CASCADE,
	ADD CONSTRAINT FK_users_roles_to_roles FOREIGN KEY(role_id)
		REFERENCES role(id)
		ON DELETE RESTRICT
		ON UPDATE CASCADE;


ALTER TABLE endpoints_roles
	ADD CONSTRAINT FK_users_roles_to_roles FOREIGN KEY(role_id)
		REFERENCES role(id)
		ON DELETE RESTRICT
		ON UPDATE CASCADE,			
	ADD CONSTRAINT FK_users_roles_to_endpoints FOREIGN KEY(endpoint_id)
		REFERENCES endpoint(id)
		ON DELETE RESTRICT
		ON UPDATE CASCADE;
