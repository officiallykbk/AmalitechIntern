CREATE TYPE priorities AS ENUM ('low', 'medium', 'high');

CREATE TABLE IF NOT EXISTS Tasks(
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    due_date DATE,
    priority priorities,
    completion_status BOOLEAN DEFAULT false,

)
