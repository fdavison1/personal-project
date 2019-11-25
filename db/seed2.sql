DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS hash;

--------------------USERS

CREATE TABLE users
(
  id SERIAL PRIMARY KEY,
  username VARCHAR(20),
  project_id INT REFERENCES projects(project_id)
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