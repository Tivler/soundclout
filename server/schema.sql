DROP DATABASE IF EXISTS soundclout_db;
CREATE DATABASE soundclout_db;

USE soundclout_db;

CREATE TABLE albums(
  album_id INT AUTO_INCREMENT NOT NULL,
  album_class VARCHAR(45) NOT NULL,
  album_title VARCHAR(45) NOT NULL,
  album_artist VARCHAR(75) NOT NULL,
  album_url LONGTEXT NOT NULL,
  primary key(album_id)
);

SELECT * FROM albums;

INSERT INTO albums (album_class, album_title, album_artist, album_url)
VALUES ("one", "Activated", "Tee Grizzley",'https://soundcloud.com/tee-grizzley/sets/activated'),
   ("two", "Be 4 The Fame", "Roddy Ricch",'https://soundcloud.com/roddyricch/sets/b4tf'),
    ("three", "Wildboy", "Calboy",'https://soundcloud.com/147calboy/sets/wildboy-6'),
    ("four", "AI Youngboy","YoungBoy Never Broke Again",'https://soundcloud.com/nba-youngboy/sets/aiyoungboy'),
    ("five", "Signed To The Streets III", "Lil Durk",'https://soundcloud.com/lildurk/sets/signed-to-the-streets-3'),
    ("six", "True To Self", "Bryson Tiller", 'https://soundcloud.com/user-506091047/sets/true-to-self'),
    ("seven", "Feed Tha Streets", "Roddy Ricch",'https://soundcloud.com/roddyricch/sets/feed-tha-streets'),
    ("eight", "Life B4 Fame", "Quando Rondo", 'https://soundcloud.com/quandorondo/sets/life-b4-fame-2'),
    ("nine", "Just Cause Y'all Waited", "Lil Durk",'https://soundcloud.com/lildurk/sets/just-cause-yall-waited-1'),
    ("ten", "Realer", "YoungBoy Never Broke Again",'https://soundcloud.com/nba-youngboy/sets/realer'),
    ("eleven", "Scriptures", "Tee Grizzley",'https://soundcloud.com/tee-grizzley/sets/scriptures'),
    ("twelve", "Until Death Call My Name", "YoungBoy Never Broke Again", 'https://soundcloud.com/nba-youngboy/sets/until-death-call-my-name-1'),
    ("thirteen", "Baby On Baby", "DaBaby", 'https://soundcloud.com/dabilliondollarbaby/sets/baby-on-baby'),
    ("fourteen", "Chloe", "Yungeen Ace",'https://soundcloud.com/yungeenace/sets/chloe'),
    ("fifteen", "F.N", "Lil Tjay",'https://soundcloud.com/liltjay/sets/f-n-7'),
    ("sixteen", "Life I'm Livin", "Yungeen Ace",'https://soundcloud.com/yungeenace/sets/life-im-livin'),
    ("seventeen", "Love Songs 4 The Streets II", "Lil Durk", 'https://soundcloud.com/lildurk/sets/ls4ts2'),
    ("eighteen", "Neighborhood Hero", "NoCap", 'https://soundcloud.com/officialnocap/sets/neighborhood-hero'),
    ("nineteen", "The Backend Child", "NoCap", 'https://soundcloud.com/officialnocap/sets/the-backend-child'),
    ("twenty", "Can't Speak On It", "Yungeen Ace", 'https://soundcloud.com/yungeenace/sets/cant-speak-on-it'),
    ("twenty-one", "We All Shine", "YNW Melly", 'https://soundcloud.com/ynwmelly/sets/we-all-shine'),
    ("twenty-two", "43VA HEARTLESS", "MoneyBagg Yo", 'https://soundcloud.com/moneybagg-yo/sets/43va-heartless'),
    ("twenty-three", "LIL UZI VERT vs THE WORLD", "Lil Uzi Vert", 'https://soundcloud.com/liluzivert/sets/lil-uzi-vert-vs-the-world'),
    ("twenty-four", "RESET", "MoneyBagg Yo", 'https://soundcloud.com/moneybagg-yo/sets/reset-46');

CREATE TABLE album_price(
    album_id INT AUTO_INCREMENT NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    primary key(album_id)
);

INSERT INTO album_price (price)
VALUES
(10.99),
(9.99),
(11.99),
(14.99),
(9.99),
(10.99),
(7.99),
(8.99),
(9.99),
(13.99),
(11.99),
(15.99),
(10.99),
(9.99),
(7.99),
(10.99),
(10.99),
(7.99),
(8.99),
(10.99),
(13.99),
(14.99),
(11.99),
(12.99);

SELECT album_price.album_id,  album_price.price FROM album_price INNER JOIN albums ON album_price.album_id = albums.album_id
GROUP BY album_id;

CREATE TABLE featured(
  featured_id INT AUTO_INCREMENT NOT NULL,
  featured_class VARCHAR(45) NOT NULL,
  featured_title VARCHAR(45) NOT NULL,
  featured_artist VARCHAR(75) NOT NULL,
  featured_url LONGTEXT NOT NULL,
  primary key(featured_id)
);

SELECT * FROM featured;

INSERT INTO featured (featured_class, featured_title, featured_artist, featured_url)
VALUES ("One", "Take Care", "Drake", 'https://soundcloud.com/octobersveryown/sets/take-care-8'),
   ("Two", "PTSD", "Rod Wave", 'https://soundcloud.com/rodwave/sets/ptsd'),
    ("Three", "My Moment", "Tee Grizzley", 'https://soundcloud.com/tee-grizzley/sets/my-moment'),
    ("Four", "True To Self","Bryson Tiller",'https://soundcloud.com/user-506091047/sets/true-to-self'),
    ("Five", "Feed Tha Streets", "Roddy Ricch", 'https://soundcloud.com/roddyricch/sets/feed-tha-streets'),
    ("Six", "Life B4 Fame", "Quando Rondo", 'https://soundcloud.com/quandorondo/sets/life-b4-fame-2');

CREATE TABLE featured_price(
    featured_id INT AUTO_INCREMENT NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    primary key(featured_id)
);

INSERT INTO featured_price (price)
VALUES
(9.99),
(8.99),
(11.99),
(10.99),
(7.99),
(8.99);

SELECT featured_price.featured_id, featured_price.price FROM featured_price INNER JOIN featured ON featured_price.featured_id = featured.featured_id
GROUP BY featured_id;

CREATE TABLE atoz
AS (SELECT * FROM albums ORDER BY album_title);

CREATE TABLE ztoa
AS (SELECT * FROM albums ORDER BY album_title DESC);

CREATE TABLE price_up
AS (SELECT * FROM album_price ORDER BY price);

CREATE TABLE price_down
AS (SELECT * FROM album_price ORDER BY price DESC);

CREATE TABLE subscriber (
  subscriber_id INT AUTO_INCREMENT NOT NULL,
  subscriber_firstName VARCHAR(45) NOT NULL,
  subscriber_lastName VARCHAR(45) NOT NULL,
  subscriber_email VARCHAR(45) NOT NULL,
  primary key(subscriber_id)
);