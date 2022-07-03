import 'dotenv/config';
import esbuild from 'esbuild';
import { sassPlugin } from 'esbuild-sass-plugin';
import serve, { error, log } from 'create-serve';
import * as fs from 'fs';

const LOCAL_OUT_DIR = 'dist/development';
const EXTENSION_OUT_DIR = '../strigo-academy-chrome-extension/scripts';

const writeBuildResult = (buildResult) => {
  const data = fs.readFileSync('dist/development/strigo.sdk.js').toString().split("\n");
  data.splice(0, 0, "/*global chrome*/");
  const consolidatedText = data.join("\n");

  console.log('writing built file to dist/development/strigo.sdk.js');
  fs.writeFileSync('dist/development/strigo.sdk.js', consolidatedText);

  console.log('writing built file to "../strigo-academy-chrome-extension/scripts/strigo.sdk.js"');
  fs.writeFileSync('../strigo-academy-chrome-extension/scripts/strigo.sdk.js', consolidatedText);

  console.log('⚡ Styles & Scripts Compiled! ⚡ ');
};

// Generate CSS/JS Builds
esbuild
  .build({
    logLevel: 'debug',
    metafile: true,
    entryPoints: [
      'src/styles/strigo.scss',
      'src/styles/strigo-widget.scss',
      'src/styles/strigo-assessment-recorder.scss',
      'src/strigo.sdk.ts',
    ],
    platform: 'browser',
    outdir: process.env.EXTENSION ? EXTENSION_OUT_DIR : LOCAL_OUT_DIR,
    bundle: true,
    plugins: [sassPlugin()],
    define: {
      SDK_LOCAL_URL: `"http://local.strigo.io:${process.env.SDK_HOSTING_PORT}"`,
      RECORDER_LOCAL_URL: `"http://local.strigo.io:${process.env.RECORDER_HOSTING_PORT}"`,
      IS_DEVELOPMENT: `"${process.env.IS_DEVELOPMENT}"`,
    },
    watch: {
      onRebuild(err, buildResult) {
        writeBuildResult(buildResult);
        serve.update();
        err ? error('× Failed') : log('✓ Updated');
      },
    },
  })
  .then(writeBuildResult)
  .catch(() => process.exit(1));

serve.start({
  port: process.env.SDK_HOSTING_PORT || 7000,
  root: process.env.EXTENSION ? EXTENSION_OUT_DIR : LOCAL_OUT_DIR,
  live: true,
});
