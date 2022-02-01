import esbuild from "esbuild";

// Generate CSS/JS Builds
esbuild
  .build({
    logLevel: "debug",
    metafile: true,
    entryPoints: ["src/styles/libro.css", "src/libro.sdk.ts"],
    outdir: "dist/development",
    bundle: true,
  })
  .then(() => console.log("⚡ Styles & Scripts Compiled! ⚡ "))
  .catch(() => process.exit(1));
