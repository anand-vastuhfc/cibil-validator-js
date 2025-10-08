import terser from '@rollup/plugin-terser'; // CHANGED: Now using the default export
import fs from 'fs';

// Read package.json data synchronously using Node's fs module
const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));

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
      plugins: [terser()], // Use terser() as the plugin call
    },
  ],
  // 3. Plugins to run during the build
  plugins: [
    // We can add the terser plugin here to minify all output files if needed,
    // but for now, we keep it only in the UMD output as planned.
  ],
  // Prevent external dependencies
  external: []
};
