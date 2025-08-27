const ubase = require('ubase.js');

function mytest (input, expected, name) {
    var c = ubase.basify(input);
    console.log (input + " ==> " + c);   
    if (c == expected) {
	console.log (name + ": OK");
    } else {
	throw (name + ": ERROR ");
    }
}

mytest ('1 → Ŧħïŝ ịṣ Ĝóôđ!', '1 → This is Good!', "Test 1");

ubase.set_strip ("?");
mytest ('2 → Bøǹĵöůɍ', '2 ? Bonjour', "Test 2 (set_strip)");

ubase.set_strip (undefined);
mytest ('3 → Vũ Ngọc Phan', '3 → Vu Ngoc Phan', "Test 3 (NFD)");

mytest ('4 → Vũ Ngọc Phan', '4 → Vu Ngoc Phan', "Test 4 (NFC)");
