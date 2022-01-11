import test from 'ava';
import animal from './index.js';

test('animal return type to be string', t => {
    t.is(typeof animal(), 'string');
});

test('animal with type and locale return type to be string', t => {
    t.is(typeof animal({type: 'zoo', locale: 'en_US'}), 'string');
});
