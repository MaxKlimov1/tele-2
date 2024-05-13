import pg from "pg"
const { Pool } = pg
import 'dotenv/config'

const pool = new Pool({
    user: 'postgres',
    password: 'root',
    host: 'localhost',
    port: '5432',
    database: 'teleProject'
})

export default pool