import esbuild from 'esbuild';
import { sassPlugin } from 'esbuild-sass-plugin';

const buildProd = async function () {
  return esbuild.build({
    entryPoints: [
      'src/styles/strigo.scss',
      'src/styles/strigo-widget.scss',
      'src/styles/strigo-assessment-recorder.scss',
      'src/strigo.sdk.ts',
    ],
    outdir: 'dist/production',
    platform: 'browser',
    plugins: [sassPlugin()],
    outExtension: { '.js': '.min.js', '.css': '.min.css' },
    bundle: true,
    minify: true,
  });
};

const buildDev = async function () {
  return esbuild.build({
    logLevel: 'debug',
    metafile: true,
    entryPoints: [
      'src/styles/strigo.scss',
      'src/styles/strigo-widget.scss',
      'src/styles/strigo-assessment-recorder.scss',
      'src/strigo.sdk.ts',
    ],
    platform: 'browser',
    plugins: [sassPlugin()],
    outdir: 'dist/development',
    bundle: true,
  });
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
