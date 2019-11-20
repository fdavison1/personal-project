--create tables

CREATE TABLE tasks (
    task_id SERIAL PRIMARY KEY,
    content VARCHAR
);

CREATE TABLE projects (
    project_id SERIAL PRIMARY KEY, 
    title VARCHAR(30)
);

--dummy data

INSERT INTO tasks (content)
VALUES 
('take out the trash'),
('walk the cat'), 
('charge phone'),
('cook dinner'), 
('wash the dishes'),
('do laundry');