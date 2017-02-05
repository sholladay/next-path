import test from 'ava';
import nextPath from '.';

test('nextPath() basics', (t) => {
    t.throws(
        () => {
            nextPath();
        },
        TypeError
    );

    t.is(typeof nextPath('a', 'b'), 'string');
    t.is(nextPath('/a', '/a/b/c'), '/a/b');
});

test('handle relative paths', (t) => {
    t.is(nextPath('', ''), '.');
    t.is(nextPath('.', '.'), '.');
    t.is(nextPath('.', './'), '.');
    t.is(nextPath('./', '.'), './');
    t.is(nextPath('./', './'), './');

    t.is(nextPath('.', 'a/b/c'), 'a');
    t.is(nextPath('./', 'a/b/c'), 'a');
    t.is(nextPath('.', './a/b/c'), 'a');

    t.is(nextPath('a', 'a/b/c'), 'a/b');
    t.is(nextPath('a', './a/b/c'), 'a/b');
    t.is(nextPath('./a', 'a/b/c'), 'a/b');
    t.is(nextPath('./a', './a/b/c'), 'a/b');
});

test('can go up', (t) => {
    t.is(nextPath('/a/b/c/d', '.'), '/a/b/c');
    t.is(nextPath('/a/b/c/d', '../a'), '/a/b/c');
    t.is(nextPath('/a/b/c/d', '/a'), '/a/b/c');
});
