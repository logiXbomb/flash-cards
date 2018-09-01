import { Identity } from 'monet';
import { mergeDeepRight } from 'ramda';

const DEFAULT_CARD = {
  title: '',
  question: '',
  answer: '',
}

const create = _driver => card => _driver.create(mergeDeepRight(
  DEFAULT_CARD,
  (card || {}),
));

const flashCard = _driver => {
  return {
    create: create(_driver),
  };   
};

export default flashCard;

