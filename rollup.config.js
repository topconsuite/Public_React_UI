// import sass from "rollup-plugin-sass";
import typescript from "rollup-plugin-typescript2";
import url from "@rollup/plugin-url";
import json from "@rollup/plugin-json";
import alias from "@rollup/plugin-alias";
import path from "path";

import pkg from "./package.json";

export default {
  input: "src/index.tsx",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      exports: "named",
      sourcemap: true,
      strict: false
    }
  ],
  plugins: [
    // sass({ insert: true }),
    alias({
      entries: [
        { find: "@", replacement: path.resolve(__dirname, "src") },
        { find: "@atoms", replacement: path.resolve(__dirname, "src/atoms") },
        { find: "@molecules", replacement: path.resolve(__dirname, "src/molecules") },
        { find: "@organisms", replacement: path.resolve(__dirname, "src/organisms") },
        { find: "@hooks", replacement: path.resolve(__dirname, "src/hooks") },
        { find: "@libraries", replacement: path.resolve(__dirname, "src/libraries") },
        { find: "@assets", replacement: path.resolve(__dirname, "src/assets") },
        { find: "@styles", replacement: path.resolve(__dirname, "src/styles") }
      ]
    }),
    json(),
    url({
      include: ["**/*.svg"],
      limit: Infinity,
      emitFiles: false
    }),
    typescript({ objectHashIgnoreUnknownHack: true })
  ],
  external: ["react", "react-dom", "react-spring", "uuidv4", "jquery", "react-html-parser",
    "react-icons/fi", "styled-components"]
};
