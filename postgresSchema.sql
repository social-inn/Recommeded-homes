DROP DATABASE IF EXISTS recommended_homes;
CREATE DATABASE recommended_homes;

\c recommended_homes;

DROP TABLE IF EXISTS homes;
DROP TABLE IF EXISTS recommended;

CREATE TABLE homes (
    id                SERIAL PRIMARY KEY,
    image_url         TEXT,
    home_description  TEXT,
    house_type        TEXT,
    city              TEXT,
    price             TEXT,
    stars             DECIMAL(5,2),
    num_reviews       INT NOT NULL
);

CREATE TABLE recommended (
    home_id                INT NOT NULL,
    recommendation_id      INT NOT NULL
);

\timing on

COPY homes(image_url, home_description, house_type, city, price, stars, num_reviews) FROM '/Users/bill/Desktop/Social_Inn/Social-Inn-recommended-homes/db/csvFiles/dataHomesPostgres.csv' DELIMITER ',' CSV HEADER;
COPY recommended(home_id, recommendation_id) FROM '/Users/bill/Desktop/Social_Inn/Social-Inn-recommended-homes/db/csvFiles/dataRecommendations.csv' DELIMITER ',' CSV HEADER;

CREATE INDEX indx_description ON homes(home_description);
CREATE INDEX indx_home ON recommended(home_id);