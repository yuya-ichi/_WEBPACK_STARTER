const minimist = require('minimist');

const config = createConfigs(
  {
    src: './src/',
    dist: './public/',
    isProduction: false,
  },
  minimist(process.argv.slice(2), {
    string: 'env',
    default: {
      env: 'dev',
    },
  })
);

function createConfigs(settings, minimist) {
  if (minimist.env === 'pro') {
    // settings.dist = './build/' + getDate() + '/';
    settings.isProduction = true;
    console.log(`=-=-=-=-=-=-=-=
PEODUCTION MODE
=-=-=-=-=-=-=-=
`);
  }
  return settings;
}

function getDate(type) {
  const o = new Date();
  const y = o.getFullYear();
  const m = ('0' + (o.getMonth() + 1)).slice(-2);
  const d = ('0' + o.getDate()).slice(-2);
  const h = ('0' + o.getHours()).slice(-2);
  const min = ('0' + o.getMinutes()).slice(-2);
  switch (type) {
    default:
      return y + '_' + m + d + '_' + h + min;
  }
}

module.exports = config;
