import { Pool } from 'pg';
import 'dotenv/config';
const host = process.env.DATABASE_HOST;
const port = process.env.DATABASE_PORT;
const user = process.env.DATABASE_USER;
const password = process.env.DATABASE_PASSWORD;
const database = process.env.DATABASE_NAME;

const pool = new Pool({
    host,
    port,
    user,
    password,
    database,
})

pool.on('connect', () => {
  console.log('✅ Connected to PostgreSQL');
});

pool.on('error', (err) => {
  console.error('❌ PostgreSQL error:', err);
});

export default pool