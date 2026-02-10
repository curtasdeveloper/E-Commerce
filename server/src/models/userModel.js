import pool from "../config/pool.config.js";

export const create = async ({email, password}) => {
    const result = await pool.query(
        'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id, email',
        [email, password]
    )
    return result.rows[0];
};

export const findByEmail = async (email) => {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email])
    return result.rows[0];
}