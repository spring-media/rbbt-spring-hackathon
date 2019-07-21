module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "airbnb",
    "prettier",
    "prettier/react"
  ],
  "parserOptions": {
    "experimentalObjectRestSpread": true,
    "impliedStrict": true,
    "classes": true
  },
  "env": {
    "browser": true,
    "node": true,
    "jquery": true
  },
  "rules": {
    "prettier/prettier": [
      "error",
      {
        "forbid-prop-types": "false",
        "prefer-destructuring": "false",
        "semi": true,
        "singleQuote": true,
        "printWidth": 120
      }
    ],
  },
  "plugins": ["prettier"]
}