DROP TABLE IF EXISTS users;

CREATE TABLE users
(
  id SERIAL PRIMARY KEY,
  username VARCHAR(120),
  project_id INT REFERENCES projects(project_id)
);

--dummy data
INSERT INTO users (username, project_id)
VALUES
('fred', 1);