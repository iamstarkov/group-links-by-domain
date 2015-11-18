# domain-links

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]

> group links by domain

## Install

    npm install --save domain-links

## Usage

```js
import domainLinks from 'domain-links';

const links = [
  'http://what.ever/a/',
  'http://what.ever/b/',
  'http://foo.bar/1/',
  'http://foo.bar/2/',
  'http://foo.bar/3/'
];

domainLinks(links); /* [
  { domain: 'what.ever',
    links: [
      'http://what.ever/a/',
      'http://what.ever/b/' ]},
  { domain: 'foo.bar',
    links: [
      'http://foo.bar/1/',
      'http://foo.bar/2/',
      'http://foo.bar/3/' ]}
]; */
```

## API

### domainLinks(links)

#### links

*Required*  
Type: `Array` of `String`

Links

## License

MIT © [Vladimir Starkov](https://iamstarkov.com)

[npm-url]: https://npmjs.org/package/domain-links
[npm-image]: https://img.shields.io/npm/v/domain-links.svg?style=flat-square

[travis-url]: https://travis-ci.org/iamstarkov/domain-links
[travis-image]: https://img.shields.io/travis/iamstarkov/domain-links.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/iamstarkov/domain-links
[coveralls-image]: https://img.shields.io/coveralls/iamstarkov/domain-links.svg?style=flat-square

[depstat-url]: https://david-dm.org/iamstarkov/domain-links
[depstat-image]: https://david-dm.org/iamstarkov/domain-links.svg?style=flat-square
