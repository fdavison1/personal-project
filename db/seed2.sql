DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS hash;

--------------------USERS

CREATE TABLE users
(
  id SERIAL PRIMARY KEY,
  username VARCHAR(20)
);

--dummy data
-- INSERT INTO users (username, project_id)
-- VALUES
-- ('fred', 1);

--------------------HASH

CREATE TABLE hash 
(
    hash_id SERIAL PRIMARY KEY,
    hash TEXT,
    user_id INT REFERENCES users
);