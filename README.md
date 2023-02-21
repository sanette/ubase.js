# ubase.js

`ubase.js` is a javascript library for removing accents, diacritics
(and more) from utf8 strings.

Many utf8 characters are "based" on latin letters; that's clear for
accents, like "é" which is based on "e", but also for more rare
symbols like "🅴" or "Ǝ" ! The idea of this simple library is to give
you back the *base* letter of these characters.

## The `ubase.js` library

Usage is straighforward. The main function is `from_utf8`:

```js
> var ubase = require ("./ubase.js");
undefined
> ubase.from_utf8 ('Bøǹĵöůɍ');
'Bonjour'
```

You may control the behaviour of `from_utf8` in case of malformed
utf8, or non-latin characters:

+ `set_malformed ( s )` : the given string `s` will be used to replace
  any malformed utf8 char. Default is '?'.
+ `set_strip ( s )` : `s` can be either a string, or `undefined`. If
  `s` is a string, it will replace any non-ascii utf8 char that is not
  based on a latin char, like '→'. It is allowed for `s` to be the
  empty string (hence the name "strip"). If `s` is `undefined`, no
  replacement takes place.

Other helper functions:

+ `isolatin_to_utf8 ( s )`: convert the isolatin-encoded string `s` to
  utf8.
+ `cp1252_to_utf8 ( s )` : convert the cp1252-encoded (aka Windows
encoding) string `s` to utf8.

## HTML example

```html
<!DOCTYPE html>
<html>
  <body>

    <script src="./ubase.js"></script>

    <h1>Ubase</h1>

    <p>
      <script>
	document.write(from_utf8('Ŧħïŝ ịṣ Ĝóôđ!'));
      </script>
    </p>

  </body>
</html>
```

## The `ubasex.js` executable

The standalone executable version of ubase is `ubasex.js`. You can
test it with `node`:

```
$ node ubasex.js Bøǹĵöůɍ
Bonjour
```

## Source

This library is automatically generated from the `OCaml` [`ubase` version](https://github.com/sanette/ubase)  using
[`js-of-ocaml`](https://ocsigen.org/js_of_ocaml/latest/manual/overview)


## UTF8 coverage

`ubase.js` covers more than 2000 utf8 chars, it should be quite
complete. File an issue if some character is not properly basified.
