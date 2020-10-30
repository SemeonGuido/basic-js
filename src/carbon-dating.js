const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  let activ;

  if (typeof (sampleActivity) == 'string') {
    activ = Number.parseFloat(sampleActivity);
  } else {
    activ = false;
  }

  if (!activ || activ > 15 || activ < 0) return false;

  return Math.ceil(Math.log(MODERN_ACTIVITY / activ) * HALF_LIFE_PERIOD / 0.693);
};