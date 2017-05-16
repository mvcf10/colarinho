-- Tabela Comment
CREATE TABLE IF NOT EXISTS comment (
  id SERIAL NOT NULL PRIMARY KEY,
  author VARCHAR(255) NOT NULL,
  content VARCHAR(255) NOT NULL,
  date DATE NOT NULL,
  news_id INT NOT NULL REFERENCES news(id)

);
CREATE INDEX comment_idx ON comment (id);