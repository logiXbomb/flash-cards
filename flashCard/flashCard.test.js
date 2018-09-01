import { Identity } from 'monet';
import { map } from 'ramda';
import flashCard from './flashCard';

const _driver = {
  create: v => Identity(v),
};

describe('flashCard', () => {
  it('should return an object', () => {
    const card = flashCard(_driver);
    const result = card.create();
    map(c => expect(c).toBeInstanceOf(Object), result);
  });

  it('should return an empty card', () => {
    const card = flashCard(_driver).create();
    map(c => expect(c.title).toEqual(''), card);
    map(c => expect(c.question).toEqual(''), card);
    map(c => expect(c.answer).toEqual(''), card);
  });

  it('should set title if passed in', () => {
    const card = flashCard(_driver).create({ title: 'waffles' });
    map(c => expect(c.title).toEqual('waffles'), card);
  });
});


