INSERT INTO users (username)
VALUES ($1)
returning *;