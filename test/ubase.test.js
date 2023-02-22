const ubase = require('ubase.js');

var t1 = '1 → Ŧħïŝ ịṣ Ĝóôđ!';
var r1 = '1 → This is Good!';
var c1 = ubase.basify(t1);
console.log (t1 + "==>" + c1);
if (c1 == r1) {
    console.log ("TEST 1: OK");
} else {
    throw ("Error Test 1");
}
