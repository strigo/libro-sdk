import 'dotenv/config';
import esbuild from 'esbuild';
import { sassPlugin } from 'esbuild-sass-plugin';
import serve, { error, log } from 'create-serve';

const LOCAL_OUT_DIR = 'dist/development';
const EXTENSION_OUT_DIR = '../strigo-academy-chrome-extension/scripts';

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
      SDK_HOSTING_PORT: `"${process.env.SDK_HOSTING_PORT}"`,
      RECORDER_HOSTING_PORT: `"${process.env.RECORDER_HOSTING_PORT}"`,
      EXTENSION: `"${process.env.EXTENSION}"`,
    },
    watch: {
      onRebuild(err) {
        serve.update();
        err ? error('× Failed') : log('✓ Updated');
      },
    },
  })
  .then(() => {
    console.log('⚡ Styles & Scripts Compiled! ⚡ ');
  })
  .catch(() => process.exit(1));

serve.start({
  port: process.env.SDK_HOSTING_PORT || 7000,
  root: process.env.EXTENSION ? EXTENSION_OUT_DIR : LOCAL_OUT_DIR,
  live: true,
});
