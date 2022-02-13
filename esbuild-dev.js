import "dotenv/config";
import esbuild from "esbuild";
import serve, { error, log } from "create-serve";

const OUT_DIR = "dist/development";

// Generate CSS/JS Builds
esbuild
  .build({
    logLevel: "debug",
    metafile: true,
    entryPoints: ["src/styles/strigo.css", "src/strigo.sdk.ts"],
    platform: "browser",
    // plugins: [envFilePlugin],
    outdir: OUT_DIR,
    bundle: true,
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
