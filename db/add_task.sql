INSERT INTO tasks (content, droppable_id, user_id)
VALUES 

('new task', $1, $1);

SELECT * FROM tasks;