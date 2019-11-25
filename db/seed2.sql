--------------------USERS

DROP TABLE IF EXISTS users;

CREATE TABLE users
(
  id SERIAL PRIMARY KEY,
  username VARCHAR(120),
  project_id INT REFERENCES projects(project_id),
  hash_id TEXT REFERENCES hash(id)
);

--dummy data
INSERT INTO users (username, project_id)
VALUES
('fred', 1);


--------------------HASH

DROP TABLE IF EXISTS hash;

CREATE TABLE hash 
(
    hash_id SERIAL PRIMARY KEY,
    hash TEXT
);