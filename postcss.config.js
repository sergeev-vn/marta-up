const fs = require("fs");

module.exports = {
  syntax: "postcss-scss",
  parser: 'postcss-scss',
  plugins: [
    require("postcss-easy-import")({
      extensions: ".pcss"
    }),
    require("autoprefixer")({
      cascade: false
    }),
    require("postcss-advanced-variables")({
      variables: JSON.parse(
        fs.readFileSync("./src/variables.json", "utf-8")
      )
    }),
    require("postcss-nested"),
    require("postcss-rgb"),
    require("postcss-inline-svg")({
      path: "./src/images/icons"
    }),
    require("cssnano"),
    require("postcss-pxtorem")({
      rootValue: 15,
      propList: ["*", "!*border*"],
      selectorBlackList: [/^html$/]
    })
  ]
};
