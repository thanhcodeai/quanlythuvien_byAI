import {readFile} from 'node:fs/promises';
import {pool} from '../src/db.js';
try {for(const sql of (await readFile(new URL('./schema.sql',import.meta.url),'utf8')).split(';').map(x=>x.trim()).filter(Boolean)) await pool.query(sql); console.log('Schema ready');}finally{await pool.end();}
