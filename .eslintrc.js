module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "next/core-web-vitals"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
            "react/jsx-uses-react": "off",
            "react/react-in-jsx-scope": "off",
            'react/prop-types': ['off'], 
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
}
