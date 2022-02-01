import esbuild from "esbuild";

esbuild
  .build({
    entryPoints: ["src/styles/libro.css", "src/libro.sdk.ts"],
    outdir: "dist/production",
    outExtension: { '.js': '.min.js' },
    outExtension: { '.css': '.min.css' },
    bundle: true,
    minify: true
  })
  .then(() => console.log("⚡ Build complete! ⚡"))
  .catch(() => process.exit(1));
