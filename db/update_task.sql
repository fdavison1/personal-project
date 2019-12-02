UPDATE tasks
SET content = $2
WHERE task_id = $1;
