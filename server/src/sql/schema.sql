-- NOTE: I figured we'd want this for the section on SQL
PRAGMA foreign_keys;

-- NOTE: For the SQL assignment, we could have them normalize
-- this database farther. Perhaps they can learn about SERIAL and
-- then go implement a way to change a room_name without losing
-- references by using a FOREIGN KEY into a rooms table with an 
-- int primary key.
CREATE TABLE songs (
	id int NOT NULL PRIMARY KEY,
	song_title text NOT NULL,
	artist text NOT NULL,
	genre text NOT NULL,
	notes varchar NOT NULL
);

INSERT INTO songs (id, song_title, artist, genre, notes) 
VALUES (1, 'Ode to Joy (Dubstep Remix)','Ludwig van Beethovens Symphony ', 'christmas','E4 E4 F4 G4 G4 F4 E4 D4 C4 C4 D4 E4 E4 D4 D4');

INSERT INTO songs (id, song_title, artist, genre, notes)
VALUES(2, 'Baby Shark', 'Pinkfong' , 'kids','C4 D4 F3 F4 F4 F4 F4 F4 F4 F4 C4 D4 F3 F4 F4 F4 F4 F4 F4 F4 C4 D4 F3 F4 F4 F4 F4 F4 F4 F4 F2 F2 E4'); 

INSERT INTO songs (id, song_title, artist, genre, notes)
VALUES(3, 'Jingle Bells', 'James Lord Pierpont', 'christmas','E4 E4 E4 E4 E4 E4 E4 G4 C4 D4 E4 
F4 F4 F4 F4 F4 E4 E4 E4 E4 E4 D4 D4 E4 D4 G4'); 



/*DROP TABLE songs*/


