# OpenRTP

## Table of Contents

- [Screenshots](#screenshots)
- [Install](#install)
- [Introduction](#introduction)
- [HowToUse](#howtouse)
- [Configuration](#configuration)
- [Documentation](#documentation)
- [ChangeLog](#changelog)


## Screenshots

[Click](https://github.com/treegex/openrtp/tree/main/screenshots) to see openRTP example screenshots 


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

## HowToUse

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

openRTP({
    fileLocation: 'openrtp.yaml',
    host: '127.0.0.1',
    port: '3000',
    route: '/io/docs'
});
```


`fileLocation` => `Yaml file path`

`port` => `OpenRTP express port`

`host` => `OpenRTP express host`

`route` => `Is the path to display the output of the yaml file in the rest api`


## Documentation

It gives you information about the yaml file structure, [click](https://github.com/treegex/openrtp/tree/main/docs/docs.md) for more information


## ChangeLog

#### Version 1.x
[Change Log](https://github.com/treegex/openrtp/tree/main/CHANGELOG/1.x/CHANGELOG.md)

#### Version 0.5.x
[Change Log](https://github.com/treegex/openrtp/tree/main/CHANGELOG/0.5.x/CHANGELOG.md)
