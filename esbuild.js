import esbuild from "esbuild";

const buildProd = async function () {
  return esbuild.build({
    entryPoints: ["src/styles/strigo.css", "src/styles/strigo-widget.css", "src/strigo.sdk.ts"],
    outdir: "dist/production",
    platform: "browser",
    outExtension: { ".js": ".min.js", ".css": ".min.css" },
    bundle: true,
    minify: true
  });
};

const buildDev = async function () {
  return esbuild.build({
    logLevel: "debug",
    metafile: true,
    entryPoints: ["src/styles/strigo.css", "src/styles/strigo-widget.css", "src/strigo.sdk.ts"],
    platform: "browser",
    outdir: "dist/development",
    bundle: true
  });
};

const build = async function () {
  await buildProd();
  console.log("⚡ Production Build complete! ⚡")
  await buildDev();
  console.log("⚡ Development Build complete! ⚡")

};

build()
  .then(() => console.log("⚡ Build complete! ⚡"))
  .catch(() => process.exit(1));
