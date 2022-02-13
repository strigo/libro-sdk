import esbuild from "esbuild";
import envFilePlugin from 'esbuild-envfile-plugin';

esbuild
  .build({
    entryPoints: ["src/styles/strigo.css", "src/strigo.sdk.ts"],
    outdir: "dist/production",
    platform: 'node',
    plugins: [envFilePlugin],
    outExtension: { '.js': '.min.js', '.css': '.min.css' },
    bundle: true,
    minify: true
  })
  .then(() => console.log("⚡ Build complete! ⚡"))
  .catch(() => process.exit(1));
