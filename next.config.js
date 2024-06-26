const { join } = require('path')

module.exports = {
  reactStrictMode: true,
  eslint: {
    dirs: ["src"],
  },
  webpack: (config) => {
    config.resolve.alias['@blocks'] = join(__dirname, 'src/blocks');
    config.resolve.alias['@components'] = join(__dirname, 'src/components');

    return config;
  },
  "headers": [
    {
      "source": "/",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "s-maxage=1, stale-while-revalidate=59"
        }
      ]
    }
  ]
};
