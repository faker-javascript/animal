import {expectType} from 'tsd';
import animal from './index.js';

expectType<string>(animal());
expectType<string>(animal({type: 'zoo'}));
expectType<string>(animal({locale: 'en_US'}));
expectType<string>(animal({type: 'zoo', locale: 'en_US'}));
