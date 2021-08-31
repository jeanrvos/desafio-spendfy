CREATE DATABASE spendfy_docs;

CREATE TABLE IF NOT EXISTS document (
	id SERIAL PRIMARY KEY,
    kbSize INT NOT NULL,
  	name VARCHAR(50) UNIQUE NOT NULL,
    content TEXT NOT NULL,
    createdAt DATE NOT NULL,
    deletedAt DATE
);