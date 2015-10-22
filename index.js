#! /usr/bin/env node
/**
 * eviljs
 * https://github.com/Aaron.goshine/eviljs
 *
 * Copyright (c) 2015 Aaron Goshine * Licensed under the MIT license.
 */

/**
 * Evalute javaScript expresses becareful of side effects
 *
 * @param  {String} javaScript
 * @return {*}
 */

var eviljs = function (javaScript) {
  if (!javaScript) return ''
    return eval(javaScript)
}

var javaScript = process.argv.slice(2)[0]
if (javaScript) {
  console.log(eviljs(javaScript))
} else {
  module.exports = eviljs
}
