module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        "airbnb",
        "airbnb/hooks",
        "plugin:@typescript-eslint/recommended",
        "eslint-config-prettier"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2020,
        "sourceType": "module",
    },
    plugins: [
        "react",
        "@typescript-eslint",
        "prettier"
    ],
    rules: {
        "react/react-in-jsx-scope": "off",
        "no-use-before-define": "off",
        "react/jsx-props-no-spreading": "off",
        "react/jsx-filename-extension": [1, { "extensions": [".ts", ".tsx"] }],
        "react/prop-types": "off",
        "react-hooks/exhaustive-deps": "off",
        'import/extensions': "off",
        "import/no-unresolved": "off",
        "prettier/prettier": "error",
    },
    ignorePatterns: ["node_modules"]
};
