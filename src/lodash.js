;(function() {

  function lodash(value) {
    console.log('lodash')
  }

  function memoize () {
    console.log('memoize')
  }

  lodash.memoize = memoize

  //var freeExports = typeof exports == 'object' && exports && exports;
  //var freeModule = freeExports && typeof module == 'object' && module && module;

  var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
  var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

  // Export lodash.
  var _ = lodash;

  // Export for Node.js.
  (freeModule.exports = _)._ = _;
  // Export for CommonJS support.
  freeExports._ = _;
}.call(this));
