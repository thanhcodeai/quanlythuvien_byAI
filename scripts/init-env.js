import {existsSync,readFileSync,writeFileSync} from 'node:fs';
import {randomBytes} from 'node:crypto';
if(!existsSync('.env')){const secret=()=>randomBytes(24).toString('hex');let s=readFileSync('.env.example','utf8').replace('DB_PASSWORD=\n','DB_PASSWORD='+secret()+'\n').replace('ADMIN_PASSWORD=\n','ADMIN_PASSWORD='+secret()+'\n');s+='\nDB_ROOT_PASSWORD='+secret()+'\n';writeFileSync('.env',s,{mode:0o600});console.log('Created local .env; secrets were not printed.');}else console.log('Existing .env preserved.');
