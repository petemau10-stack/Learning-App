import test from 'node:test';
import assert from 'node:assert/strict';
import {initialCards,matches,chooseCard,validState} from './learning.js';
test('Quiz ignores case and punctuation but checks accents',()=>{assert.ok(matches(' ¡BEBE agua! ','Bebe agua'));assert.ok(!matches('Me duele el pie','Me duelen los pies'));assert.ok(!matches('deberias','deberías'));});
test('Practice prioritizes weak cards and avoids immediate repeats',()=>{const cards=[{id:'a',known:3},{id:'b',known:0},{id:'c',known:1}];assert.equal(chooseCard(cards).id,'b');assert.equal(chooseCard(cards,'b').id,'c');assert.equal(chooseCard([],null),null);assert.equal(chooseCard([cards[0]],'a').id,'a');});
test('A2+ deck covers all requested topics',()=>{for(const topic of ['Körper','Symptome','Ernährung','Heilmittel','Imperativ','Condicional','Ratschläge'])assert.ok(initialCards.some(c=>c.topic===topic));assert.equal(new Set(initialCards.map(c=>c.id)).size,initialCards.length);});
test('Import validates data before replacing saved progress',()=>{const s={cards:initialCards,subjects:['Spanisch'],attempts:0,correct:0,tasks:{}};assert.ok(validState(s));assert.ok(!validState({...s,cards:[{front:12}]}));assert.ok(!validState({...s,subjects:[42]}));});
