
const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['scripts/deployEntryPoint.ts', 'scripts/deployToken.ts', 'scripts/deploySmartWallet.ts'],
  bundle: true,
  outfile: 'dist/deploy-bundle.js',  // Output the bundled file
  platform: 'node',  // Set to Node.js since we're running this on the backend
  target: 'es2020',  // Set the target for compatibility
  sourcemap: true,
  external: ['ethers'], // Externalize certain dependencies (like ethers) to reduce bundle size
}).catch(() => process.exit(1));
