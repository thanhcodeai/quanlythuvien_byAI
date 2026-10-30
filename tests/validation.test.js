import test from 'node:test';import assert from 'node:assert/strict';import {dates,paging,id} from '../src/validation.js';
test('dates reject equal, reverse, invalid calendar dates',()=>{for(const pair of [['2026-01-01','2026-01-01'],['2026-02-01','2026-01-01'],['2026-02-30','2026-03-15']])assert.throws(()=>dates(...pair));assert.doesNotThrow(()=>dates('2026-01-01','2026-01-02'));});
test('pagination and IDs reject unsafe input',()=>{for(const q of [{page:0},{page:1.1},{pageSize:1000}])assert.throws(()=>paging(q));assert.throws(()=>id('1 OR 1'));assert.equal(id('42'),'42');});
