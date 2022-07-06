import esbuild from 'esbuild';
import { sassPlugin } from 'esbuild-sass-plugin';
import * as fs from 'fs';

const LOCAL_OUT_DIR = 'dist/development';
const EXTENSION_OUT_DIR = '../strigo-academy-chrome-extension/scripts';

const writeBuildResultToExtension = (buildResult) => {
  const data = fs.readFileSync('dist/development/strigo.sdk.js', 'utf8');
  console.log(`writing built file to "${EXTENSION_OUT_DIR}"`);
  fs.writeFileSync(`${EXTENSION_OUT_DIR}/strigo.sdk.js`, data);

  console.log('⚡ Styles & Scripts Compiled! ⚡ ');
};

const buildProd = async function () {
  return esbuild.build({
    entryPoints: [
      'src/styles/strigo.scss',
      'src/styles/strigo-widget.scss',
      'src/styles/strigo-academy-hat.scss',
      'src/styles/strigo-assessment-recorder.scss',
      'src/strigo.sdk.ts',
    ],
    outdir: 'dist/production',
    platform: 'browser',
    plugins: [sassPlugin()],
    outExtension: { '.js': '.min.js', '.css': '.min.css' },
    bundle: true,
    minify: true,
    define: {
      IS_DEVELOPMENT: `"false"`,
    },
  });
};

const buildDev = async function () {
  return esbuild.build({
    logLevel: 'debug',
    metafile: true,
    entryPoints: [
      'src/styles/strigo.scss',
      'src/styles/strigo-widget.scss',
      'src/styles/strigo-academy-hat.scss',
      'src/styles/strigo-assessment-recorder.scss',
      'src/strigo.sdk.ts',
    ],
    platform: 'browser',
    plugins: [sassPlugin()],
    outdir: LOCAL_OUT_DIR,
    bundle: true,
    define: {
      IS_DEVELOPMENT: `"false"`,
    },
  }).then(writeBuildResultToExtension);
};

const build = async function () {
  await buildProd();
  console.log('⚡ Production Build complete! ⚡');
  await buildDev();
  console.log('⚡ Development Build complete! ⚡');
};

build()
  .then(() => console.log('⚡ Build complete! ⚡'))
  .catch(() => process.exit(1));
