const { join } = require('path')

module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias['@blocks'] = join(__dirname, 'src/blocks');
    config.resolve.alias['@components'] = join(__dirname, 'src/components');

    return config;
  }
};
