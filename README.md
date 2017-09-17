 
# React Native Overlay Spinner

[![NPM version][npm-image]][npm-url]
[![NPM downloads][npm-downloads]][npm-url]
[![MIT License][license-image]][license-url]

> Lightweight, straightforward, easy-to-use loading spinner for React Native


## Index

* [Install](#install)
* [Usage](#usage)
* [Development](#development)
* [Contributors](#contributors)
* [License](#license)


## Install

```bash
npm install --save react-native-overlay-spinner
```


## Usage

This usage shows the default styles and properties.

| Property      | Type           |   Default  | Description  |
|---------------|----------------|------------|--------------|
| color         | `string`      |   `#ffffff` | Changes the spinner's color. Will accept standard colors like `blue`, and hex values like `#f6f6f6`.
| backgroundColor  | `string`      |    `rgba(0, 0, 0, 0.25)` | Color and opacity for full-screen spinner backdrop. rgba is rgb + alpha channel. [MDN - rgba](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color?v=a)|
| size          | `string` | `large` | Set the spinner's size. Possible values are `small`, `large`|
| text  | `string`      |    `""` | Optional text field to be shown.|
| textColor  | `string`      |    `#ffffff` | Hex value for text color|
| textColor  | `integer`      |    `18` | Font size for text|





## Development

1. Fork/clone this repository
2. Make changes in `src/` directory
3. Submit a pull request


## Contributors

* Jameson Knoll <jameson.knoll@gmail.com>


## License

[MIT][license-url]


[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE
[npm-image]: http://img.shields.io/npm/v/react-native-overlay-spinner.svg?style=flat
[npm-url]: https://npmjs.org/package/react-native-overlay-spinner