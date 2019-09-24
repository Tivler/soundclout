DROP DATABASE IF EXISTS soundclout_db;
CREATE DATABASE soundclout_db;

USE soundclout_db;

CREATE TABLE albums(
  album_id INT AUTO_INCREMENT NOT NULL,
  album_class VARCHAR(45) NOT NULL,
  album_title VARCHAR(45) NOT NULL,
  album_artist VARCHAR(75) NOT NULL,
  album_url LONGTEXT NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  primary key(album_id)
);

SELECT * FROM albums;

INSERT INTO albums (album_class, album_title, album_artist, album_url, price)
VALUES ("one", "Activated", "Tee Grizzley",'https://soundcloud.com/tee-grizzley/sets/activated', 10.99),
   ("two", "Be 4 The Fame", "Roddy Ricch",'https://soundcloud.com/roddyricch/sets/b4tf',  9.99),
    ("three", "Wildboy", "Calboy",'https://soundcloud.com/147calboy/sets/wildboy-6', 11.99),
    ("four", "AI Youngboy","YoungBoy Never Broke Again",'https://soundcloud.com/nba-youngboy/sets/aiyoungboy', 14.99),
    ("five", "Signed To The Streets III", "Lil Durk",'https://soundcloud.com/lildurk/sets/signed-to-the-streets-3', 9.99),
    ("six", "True To Self", "Bryson Tiller", 'https://soundcloud.com/user-506091047/sets/true-to-self',10.99),
    ("seven", "Feed Tha Streets", "Roddy Ricch",'https://soundcloud.com/roddyricch/sets/feed-tha-streets',  7.99),
    ("eight", "Life B4 Fame", "Quando Rondo", 'https://soundcloud.com/quandorondo/sets/life-b4-fame-2', 8.99),
    ("nine", "Just Cause Y'all Waited", "Lil Durk",'https://soundcloud.com/lildurk/sets/just-cause-yall-waited-1', 9.99),
    ("ten", "Realer", "YoungBoy Never Broke Again",'https://soundcloud.com/nba-youngboy/sets/realer', 13.99),
    ("eleven", "Scriptures", "Tee Grizzley",'https://soundcloud.com/tee-grizzley/sets/scriptures', 11.99),
    ("twelve", "Until Death Call My Name", 'https://soundcloud.com/nba-youngboy/sets/until-death-call-my-name-1',"YoungBoy Never Broke Again", 14.99),
    ("thirteen", "Baby On Baby", "DaBaby", 'https://soundcloud.com/dabilliondollarbaby/sets/baby-on-baby', 10.99),
    ("fourteen", "Chloe", "Yungeen Ace",'https://soundcloud.com/yungeenace/sets/chloe', 9.99),
    ("fifteen", "F.N", "Lil Tjay",'https://soundcloud.com/liltjay/sets/f-n-7', 7.99),
    ("sixteen", "Life I'm Livin", "Yungeen Ace",'https://soundcloud.com/yungeenace/sets/life-im-livin', 10.99),
    ("seventeen", "Love Songs 4 The Streets II", "Lil Durk", 'https://soundcloud.com/lildurk/sets/ls4ts2', 10.99),
    ("eighteen", "Neighborhood Hero", "NoCap", 'https://soundcloud.com/officialnocap/sets/neighborhood-hero', 9.99),
    ("nineteen", "The Backend Child", "NoCap", 'https://soundcloud.com/officialnocap/sets/the-backend-child', 9.99),
    ("twenty", "Can't Speak On It", "Yungeen Ace", 'https://soundcloud.com/yungeenace/sets/cant-speak-on-it', 13.99),
    ("twenty-one", "We All Shine", "YNW Melly", 'https://soundcloud.com/ynwmelly/sets/we-all-shine', 14.99),
    ("twenty-two", "43VA HEARTLESS", "MoneyBagg Yo", 'https://soundcloud.com/moneybagg-yo/sets/43va-heartless', 8.99),
    ("twenty-three", "LIL UZI VERT vs THE WORLD", "Lil Uzi Vert", 'https://soundcloud.com/liluzivert/sets/lil-uzi-vert-vs-the-world', 14.99),
    ("twenty-four", "RESET", "MoneyBagg Yo", 'https://soundcloud.com/moneybagg-yo/sets/reset-46', 14.99);

CREATE TABLE featured(
  featured_id INT AUTO_INCREMENT NOT NULL,
  featured_class VARCHAR(45) NOT NULL,
  featured_title VARCHAR(45) NOT NULL,
  featured_artist VARCHAR(75) NOT NULL,
  featured_url LONGTEXT NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  primary key(featured_id)
);

SELECT * FROM featured;

INSERT INTO featured (featured_class, featured_title, featured_artist, featured_url, price)
VALUES ("one", "Activated", "Tee Grizzley",'https://soundcloud.com/tee-grizzley/sets/activated', 10.99),
   ("two", "Be 4 The Fame", "Roddy Ricch",'https://soundcloud.com/roddyricch/sets/b4tf',  9.99),
    ("three", "Wildboy", "Calboy",'https://soundcloud.com/147calboy/sets/wildboy-6', 11.99),
    ("four", "AI Youngboy","YoungBoy Never Broke Again",'https://soundcloud.com/nba-youngboy/sets/aiyoungboy', 14.99),
    ("five", "Signed To The Streets III", "Lil Durk",'https://soundcloud.com/lildurk/sets/signed-to-the-streets-3', 9.99),
    ("six", "True To Self", "Bryson Tiller", 'https://soundcloud.com/user-506091047/sets/true-to-self',10.99);