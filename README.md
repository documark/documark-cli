# Documark CLI

[![npm version](https://badge.fury.io/js/documark-cli.svg)](http://badge.fury.io/js/documark-cli)
[![dependency status](https://david-dm.org/documark/documark-cli.svg)](https://david-dm.org/documark)

> Command-line interface for Documark.

## Usage

Install this globally and you'll have access to the `documark` command anywhere on your system.

```bash
npm install -g documark-cli
```

Note: The job of the `documark` command is to load and run the version of [Documark][documark] you have installed locally to your project, irrespective of its version. Starting with Documark v0.4, you should never install Documark itself globally. For more information about why, [please read this][global-vs-local].

[documark]: https://www.npmjs.com/package/documark
[global-vs-local]: http://blog.nodejs.org/2011/03/23/npm-1-0-global-vs-local-installation
