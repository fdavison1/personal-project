SELECT * FROM users
JOIN hash ON hash_id = id
WHERE id = $1; 