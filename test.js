import fakeProfession from './index.js';
import test from 'ava';

test('fakeAnimal return type to be string', t => {
	t.is(typeof fakeProfession(), 'string');
});

test('fakeAnimal with type and locale return type to be string', t => {
	t.is(typeof fakeProfession({type: 'zoo', locale: 'en_US'}), 'string');
});