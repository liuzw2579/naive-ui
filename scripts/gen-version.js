const { version, naiveVersion } = require('../package.json')

require('fs').writeFileSync(
  require('path').resolve(__dirname, '..', 'src', 'version.ts'),
  `export const NAIVE_VERSION = '${naiveVersion}'\nexport const ITHINKDT_VERSION = '${version}'\nexport default ITHINKDT_VERSION\n`
)
