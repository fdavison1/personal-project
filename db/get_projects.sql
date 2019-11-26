SELECT * FROM projects
JOIN users ON user_id = id
WHERE id = $1;