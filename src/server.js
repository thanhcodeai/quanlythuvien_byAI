import app from './app.js';
import {pool} from './db.js';
const hours=Number(process.env.SESSION_HOURS||8),min=Number(process.env.PASSWORD_MIN_LENGTH||8);
if(!Number.isFinite(hours)||hours<=0||!Number.isInteger(min)||min<1||min>72)throw Error('Invalid authentication policy configuration');
await pool.query('SELECT 1 FROM users LIMIT 1');
const server=app.listen(Number(process.env.PORT||3000),'0.0.0.0',()=>console.log('Library website running'));
for(const signal of ['SIGINT','SIGTERM'])process.on(signal,()=>server.close(async()=>{await pool.end();process.exit(0);}));
