import { equal } from 'assert';
import domainLinks from './index';

it('should domainLinks', () =>
  equal(domainLinks('unicorns'), 'unicorns'));

it('should domainLinks invalid input', () =>
  equal(domainLinks(), undefined));
