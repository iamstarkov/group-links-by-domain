import { deepEqual } from 'assert';
import domainLinks from './index';

const links = [
  'http://what.ever/a/',
  'http://what.ever/b/',
  'http://www.what.ever/c/',
  'http://foo.bar/1/',
  'http://www.foo.bar/1/',
  'http://foo.bar/2/',
  'http://foo.bar/3/',
  'http://www.baz.com/boo/'
];

it('should domainLinks', () =>
  deepEqual(domainLinks(links), [
    { domain: 'what.ever',
      links: [
        'http://what.ever/a/',
        'http://what.ever/b/',
        'http://what.ever/c/' ]},
    { domain: 'foo.bar',
      links: [
        'http://foo.bar/1/',
        'http://foo.bar/2/',
        'http://foo.bar/3/' ]},
    { domain: 'www.baz.com',
      links: [
        'http://www.baz.com/boo/' ]}
  ]));

it('should handle nested domains links', () =>
  deepEqual(domainLinks([
    'http://carsales.com.au/',
    'http://seek.com.au/'
  ]), [
    { domain: 'carsales.com.au',
      links: [ 'http://carsales.com.au/' ]},
    { domain: 'seek.com.au',
      links: [ 'http://seek.com.au/' ]}
  ]));

it('should domainLinks invalid input', () =>
  deepEqual(domainLinks(), undefined));
