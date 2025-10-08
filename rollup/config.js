import { terser } from '@rollup/plugin-terser';
import packageJson from '../package.json' assert { type: 'json' };

const libraryName = 'cibilChecker'; // The global variable name for UMD builds

export default {
  // 1. Entry point for our source code
  input: 'src/index.js',

  // 2. Define the output formats
  output: [
    {
      // Output for Node.js (CommonJS format)
      file: packageJson.main, // dist/index.cjs.js
      format: 'cjs',
    },
    {
      // Output for modern bundlers/ESM (ES Module format)
      file: packageJson.module, // dist/index.esm.js
      format: 'esm',
    },
    {
      // Output for browser global script (UMD format)
      file: 'dist/index.umd.js',
      format: 'umd',
      name: libraryName, // Accessible as 'window.cibilChecker'
      plugins: [terser()], // Minify the UMD build
    },
  ],
  // 3. Plugins to run during the build
  plugins: [
    // We only minify the UMD (browser) build to keep CJS/ESM clean.
  ],
  // Prevent external dependencies (none here, but good practice)
  external: []
};
