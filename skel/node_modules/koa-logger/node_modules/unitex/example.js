var unit = require('.');

var datafmt = unit.formatter({ atomic: true, trailing: true, unit: 'iB', base: 1024, round: true });
var timefmt = unit.formatter({ unit: 's', prefix: -1 });

var tests = [
	['unintrusive', unit.format(1), '1'],
	['basic', unit.format(1234), '1.234k'],
	['prefix', unit.format(1234, { prefix: 2 }), '1.234G'],
	['-prefix', unit.format(1234, { prefix: -1 }), '1.234'],
	['unit, base', unit.format(1024, { unit: 'iB', base: 1024 }), '1 kiB'],
	['prefix, unit, base', unit.format(1024, { prefix: 1, unit: 'B', base: 1024 }), '1 MB'],
	['trailing', unit.format(1024, { prefix: 1, unit: 'B', base: 1024, trailing: true }), '1.000 MB'],
	['atomic', unit.format(234, { unit: 'B', atomic: true, base: 1024 }), '234 B'],
	['atomic, prefix', unit.format(234, { prefix: 1, unit: 'B', atomic: true, base: 1024 }), '234 KB'],
	['too big', unit.format(1e25, { trailing: true }), '10.000Y'],
	['too small', unit.format(1e-25, { unit: 'N' }), '0.1 yN'],
	['negative', unit.format(-123213), '-123.213k'],
	['noround', unit.format(10.1, { atomic: true, round: false }), '10.1'],
	['round', unit.format(10.1, { atomic: true, round: true }), '10'],
	['df-basic', datafmt(1024), '1.000 KiB'],
	['-df-basic', datafmt(-10), '-10 iB'],
	['tf-basic', timefmt(1000), '1 s'],
	['tf-basic', timefmt(123), '123 ms'],
	['exportsi', unit.siprefix.length, 17],
	['exportiec', unit.iecprefix.length, 9]
];

tests.forEach(function(test) {
	console.log(test[2] instanceof Function ? test[2](test[1]) : test[1] == test[2], test[0], test[1]);
});
