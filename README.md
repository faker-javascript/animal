<h1 align="center">Animal</h1>
<p align="center">
Animal package provides functionality to generate a fake animal value.
</p>

<p align="center">
<a href="https://github.com/faker-javascript/animal/releases"><img alt="Version" src="https://img.shields.io/github/release/faker-javascript/animal.svg?label=version&color=green"></a> <img src="https://img.shields.io/npm/dt/@fakerjs/animal"> <a href="https://github.com/faker-javascript/animal"><img src="https://img.shields.io/badge/license-MIT-blue.svg?color=green" alt="License"></a> <img src="https://github.com/faker-javascript/animal/actions/workflows/tests.yml/badge.svg">

## Install

```
$ npm install --save @fakerjs/animal
```

## Usage

```js
import fakeAnimal from '@fakerjs/animal';

fakeAnimal();
//=> Snow Leopard

fakeAnimal({type: 'zoo'});
//=> Snow Leopard

fakeAnimal({type: 'zoo', locale: 'en_US'});
//=> Snow Leopard

// Allowed type: ocean, desert, grassland, forest, farm, pet, zoo
// Allowed locale: en_US
```

## Tests

Run tests

```
npm run test
```

## License
[The MIT License (MIT)](https://github.com/faker-javascript/animal/blob/master/LICENSE.txt)
Copyright (c) [Sergey Romanenko](https://github.com/Awilum)
