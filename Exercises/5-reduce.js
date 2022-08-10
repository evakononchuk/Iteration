"use strict";

const sum = (...args) => args.reduce((acc, args) => acc + args, 0);

module.exports = { sum };
