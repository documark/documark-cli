#!/usr/bin/env node

'use strict';

process.title = 'documark';

var path    = require('path');
var nopt    = require('nopt');
var resolve = require('resolve').sync;
var docRoot = process.cwd();
var parsed, documarkPath;

function error(lines) {
	var pkg = require('../package.json');

	lines.concat([
		'',
		'Need help? Go to: ' + pkg.homepage
	]).forEach(function (s) {
		console.error(s);
	});

	process.exit(1);
}

// Determine document root
parsed = nopt({
	'file': path
}, {
	'f': ['--file']
}, process.argv, 2);

if (parsed.file) {
	docRoot = path.dirname(parsed.file);
}

try {
	documarkPath = resolve('documark', { basedir: docRoot });
} catch (ex) {
	error([
		'Unable to find local Documark package.',
		'',
		'To install it, run "npm i documark --save" in your document root:',
		docRoot
	]);
}

// Require local documark and run it
var Documark = require(documarkPath);

if (typeof Documark !== 'object' || typeof Documark.cli !== 'function') {
	error([
		'Local Documark package does not provide CLI commands.',
		'Make sure it\'s version 0.4.0 or higher.'
	]);
}

Documark.cli();
