const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

//unit tests for fizzbuzzer function
describe('fizzBuzzer', function() {

	//test the normal case
	it('should return fizz, buzz or fizz-buzz',function() {
		//for normal inputs
		const normalInputs = [
		{ input: 6, expected: 'fizz'},
		{ input: 10, expected: 'buzz'},
		{ input: 30, expected: 'fizz-buzz'},
		{ input: 2, expected: 2},
		{ input: 0, expected: 'fizz-buzz'},
		{ input: -9, expected: 'fizz'}
		];

		normalInputs.forEach(function(input) {
			const answer = fizzBuzzer(input.input);
			answer.should.equal(input.expected);
		});
	});

	it('should raise an error if input is not a number', function() {
		//bad inputs
		const badInputs = ['a', '1', true];

		badInputs.forEach(function(input) {
			(function() {
				fizzBuzzer(input);
			}).should.throw(Error);
		});
	});
});