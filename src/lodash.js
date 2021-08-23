// This is a minimal reproduction from lodash@4.17.21

function lodash(value) {
  console.log('lodash')
}

function memoize () {
  console.log('memoize')
}

lodash.memoize = memoize

//module.exports = lodash;
exports = lodash;
