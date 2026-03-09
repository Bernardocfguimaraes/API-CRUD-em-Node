import { sql } from "./db.js";

sql`
  CREATE TABLE videos (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    duration INTEGER
  );
`.then(() => {
  console.log('Tabela criada!');
}).catch((err) => {
  console.error('Erro ao criar tabela:', err);
});
