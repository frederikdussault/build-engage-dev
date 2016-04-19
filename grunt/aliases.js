module.exports = {
  'default': [ "watch" ],
  'lint': [
    'jshint',
    'csslint'
  ],
  'build': [
    'lint',
    'mocha',
    'notify'
  ]
};