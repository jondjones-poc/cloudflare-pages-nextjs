const path = require('path')
const withSass = require('@zeit/next-sass');

module.exports = withSass({
  cssModules: true,
  reactStrictMode: true,
  distDir: 'build',
})

module.exports = {
  sassOptions: {
   includePaths: [path.join(__dirname, 'styles')],
  },
}