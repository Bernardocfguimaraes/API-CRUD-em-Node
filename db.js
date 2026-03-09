import 'dotenv/config'; 
import http from 'node:http';
import { neon } from '@neondatabase/serverless';

export const sql = neon(process.env.DATABASE_URL);

export const requestHandler = async (req, res) => {
  const result = await sql`SELECT version()`;
  const { version } = result[0];
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(version);
};