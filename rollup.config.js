import babel from "@rollup/plugin-babel";

export default {
  input: "./src/index.js",
  output: {
    file: "./dist/ugh.js",
    name: "Ugh",
    format: "umd",
    sourcemap: true,
  },
  plugins: [
    babel({
      exclude: "node_modules/**",
    }),
  ],
};
