import { test } from 'tape';
import { Apple } from './apple';

test('test getApple', t => {
  let appleOne = new Apple;
  t.equal(appleOne.getApple(), 'apple');
  t.end();
})