import flashCard from './flashCard';

it('should return an object', () => {
  expect(flashCard()).toBeInstanceOf(Object);
});

it('should return an empty card', () => {
  const card = flashCard();
  card.map(c => expect(c.title).toEqual(''));
});
