/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var NINF = require( '@stdlib/constants-float64-ninf' );
var PINF = require( '@stdlib/constants-float64-pinf' );
var SMALLEST_SUBNORMAL = require( '@stdlib/constants-float64-smallest-subnormal' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var isNegativeZero = require( '@stdlib/math-base-assert-is-negative-zero' );
var isPositiveZero = require( '@stdlib/math-base-assert-is-positive-zero' );
var exp2 = require( '@stdlib/math-base-special-exp2' );
var pow = require( '@stdlib/math-base-special-pow' );
var round2 = require( './../../dist' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof round2, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `+0` if provided `+0`', function test( t ) {
	var v;

	v = round2( 0.0 );
	t.strictEqual( isPositiveZero( v ), true, 'returns +0' );

	v = round2( +0.0 );
	t.strictEqual( isPositiveZero( v ), true, 'returns +0' );

	t.end();
});

tape( 'the function returns `-0` if provided `-0`', function test( t ) {
	var v = round2( -0.0 );
	t.strictEqual( isNegativeZero( v ), true, 'returns -0' );
	t.end();
});

tape( 'the function returns `NaN` if provided a `NaN`', function test( t ) {
	var v = round2( NaN );
	t.strictEqual( isnan( v ), true, 'returns NaN' );
	t.end();
});

tape( 'the function returns `+infinity` if provided `+infinity`', function test( t ) {
	var v = round2( PINF );
	t.strictEqual( v, PINF, 'returns +infinity' );
	t.end();
});

tape( 'the function returns `-infinity` if provided `-infinity`', function test( t ) {
	var v = round2( NINF );
	t.strictEqual( v, NINF, 'returns -infinity' );
	t.end();
});

tape( 'the function returns the minimum double-precision floating-point value if provided the minimum double-precision floating-point value', function test( t ) {
	var v = round2( SMALLEST_SUBNORMAL );
	t.strictEqual( v, SMALLEST_SUBNORMAL, 'returns smallest subnormal' );
	t.end();
});

tape( 'the function overflows if provided a sufficiently large value', function test( t ) {
	var x;
	var v;

	x = exp2( 1023 );
	v = round2( x + (x/2.0) );
	t.strictEqual( v, PINF, 'returns +infinity' );

	x = -exp2( 1023 );
	v = round2( x + (x/2.0) );
	t.strictEqual( v, NINF, 'returns -infinity' );

	t.end();
});

tape( 'the function supports rounding large values', function test( t ) {
	var x;
	var v;

	x = exp2( 1023 );
	v = round2( x + (x/3.0) );
	t.strictEqual( v, x, 'returns expected value' );

	x = -exp2( 1023 );
	v = round2( x + (x/3.0) );
	t.strictEqual( v, x, 'returns expected value' );

	t.end();
});

tape( 'the function supports rounding subnormal values', function test( t ) {
	var expected;
	var x;
	var v;

	expected = pow( 2.0, -1044 );

	x = pow( 2.0, -1045 );
	v = round2( x + (x/2.0) );
	t.strictEqual( v, expected, 'returns expected value' );

	expected = pow( 2.0, -1045 );

	x = pow( 2.0, -1045 );
	v = round2( x + (x/3.0) );
	t.strictEqual( v, expected, 'returns expected value' );

	expected = -pow( 2.0, -1044 );

	x = -pow( 2.0, -1045 );
	v = round2( x + (x/2.0) );
	t.strictEqual( v, expected, 'returns expected value' );

	expected = -pow( 2.0, -1045 );

	x = -pow( 2.0, -1045 );
	v = round2( x + (x/3.0) );
	t.strictEqual( v, expected, 'returns expected value' );

	t.end();
});

tape( 'the function rounds a numeric value to the nearest power of two on a linear scale', function test( t ) {
	t.strictEqual( round2( -4.2 ), -4.0, 'returns expected value' );
	t.strictEqual( round2( -4.5 ), -4.0, 'returns expected value' );
	t.strictEqual( round2( -4.8 ), -4.0, 'returns expected value' );
	t.strictEqual( round2( 4.2 ), 4.0, 'returns expected value' );
	t.strictEqual( round2( 9.99999 ), 8.0, 'returns expected value' );
	t.strictEqual( round2( 9.5 ), 8.0, 'returns expected value' );
	t.strictEqual( round2( 9.4 ), 8.0, 'returns expected value' );
	t.strictEqual( round2( 12.0 ), 16.0, 'returns expected value' );
	t.strictEqual( round2( -12.0 ), -16.0, 'returns expected value' );
	t.strictEqual( round2( 13.0 ), 16.0, 'returns expected value' );
	t.strictEqual( round2( -13.0 ), -16.0, 'returns expected value' );
	t.strictEqual( round2( 23.0 ), 16.0, 'returns expected value' );
	t.strictEqual( round2( -23.0 ), -16.0, 'returns expected value' );
	t.strictEqual( round2( 0.0 ), 0.0, 'returns expected value' );
	t.strictEqual( round2( 27.0 ), 32.0, 'returns expected value' );
	t.strictEqual( round2( -27.0 ), -32.0, 'returns expected value' );
	t.strictEqual( round2( 48.1 ), 64.0, 'returns expected value' );
	t.strictEqual( round2( -48.1 ), -64.0, 'returns expected value' );
	t.strictEqual( round2( 0.3 ), 0.25, 'returns expected value' );
	t.strictEqual( round2( -0.3 ), -0.25, 'returns expected value' );
	t.strictEqual( round2( 0.45 ), 0.5, 'returns expected value' );
	t.strictEqual( round2( -0.45 ), -0.5, 'returns expected value' );
	t.end();
});
