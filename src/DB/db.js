import {createPool} from 'mysql2/promise';

export const pool = createPool({
    host: 'db-tomaturno.cc85zg2j5ysq.us-west-2.rds.amazonaws.com',
    port: '3306',
    user: 'admin',
    password: 'R3dLB67sxz!d6',
    database: 'LUIS'
})

