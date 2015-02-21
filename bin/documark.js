#!/usr/bin/env node

'use strict';

process.title = 'documark';

var path    = require('path');
var nopt    = require('nopt');
var resolve = require('resolve').sync;
var docRoot = process.cwd();
var parsed, documarkPath;

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
	var pkg = require('../package.json');
	[
		'Unable to find local Documark package.',
		'',
		'To install it, run "npm i documark --save" in your document root:',
		docRoot,
		'',
		'Need help? Go to: ' + pkg.homepage
	].forEach(function (s) { console.error(s); });
	process.exit(1);
}

// Require local documark and run it
require(documarkPath).cli();
