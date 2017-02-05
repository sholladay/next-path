import test from 'ava';
import nextPath from '.';

test('nextPath() basics', (t) => {
    t.is(typeof nextPath('a', 'b'), 'string');
    t.is(nextPath('/a/b/c/d', '/a'), '/a/b/c');
});

test('handles relative paths', (t) => {
    t.is(nextPath('a', 'a/b/c'), 'a/b');
    t.is(nextPath('/a/b/c/d', '../a'), '/a/b/c');
    t.is(nextPath('../../a', '/foo'), '../..');
});
