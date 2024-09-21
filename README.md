# courier-validation

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Installation
```bash
npm install courier-validation
```

## Usage

```ts
import { courier } from 'courier-validation'

console.log(courier.get('SF1000000000000')) // {  alias: 'SF', name: '顺丰', reg: /^SF[a-z0-9]\d{12}$/i, }
console.log(courier.validate('SF', 'SF1000000000000')) // true
```

## API

### courier.get(orderNumber: string): Courier
获取快递公司信息

### courier.validate(courierCode: string, orderNumber: string): boolean
验证快递单号是否合法

获取快递公司信息

## License

[MIT](./LICENSE) License © 2024-PRESENT [BF-zh](https://github.com/BF-zh)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/courier-validation?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/courier-validation
[npm-downloads-src]: https://img.shields.io/npm/dm/courier-validation?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/courier-validation
[bundle-src]: https://img.shields.io/bundlephobia/minzip/courier-validation?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=courier-validation
[license-src]: https://img.shields.io/github/license/BF-zh/courier-validation.svg?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/BF-zh/courier-validation/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/courier-validation
