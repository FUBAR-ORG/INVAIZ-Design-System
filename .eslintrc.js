module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        "airbnb",
        "airbnb/hooks",
        "plugin:@typescript-eslint/recommended",
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
        "@typescript-eslint"
    ],
    rules: {
        "react/react-in-jsx-scope": 0,
        "no-use-before-define": 0,
        "react/jsx-props-no-spreading": 0,
        "react/jsx-filename-extension": [1, { "extensions": [".tsx"] }],
        "react/prop-types": 0,
        "react-hooks/exhaustive-deps": 0,
        'import/extensions': 0,
        "import/no-unresolved": 0
    },
    ignorePatterns: ["node_modules"]
};
