# group-links-by-domain

[![Greenkeeper badge](https://badges.greenkeeper.io/iamstarkov/group-links-by-domain.svg)](https://greenkeeper.io/)

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]

> group links by domain

## Install

    npm install --save group-links-by-domain

## Usage

```js
import domainLinks from 'group-links-by-domain';

const links = [
  'http://what.ever/a/',
  'http://what.ever/b/',
  'http://www.what.ever/c/',
  'http://foo.bar/1/',
  'http://www.foo.bar/1/',
  'http://foo.bar/2/',
  'http://foo.bar/3/',
  'http://www.baz.com/boo/',
];

domainLinks(links); /* [
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
]; */
```

## License

MIT © [Vladimir Starkov](https://iamstarkov.com)

[npm-url]: https://npmjs.org/package/group-links-by-domain
[npm-image]: https://img.shields.io/npm/v/group-links-by-domain.svg?style=flat-square

[travis-url]: https://travis-ci.org/iamstarkov/group-links-by-domain
[travis-image]: https://img.shields.io/travis/iamstarkov/group-links-by-domain.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/iamstarkov/group-links-by-domain
[coveralls-image]: https://img.shields.io/coveralls/iamstarkov/group-links-by-domain.svg?style=flat-square

[depstat-url]: https://david-dm.org/iamstarkov/group-links-by-domain
[depstat-image]: https://david-dm.org/iamstarkov/group-links-by-domain.svg?style=flat-square
