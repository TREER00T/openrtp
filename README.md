# OpenRTP

## Table of Contents

- [Install](#install)
- [Introduction](#introduction)
- [How to use](#how to use)
- [Configuration](#configuration)
- [Documentation](#documentation)
- [Change Log](#Change Log)

## Install

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/). Node.js 0.6 or higher is required.

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```sh
$ npm i openrtp
```

## Introduction

Is a text-based software framework supported by an extensive ecosystem of tools that help developers design, build,
document, and use programming relationships for socket.io.

## How to use

Write this code in js file:

```js
let openRTP = require('openrtp');

openRTP({
    fileLocation: 'openrtp.yaml'
});
```

And run this command:

```shell
npm start
```

The port of server for listening event By default is 17892, you can actually Configuration
openRTP, [click](https://github.com/treegex/openrtp#Configuration) for more information

## Configuration

```js
let openRTP = require('openrtp');
let express = require('express');

openRTP({
    fileLocation: 'openrtp.yaml',
    express: express,
    route: '/io/docs'
});
```


`fileLocation` => `Yaml file path`

`express` => `Instanse Of express`

`route` => `Is the path to display the output of the yaml file in the rest api`


## Documentation

It gives you information about the yaml file structure, [click](https://github.com/treegex/openrtp/tree/main/docs/docs.md) for more information


## Change Log

#### Version 1.x
[Change Log](https://github.com/treegex/openrtp/tree/main/CHANGELOG/1.x/CHANGELOG.md)

#### Version 0.5.x
[Change Log](https://github.com/treegex/openrtp/tree/main/CHANGELOG/0.5.x/CHANGELOG.md)