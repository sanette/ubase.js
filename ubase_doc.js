/**

`ubase.js` is a javascript library for removing accents, diacritics
(and more) from utf8 strings.

Many utf8 characters are "based" on latin letters; that's clear for
accents, like "é" which is based on "e", but also for more rare
symbols like "🅴" or "Ǝ" ! The idea of this simple library is to give
you back the *base* letter of these characters.

`ubase.js` can be used in node or in the browser. See
https://github.com/sanette/ubase.js

*/

/** Replace all UTF8 characters based on latin letters of the input
string by their "base" (ASCII) letter; in particular this will
remove all accents and diacritics.
The behavior on malformed UTF8, or non-ASCII UTF8 chars that are not based
 on latin letter is controlled by set_malformed and set_strip.
@arg {string} utf8-encoded string
@return {string} the basified string */
function basify(s) {}

/** Set the string used to replace any malformed utf8 char in `basify`.
Default is '?'.
@arg {string} the replacement string */
function set_malformed(s) {}

/**
Set the string used by `basify` to replace any non-ASCII utf8 char
that is not based on a latin char, like '→'. It is allowed for this
string to be the empty string (hence the name "strip"). If the
argument is `undefined`, no replacement takes place (this is the
default).
@arg {string} or {undefined} the replacement string
 */
function set_strip(s) {}

/** Convert isolatin-encoded strings to UTF8.
@arg {string} the isolatin string */
function isolatin_to_utf8(s) {}

/** Convert cp1252-encoded strings (aka Windows-encoded strings) to UTF8.
@arg {string} the cp1252 string */
function cp1252_to_utf8(s) {}
