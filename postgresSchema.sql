-- DROP DATABASE IF EXISTS recommended_homes;
-- CREATE DATABASE recommended_homes;

\c recommended_homes;

DROP TABLE IF EXISTS recommended;

-- CREATE TABLE homes (
--     id                SERIAL PRIMARY KEY,
--     image             VARCHAR(250),
--     house_type        VARCHAR(100),
--     city              VARCHAR(100),
--     description       VARCHAR(100),
--     price             VARCHAR(10),
--     stars             DECIMAL(5,2),
--     num_reviews       INT NOT NULL
-- );

CREATE TABLE recommended (
    home_id                INT NOT NULL,
    recommendation_id      INT NOT NULL
);

\timing on

COPY recommended(home_id, recommendation_id) FROM '/Users/bill/Desktop/Social_Inn/Social-Inn-recommended-homes/db/csvFiles/dataRecommendations.csv' DELIMITER ',' CSV HEADER;
-- COPY homes(image, house_type, city, description, price,stars, num_reviews) FROM '/Users/bill/Desktop/Social_Inn/Social-Inn-recommended-homes/db/csvFiles/datahomes.csv' DELIMITER ',' CSV HEADER;

-- CREATE INDEX indx_home ON recommended(home_id);

