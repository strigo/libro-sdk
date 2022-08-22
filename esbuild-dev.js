import 'dotenv/config';
import esbuild from 'esbuild';
import { sassPlugin } from 'esbuild-sass-plugin';
import serve, { error, log } from 'create-serve';

const LOCAL_OUT_DIR = 'dist/development';

// Generate CSS/JS Builds
esbuild
  .build({
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
    outdir: LOCAL_OUT_DIR,
    bundle: true,
    plugins: [sassPlugin()],
    define: {
      SDK_LOCAL_URL: `"http://local.strigo.io:${process.env.SDK_HOSTING_PORT}"`,
      RECORDER_LOCAL_URL: `"http://local.strigo.io:${process.env.RECORDER_HOSTING_PORT}"`,
      IS_DEVELOPMENT: `"${process.env.IS_DEVELOPMENT}"`,
    },
    watch: {
      onRebuild(err, buildResult) {
        console.log('⚡ Styles & Scripts ReCompiled! ⚡ ');
        serve.update();
        err ? error('× Failed') : log('✓ Updated');
      },
    },
  })
  .then(() => {
    console.log('⚡ Styles & Scripts Compiled! ⚡ ');
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });

serve.start({
  port: process.env.SDK_HOSTING_PORT || 7000,
  root: LOCAL_OUT_DIR,
  live: true,
});
