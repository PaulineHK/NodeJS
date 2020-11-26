use cinema;
INSERT INTO roles (name) VALUES
	('admin'), ('user');
	
INSERT INTO users (login, password)	VALUES
	('qqq@gmail.com','1111'),
	('aaa@gmail.com','2222'),
	('zzz@gmail.com','3333');


INSERT INTO tags (id, name) VALUES
	(1,'Adventure'),(2,'Animation'),(3,'Action'),
	(4,'Comedy'),(5,'Drama'),(6,'Fantasy'),
	(7,'Horror'),(8,'Mystery'),(9,'Musical'),
	(10,'Romance'),(11,'Family'),(12,'Thriller'),
	(13,'Sci-Fi'),(14,'Western'),(15,'Detective'),
	(16,'Biography'),(17,'Documental'),(18,'Sport'),
	(19,'Historical');	
	

INSERT INTO movies (title, time, year, description, start_show, end_show) VALUES
	('The Mummy ',110,2017,'The film takes palace in an endless Iraqi desert. Tyler Colt, an American soldier from a NF special unit, successfully found a local terrorist bunker and at the same time disturbed a tomb of an ancient mummified queen. She has been waiting for chance to come to life for centuries.','2021-10-10','2021-10-17'),
	('Guardians of the Galaxy',116,2014,'An interstellar traveller, Peter Quill, comes across a powerful object, with the help of which Ronan planned to conquer the Universe. Peter finds himself in the heart of rapidly developing events that may result in a large-scale war. Fortunately, Quill is not alone. A team of motley crew aliens, who have odds with the law, is helping him.','2021-02-01','2021-02-20'),
	('The Mortal Instruments: City of Bones',124,2013,'Clary has lived a life of an ordinary girl until she discovers a shocking truth about her origins. She is a descendant of angels, the secret cadre of warriors locked in an ancient battle to protect the world from evil forces. The girl joins forces with other like her and goes on the trial of her missing mother, fighting the creatures of darkness.','2021-01-12','2021-01-16');
		

INSERT INTO movies_tags (movie_id, tag_id) VALUES
	(3,1), (3,6), (3,5), (3,15),
	(2,1), (2,6), (2,4),
	(1,3), (1,6), (1,1), (1,12);
	

INSERT INTO sessions (movie_id, date) VALUES
	(1, '2021-10-11 11:00:00'),
	(1, '2021-10-13 12:00:00'),
	(2, '2021-02-02 17:00:00'),
	(2, '2021-02-17 10:00:00'),
	(3, '2021-01-12 19:00:00');
	
	
	

	
	
