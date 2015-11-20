import { deepEqual } from 'assert';
import domainLinks from './index';

it('should domainLinks', () =>
  deepEqual(domainLinks([
    'http://what.ever/a/',
    'http://what.ever/b/',
    'http://www.what.ever/c/',
    'http://foo.bar/1/',
    'http://www.foo.bar/1/',
    'http://foo.bar/2/',
    'http://foo.bar/3/',
  ]), [
    { domain: 'what.ever',
      links: [
        'http://what.ever/a/',
        'http://what.ever/b/',
        'http://what.ever/c/' ]},
    { domain: 'foo.bar',
      links: [
        'http://foo.bar/1/',
        'http://foo.bar/2/',
        'http://foo.bar/3/' ]}
  ]));

it('should domainLinks invalid input', () =>
  deepEqual(domainLinks(), undefined));
