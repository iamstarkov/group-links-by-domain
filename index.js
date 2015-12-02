import {
  __,
  any,
  equals,
  groupBy,
  invoker,
  map,
  pipe,
  prop,
  replace,
  toPairs,
  uniq,
  when,
  zipObj,
} from 'ramda';
import { parse } from 'url';

// host :: String -> String
const host = pipe(parse, prop('host'));

// removeWww :: String -> String
const removeWww = replace('www.', '');

// startsWith :: String -> String -> Boolean
const startsWith = str => pipe(invoker(1, 'indexOf')(str), equals(0));

// hasPrefixlessIn :: [String] -> String -> Boolean
const hasPrefixlessIn = list =>
  pipe(host, removeWww, startsWith, any(__, map(host, list)));

// removeRedundantWww :: [String] -> [String]
const removeRedundantWww = list =>
  map(when(hasPrefixlessIn(list), removeWww), list);

// group :: [String] -> {String: [String]}
const group = pipe(
  removeRedundantWww,
  uniq,
  groupBy(host),
  toPairs,
  map(zipObj(['domain', 'links']))
);

export default function groupLinksByDomain(input) {
  if (!input) return;
  return group(input);
};
