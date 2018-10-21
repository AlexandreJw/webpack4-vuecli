/**
 * Create by tommy on 2018/10/18
 */
const path = require('path')
const map = new Map()
map.set('assertRoot', path.resolve(__dirname, '../dist'))
map.set('assertPath', 'static')
map.set('staticAssert', path.resolve(__dirname, '../src/public'))
map.set('publicPath', '../../')
map.set('port', '8085')
module.exports = map