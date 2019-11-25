DROP TABLE IF EXISTS hash;
DROP TABLE IF EXISTS projects;
DROP TABLE IF EXISTS tasks;
DROP TABLE IF EXISTS users;

--------------------USERS

CREATE TABLE users
(
  id SERIAL PRIMARY KEY,
  username VARCHAR(20)
);

--------------------HASH

CREATE TABLE hash 
(
    hash_id SERIAL PRIMARY KEY,
    hash TEXT,
    user_id INT REFERENCES users
);

--------------------PROJECTS

CREATE TABLE projects (
    project_id SERIAL PRIMARY KEY, 
    title VARCHAR(30),
    droppable_id VARCHAR(5),
    user_id INT REFERENCES users
);

--------------------TASKS
CREATE TABLE tasks (
    task_id SERIAL PRIMARY KEY,
    content VARCHAR,
    droppable_id VARCHAR(5),
    user_id INT REFERENCES users
);

--------------------SELECT * 
SELECT * FROM projects;
SELECT * FROM hash;
SELECT * FROM users;
SELECT * FROM tasks;