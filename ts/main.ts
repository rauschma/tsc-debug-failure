import { AssertionError } from 'node:assert/strict';

throw new AssertionError({
  message: 'Hello',
  actual: 3,
  expected: 3,
});
