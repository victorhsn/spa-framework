 import sum from './sum';
 import {expect}  from 'chai';
 import {stub} from 'sinon';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).to.equal(3);
});

test('adds 1 + 2 to equal 3 com callback', () => {
  const callback = stub();
  expect(sum(1, 2, callback)).to.equal(3);
  expect(callback.getCall(0).args[0]).to.equal(3);
});
