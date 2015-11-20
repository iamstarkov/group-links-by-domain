import { groupBy, prop, pipe, replace, uniq, toPairs, map, zipObj } from 'ramda';
import { parse } from 'url';

const group = pipe(
  map(replace('www.', '')),
  uniq,
  groupBy(pipe(parse, prop('host'))),
  toPairs,
  map(zipObj(['domain', 'links']))
);

export default function groupLinksByDomain(input) {
  if (!input) return;
  return group(input);
};
