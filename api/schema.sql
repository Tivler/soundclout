DROP DATABASE IF EXISTS soundclout_db;
CREATE DATABASE soundclout_db;

USE soundclout_db;

CREATE TABLE albums(
  album_id INT AUTO_INCREMENT NOT NULL,
  album_class VARCHAR(45) NOT NULL,
  album_title VARCHAR(45) NOT NULL,
  album_artist VARCHAR(45) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  primary key(album_id)
);

SELECT * FROM albums;

INSERT INTO albums (album_class, album_title, album_artist, price)
VALUES ("one", "Activated", "Tee Grizzley", 10.99),
   ("twp", "Be 4 The Fame", "Roddy Ricch", 9.99),
    ("three", "Wildboy", "Calboy", 11.99),
    ("four", "AI Youngboy","YoungBoy Never Broke Again", 14.99),
    ("five", "Signed To The Streets III", "Lil Durk", 9.99),
    ("six", "True To Self", "Bryson Tiller", 10.99),
    ("seven", "Feed Tha Streets", "Roddy Ricch", 7.99),
    ("eight", "Life B4 Fame", "Quando Rondo", 8.99),
    ("nine", "Just Cause Y'all Waited", "Lil Durk", 9.99),
    ("ten", "Realer", "YoungBoy Never Broke Again", 13.99),
    ("eleven", "Scriptures", "Tee Grizzley", 11.99),
    ("twelve", "Until Death Call My Name", "YoungBoy Never Broke Again", 14.99),
    ("thirteen", "Baby On Baby", "DaBaby", 10.99),
    ("fourteen", "Chloe", "Yungeen Ace", 9.99),
    ("fifteen", "F.N", "Lil Tjay", 7.99),
    ("sixteen", "Life I'm Livin", "Yungeen Ace", 10.99),
    ("seventeen", "Love Songs 4 The Streets II", "Lil Durk", 10.99),
    ("eighteen", "Neighborhood Hero", "NoCap", 9.99),
    ("nineteen", "The Backend Child", "NoCap", 9.99),
    ("twenty", "Can't Speak On It", "Yungeen Ace", 13.99),
    ("twenty-one", "We All Shine", "YNW Melly", 14.99),
    ("twenty-two", "43VA HEARTLESS", "MoneyBagg Yo", 8.99),
    ("twenty-three", "LIL UZI VERT vs THE WORLD", "Lil Uzi Vert", 14.99),
    ("twenty-four", "RESET", "MoneyBagg Yo", 14.99);