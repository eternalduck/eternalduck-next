module.exports = {
    "env": {
        "browser": true,
        "es2020": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "semi": ["warn", "never"],
        "padded-blocks": ["warn", "never"],
        "spaced-comment": ["off", "never"],
        "space-before-function-paren": ["warn", "never"],
        "no-multiple-empty-lines": "warn",
        "no-multi-spaces": "warn",
        "space-in-parens": ["warn", "never"],
        "block-spacing": ["warn", "never"],
        "key-spacing": ["off", {
        "beforeColon": false
        }],
        "no-trailing-spaces": "warn",
        "space-infix-ops": "warn",
        "comma-spacing": "warn",
        "operator-linebreak": ["off", "after"],
        "keyword-spacing": ["off", {
        "before": false,
        "after": false
        }],
        "no-mixed-spaces-and-tabs": ["off"],
        "brace-style": ["off", "stroustrup"],
        "space-before-blocks": ["off", "never"],
        "object-curly-spacing": ["off", "never"],
        "object-curly-even-spacing": ["off", "never"],
        "indent": ["off", "tab"],
        "quotes": ["off", "double"],
        "no-tabs": "off",
        "no-useless-escape": "off",
        "comma-dangle": "off",
        "eol-last": "warn",
        "no-unused-vars": "off",
        "no-return-assign": "off"
    }
};
