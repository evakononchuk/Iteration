"use strict";

const ages = (persons) => {
  const staf = {};

  for (const i in persons) {
    const info = persons[i];
    staf[i] = info.died - info.born;
  }
  return staf;
};
module.exports = { ages };
