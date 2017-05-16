-- Tabela News
CREATE TABLE IF NOT EXISTS news (
  id SERIAL NOT NULL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  date DATE NOT NULL,
  headline_content VARCHAR(255) NOT NULL,
  headline_image VARCHAR(255) NOT NULL,
  content VARCHAR(255) NOT NULL

);
CREATE INDEX news_idx ON news (id);