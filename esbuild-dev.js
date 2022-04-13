import "dotenv/config";
import esbuild from "esbuild";
import {sassPlugin} from 'esbuild-sass-plugin'
import serve, { error, log } from "create-serve";

const OUT_DIR = "dist/development";

// Generate CSS/JS Builds
esbuild
  .build({
    logLevel: "debug",
    metafile: true,
    entryPoints: ["src/styles/strigo.scss", "src/styles/strigo-widget.scss", "src/strigo.sdk.ts"],
    platform: "browser",
    outdir: OUT_DIR,
    bundle: true,
    plugins: [sassPlugin()],
    define: { SDK_HOSTING_PORT: `"${process.env.SDK_HOSTING_PORT}"` },
    watch: {
      onRebuild(err) {
        serve.update();
        err ? error("× Failed") : log("✓ Updated");
      }
    }
  })
  .then(() => {
    console.log("⚡ Styles & Scripts Compiled! ⚡ ");
  })
  .catch(() => process.exit(1));

serve.start({
  port: process.env.SDK_HOSTING_PORT || 7000,
  root: OUT_DIR,
  live: true
});
