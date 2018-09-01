import { map } from 'ramda';
import flashCard from './flashCard';

it('should return an object', () => {
  expect(flashCard()).toBeInstanceOf(Object);
});

it('should return an empty card', () => {
  const card = flashCard();
  map(c => expect(c.title).toEqual(''), card);
  map(c => expect(c.question).toEqual(''), card);
});
