[
  'env',
  'exit',
  'launch',
  'logger',
  'module',
  'object',
  'pluginResolution',
  'request',
  'spinner',
  'validate'
].forEach(m => {
  Object.assign(exports, require(`./lib/${m}`))
})

exports.chalk = require('chalk')
exports.execa = require('execa')
