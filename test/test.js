/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var Int32Array = require( '@stdlib/array-int32' );
var Complex128Array = require( '@stdlib/array-complex128' );
var toAccessorArray = require( '@stdlib/array-base-to-accessor-array' );
var isSameComplex128 = require( '@stdlib/assert-is-same-complex128' );
var Complex128 = require( '@stdlib/complex-float64-ctor' );
var at = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof at, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an array element (generic)', function test( t ) {
	var actual;
	var x;

	x = [ 1, 2, 3, 4, 5, 6 ];

	actual = at( x, 1 );
	t.strictEqual( actual, 2, 'returns expected value' );

	actual = at( x, 4 );
	t.strictEqual( actual, 5, 'returns expected value' );

	actual = at( x, -1 );
	t.strictEqual( actual, 6, 'returns expected value' );

	actual = at( x, -x.length );
	t.strictEqual( actual, 1, 'returns expected value' );

	t.end();
});

tape( 'the function returns `undefined` if provided an out-of-bounds index (generic)', function test( t ) {
	var actual;
	var x;

	x = [ 1, 2, 3, 4, 5, 6 ];

	actual = at( x, 10 );
	t.strictEqual( actual, void 0, 'returns expected value' );

	actual = at( x, 40 );
	t.strictEqual( actual, void 0, 'returns expected value' );

	actual = at( x, -10 );
	t.strictEqual( actual, void 0, 'returns expected value' );

	actual = at( x, -40 );
	t.strictEqual( actual, void 0, 'returns expected value' );

	t.end();
});

tape( 'the function returns an array element (typed array)', function test( t ) {
	var actual;
	var x;

	x = new Int32Array( [ 1, 2, 3, 4, 5, 6 ] );

	actual = at( x, 1 );
	t.strictEqual( actual, 2, 'returns expected value' );

	actual = at( x, 4 );
	t.strictEqual( actual, 5, 'returns expected value' );

	actual = at( x, -1 );
	t.strictEqual( actual, 6, 'returns expected value' );

	actual = at( x, -x.length );
	t.strictEqual( actual, 1, 'returns expected value' );

	t.end();
});

tape( 'the function returns `undefined` if provided an out-of-bounds index (typed array)', function test( t ) {
	var actual;
	var x;

	x = new Int32Array( [ 1, 2, 3, 4, 5, 6 ] );

	actual = at( x, 10 );
	t.strictEqual( actual, void 0, 'returns expected value' );

	actual = at( x, 40 );
	t.strictEqual( actual, void 0, 'returns expected value' );

	actual = at( x, -10 );
	t.strictEqual( actual, void 0, 'returns expected value' );

	actual = at( x, -40 );
	t.strictEqual( actual, void 0, 'returns expected value' );

	t.end();
});

tape( 'the function returns an array element (complex typed array)', function test( t ) {
	var actual;
	var x;

	x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

	actual = at( x, 1 );
	t.strictEqual( isSameComplex128( actual, new Complex128( 3.0, 4.0 ) ), true, 'returns expected value' );

	actual = at( x, 3 );
	t.strictEqual( isSameComplex128( actual, new Complex128( 7.0, 8.0 ) ), true, 'returns expected value' );

	actual = at( x, -1 );
	t.strictEqual( isSameComplex128( actual, new Complex128( 7.0, 8.0 ) ), true, 'returns expected value' );

	actual = at( x, -x.length );
	t.strictEqual( isSameComplex128( actual, new Complex128( 1.0, 2.0 ) ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `undefined` if provided an out-of-bounds index (complex typed array)', function test( t ) {
	var actual;
	var x;

	x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

	actual = at( x, 10 );
	t.strictEqual( actual, void 0, 'returns expected value' );

	actual = at( x, 40 );
	t.strictEqual( actual, void 0, 'returns expected value' );

	actual = at( x, -10 );
	t.strictEqual( actual, void 0, 'returns expected value' );

	actual = at( x, -40 );
	t.strictEqual( actual, void 0, 'returns expected value' );

	t.end();
});

tape( 'the function returns an array element (accessors)', function test( t ) {
	var actual;
	var x;

	x = toAccessorArray( [ 1, 2, 3, 4, 5, 6 ] );

	actual = at( x, 1 );
	t.strictEqual( actual, 2, 'returns expected value' );

	actual = at( x, 4 );
	t.strictEqual( actual, 5, 'returns expected value' );

	actual = at( x, -1 );
	t.strictEqual( actual, 6, 'returns expected value' );

	actual = at( x, -x.length );
	t.strictEqual( actual, 1, 'returns expected value' );

	t.end();
});

tape( 'the function returns `undefined` if provided an out-of-bounds index (accessors)', function test( t ) {
	var actual;
	var x;

	x = toAccessorArray( [ 1, 2, 3, 4, 5, 6 ] );

	actual = at( x, 10 );
	t.strictEqual( actual, void 0, 'returns expected value' );

	actual = at( x, 40 );
	t.strictEqual( actual, void 0, 'returns expected value' );

	actual = at( x, -10 );
	t.strictEqual( actual, void 0, 'returns expected value' );

	actual = at( x, -40 );
	t.strictEqual( actual, void 0, 'returns expected value' );

	t.end();
});
