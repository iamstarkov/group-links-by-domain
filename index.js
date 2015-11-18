import { groupBy, prop, pipe, uniq, toPairs, map, zipObj } from 'ramda';
import { parse } from 'url';

const group = pipe(
  uniq,
  groupBy(pipe(parse, prop('host'))),
  toPairs,
  map(zipObj(['domain', 'links']))
);

export default function groupLinksByDomain(input) {
  if (!input) return;
  return group(input);
};
