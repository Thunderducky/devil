import test from 'ava';

import { loggers } from './';

test('loggers - smoke test', (t) => {
  t.notThrows(() => loggers.log("hello world"));
  t.notThrows(() => loggers.dim("hello world"));
  t.notThrows(() => loggers.inspect({ hi: "hello world" }));
});