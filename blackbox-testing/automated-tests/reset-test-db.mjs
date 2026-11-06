// Destructive only within a dedicated bb_* database. Stop app processes before use.
const mysql=await import(process.env.BB_MYSQL_MODULE||'mysql2/promise');
const name=process.env.DB_NAME;
if(process.argv[2]!=='--reset-disposable-db'||!/^bb_[a-z0-9_]+$/.test(name||''))throw Error('Requires --reset-disposable-db and DB_NAME starting bb_');
if(!['localhost','127.0.0.1'].includes(process.env.DB_HOST||''))throw Error('Local database only');
const c=await mysql.createConnection({host:process.env.DB_HOST,port:Number(process.env.DB_PORT||3307),user:process.env.DB_USER,password:process.env.DB_PASSWORD});
await c.query('DROP DATABASE IF EXISTS `'+name+'`');
await c.query('CREATE DATABASE `'+name+'` CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci');
await c.end();console.log('Reset disposable database '+name+'; migrate and seed again before a new run');
