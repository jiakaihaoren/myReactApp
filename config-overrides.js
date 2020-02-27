// eslint-disable-next-line no-undef
const { override, fixBabelImports } = require('customize-cra');
// eslint-disable-next-line no-undef
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css'
    })
);